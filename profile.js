// storage.js — all localStorage read/write lives here
const Storage = {
  KEY: 'withnow_data',

  defaults() {
    return {
      totalXP: 0,
      currentLevel: 0,
      completedTotal: 0,
      totalMinAllTime: 0,
      bestSession: 0,
      bestDay: 0,
      memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      userName: '',
      userAvatar: '🌿',
      ritualEnabled: true,
      soundsEnabled: true,
      nudgesEnabled: true,
      weekData: [0, 0, 0, 0, 0, 0, 0],
      lastActiveDate: new Date().toDateString(),
      todayMin: 0,
      todaySessionCount: 0,
      streakDays: 0,
      log: []
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this.defaults();
      const saved = JSON.parse(raw);
      return { ...this.defaults(), ...saved };
    } catch (e) {
      return this.defaults();
    }
  },

  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  },

  reset() {
    localStorage.removeItem(this.KEY);
    return this.defaults();
  },

  // Check if it's a new day and reset daily stats
  checkNewDay(data) {
    const today = new Date().toDateString();
    if (data.lastActiveDate !== today) {
      // New day — shift week data
      const dayOfWeek = new Date().getDay();
      data.weekData[dayOfWeek] = 0;
      data.todayMin = 0;
      data.todaySessionCount = 0;
      data.lastActiveDate = today;
    }
    return data;
  }
};
