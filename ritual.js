// app.js — main coordinator, boots everything up
const App = {
  data: null,

  init() {
    // Load saved data
    this.data = Storage.load();
    this.data = Storage.checkNewDay(this.data);

    // Init all modules
    Pip.init();
    Ritual.init();
    Timer.init();
    Profile.init();

    // Tab navigation
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.dataset.tab);
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('screen-' + idx).classList.add('active');
      });
    });

    // Clock
    this.updateClock();
    setInterval(() => this.updateClock(), 15000);

    // Render UI from saved data
    this.refreshUI();
  },

  updateClock() {
    const now = new Date();
    const h = now.getHours() % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, '0');
    const ap = now.getHours() >= 12 ? 'pm' : 'am';
    document.getElementById('liveClock').textContent = h + ':' + m + ' ' + ap;
    document.getElementById('statusTime').textContent = h + ':' + m;
  },

  refreshUI() {
    const d = this.data;
    const LEVELS = Timer.LEVELS;

    // Progress stats
    document.getElementById('statToday').innerHTML = d.todayMin + '<span class="stat-unit">m</span>';
    document.getElementById('statSessions').textContent = d.todaySessionCount;
    document.getElementById('statXP').textContent = d.totalXP;
    document.getElementById('statStreak').innerHTML = d.streakDays + '<span class="stat-unit">d</span>';
    document.getElementById('totalTime').textContent = d.totalMinAllTime + ' min';
    document.getElementById('bestSession').textContent = d.bestSession > 0 ? d.bestSession + ' min' : '— min';
    document.getElementById('bestDay').textContent = d.bestDay > 0 ? d.bestDay + ' min' : '— min';

    // Week bars
    const days = ['sun','mon','tue','wed','thu','fri','sat'];
    const todayIdx = new Date().getDay();
    const maxMin = Math.max(...d.weekData, 60);
    d.weekData.forEach((min, i) => {
      const bar = document.getElementById('bar-' + i);
      const label = document.getElementById('day-' + i);
      if (bar) {
        const pct = Math.max((min / maxMin) * 100, 3);
        bar.style.height = pct + '%';
        bar.classList.toggle('today', i === todayIdx);
      }
      if (label) {
        label.textContent = days[i];
        label.classList.toggle('today-label', i === todayIdx);
      }
    });

    // Today's bar highlight
    document.getElementById('streakBadge').textContent = d.todaySessionCount > 0 ? d.todaySessionCount + ' done today' : '';

    // Session log
    const logList = document.getElementById('logList');
    logList.innerHTML = '';
    (d.log || []).slice(0, 5).forEach(entry => {
      const item = document.createElement('div');
      item.className = 'log-item';
      item.innerHTML = '<span><span class="log-check">\u2713</span>' + (entry.task || 'unnamed session') + '</span><span>' + entry.min + 'm</span>';
      logList.appendChild(item);
    });

    // Level & XP
    const lvl = LEVELS[d.currentLevel] || LEVELS[0];
    document.getElementById('levelBadge').textContent = 'level ' + (d.currentLevel + 1);
    document.getElementById('levelName').textContent = lvl.name;
    const xpPct = Math.min(((d.totalXP - lvl.min) / (lvl.max - lvl.min)) * 100, 100);
    document.getElementById('xpBarFill').style.width = xpPct + '%';
    document.getElementById('xpLabel').textContent = d.totalXP + ' / ' + lvl.max + ' xp to next level';

    // Milestones
    if (d.completedTotal >= 1) {
      document.getElementById('ms1').textContent = '\u2713';
    }
    if (d.completedTotal >= 5) {
      document.getElementById('ms2').textContent = '\u2713';
      document.getElementById('ms-row2').classList.remove('locked');
    }
    if (d.totalMinAllTime >= 120) {
      document.getElementById('ms3').textContent = '\u2713';
      document.getElementById('ms-row3').classList.remove('locked');
    }
    if (d.currentLevel >= 1) {
      document.getElementById('ms4').textContent = '\u2713';
      document.getElementById('ms-row4').classList.remove('locked');
    }

    // Profile
    Profile.render();
  }
};

// Boot the app
document.addEventListener('DOMContentLoaded', () => App.init());
