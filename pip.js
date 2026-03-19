// ritual.js — pre-session breathing and energy check
const Ritual = {
  enabled: true,
  done: false,
  energyMsg: 'ready when you are.',
  breathPhaseIdx: 0,
  breathRound: 1,
  breathTimer: null,

  PHASES: [
    { name: 'inhale', dur: 4, scale: 1.15, bg: 'rgba(99,153,34,0.12)' },
    { name: 'hold',   dur: 4, scale: 1.15, bg: 'rgba(99,153,34,0.07)' },
    { name: 'exhale', dur: 4, scale: 1,    bg: 'rgba(99,153,34,0.04)' },
    { name: 'hold',   dur: 4, scale: 1,    bg: 'rgba(99,153,34,0.02)' }
  ],

  ENERGY: {
    low:    'easy does it. one thing at a time.',
    medium: 'you\'ve got this. steady and focused.',
    high:   'you\'re locked in. go get it.'
  },

  init() {
    document.getElementById('skipBreath').addEventListener('click', () => { this.stop(); this.goStep2(); });
    document.getElementById('skipEnergy').addEventListener('click', () => this.close());
    document.getElementById('ritualLaunch').addEventListener('click', () => this.close());

    document.querySelectorAll('.energy-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.energy-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.energyMsg = this.ENERGY[card.dataset.energy];
        document.getElementById('ritualLaunch').classList.add('ready');
      });
    });
  },

  open() {
    this.breathPhaseIdx = 0;
    this.breathRound = 1;
    document.querySelectorAll('.ritual-step').forEach(s => s.classList.remove('active'));
    document.getElementById('rStep1').classList.add('active');
    document.getElementById('ritualOverlay').classList.add('show');
    this.startBreath();
  },

  close() {
    document.getElementById('ritualOverlay').classList.remove('show');
    this.stop();
    this.done = true;
    // Reset energy cards for next time
    document.querySelectorAll('.energy-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('ritualLaunch').classList.remove('ready');
    // Start the session
    Timer.begin(this.energyMsg);
  },

  goStep2() {
    document.getElementById('rStep1').classList.remove('active');
    document.getElementById('rStep2').classList.add('active');
  },

  startBreath() { this.runPhase(); },

  stop() { clearInterval(this.breathTimer); },

  runPhase() {
    const ph = this.PHASES[this.breathPhaseIdx];
    document.getElementById('breathPhase').textContent = ph.name;
    document.getElementById('breathNum').textContent = ph.dur;
    document.getElementById('breathRound').textContent = 'round ' + this.breathRound + ' of 2';
    document.getElementById('breathCore').style.transform = 'scale(' + ph.scale + ')';
    document.getElementById('breathCore').style.background = ph.bg;

    const totalSteps = ph.dur * 20;
    let step = 0;
    clearInterval(this.breathTimer);

    this.breathTimer = setInterval(() => {
      step++;
      const roundProgress = ((this.breathRound - 1) + ((this.breathPhaseIdx + (step / totalSteps)) / 4)) / 2;
      document.getElementById('breathArc').style.strokeDashoffset = 408 * (1 - roundProgress);
      document.getElementById('breathNum').textContent = Math.max(ph.dur - Math.floor(step / 20), 0);

      if (step >= totalSteps) {
        clearInterval(this.breathTimer);
        this.breathPhaseIdx++;
        if (this.breathPhaseIdx >= 4) {
          this.breathPhaseIdx = 0;
          this.breathRound++;
          if (this.breathRound > 2) {
            document.getElementById('breathPhase').textContent = 'done';
            document.getElementById('breathNum').textContent = '\u2713';
            document.getElementById('breathRound').textContent = 'well done.';
            document.getElementById('breathCore').style.background = 'rgba(99,153,34,0.18)';
            setTimeout(() => this.goStep2(), 900);
            return;
          }
        }
        this.runPhase();
      }
    }, 1000 / 20);
  }
};
