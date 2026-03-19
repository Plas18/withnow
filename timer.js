// profile.js — name editing, avatar picker, settings
const Profile = {
  EMOJIS: [
    '🌿','🌱','🍃','🌸','🌺','🌻','🦋','🐢','🦊','🐼',
    '🐨','🦉','🐸','🌙','⭐','🔥','💧','🍀','🎯','🎸',
    '🎨','📚','🧘','🏔️','🌊','☀️','🌈','⚡','🍵','🎋'
  ],

  init() {
    // Avatar click opens emoji picker
    document.getElementById('avatarEl').addEventListener('click', () => this.togglePicker());
    document.getElementById('avatarEditBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.togglePicker();
    });

    // Close emoji picker
    document.getElementById('emojiClose').addEventListener('click', () => this.closePicker());

    // Name click opens editor
    document.getElementById('profileNameDisplay').addEventListener('click', () => this.toggleNameEditor());
    document.getElementById('editNameRow').addEventListener('click', () => this.toggleNameEditor());

    // Save name
    document.getElementById('nameSave').addEventListener('click', () => this.saveName());
    document.getElementById('nameInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') this.saveName();
    });

    // Reset data
    document.getElementById('resetRow').addEventListener('click', () => {
      if (confirm('Reset all data? This cannot be undone.')) {
        App.data = Storage.reset();
        App.refreshUI();
        this.render();
      }
    });

    // Toggles
    document.getElementById('toggleNudges').addEventListener('click', () => {
      App.data.nudgesEnabled = !App.data.nudgesEnabled;
      document.getElementById('toggleNudges').classList.toggle('off', !App.data.nudgesEnabled);
      Storage.save(App.data);
    });

    document.getElementById('toggleSounds').addEventListener('click', () => {
      App.data.soundsEnabled = !App.data.soundsEnabled;
      document.getElementById('toggleSounds').classList.toggle('off', !App.data.soundsEnabled);
      Storage.save(App.data);
    });

    document.getElementById('toggleRitual').addEventListener('click', () => {
      App.data.ritualEnabled = !App.data.ritualEnabled;
      Ritual.enabled = App.data.ritualEnabled;
      document.getElementById('toggleRitual').classList.toggle('off', !App.data.ritualEnabled);
      Storage.save(App.data);
    });

    // Build emoji grid
    this.buildGrid();
    this.render();
  },

  buildGrid() {
    const grid = document.getElementById('emojiGrid');
    grid.innerHTML = '';
    this.EMOJIS.forEach(emoji => {
      const btn = document.createElement('div');
      btn.className = 'emoji-option';
      btn.textContent = emoji;
      btn.addEventListener('click', () => this.selectEmoji(emoji));
      grid.appendChild(btn);
    });
  },

  selectEmoji(emoji) {
    App.data.userAvatar = emoji;
    Storage.save(App.data);
    document.getElementById('avatarEmoji').textContent = emoji;
    // Update selected state
    document.querySelectorAll('.emoji-option').forEach(btn => {
      btn.classList.toggle('selected', btn.textContent === emoji);
    });
  },

  togglePicker() {
    const picker = document.getElementById('emojiPicker');
    const isOpen = picker.classList.contains('show');
    picker.classList.toggle('show', !isOpen);
    document.getElementById('nameEditor').classList.remove('show');
    // Highlight current avatar
    document.querySelectorAll('.emoji-option').forEach(btn => {
      btn.classList.toggle('selected', btn.textContent === App.data.userAvatar);
    });
  },

  closePicker() {
    document.getElementById('emojiPicker').classList.remove('show');
  },

  toggleNameEditor() {
    const editor = document.getElementById('nameEditor');
    const isOpen = editor.classList.contains('show');
    editor.classList.toggle('show', !isOpen);
    document.getElementById('emojiPicker').classList.remove('show');
    if (!isOpen) {
      document.getElementById('nameInput').value = App.data.userName;
      document.getElementById('nameInput').focus();
    }
  },

  saveName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      App.data.userName = name;
      Storage.save(App.data);
      document.getElementById('profileNameDisplay').textContent = name;
      Pip.say('nice to meet you, ' + name + '.');
    }
    document.getElementById('nameEditor').classList.remove('show');
  },

  render() {
    const data = App.data;
    // Avatar
    document.getElementById('avatarEmoji').textContent = data.userAvatar || '🌿';
    // Name
    document.getElementById('profileNameDisplay').textContent = data.userName || 'your name';
    // Since
    document.getElementById('profileSince').textContent = 'member since ' + (data.memberSince || 'today');
    // Toggles
    document.getElementById('toggleNudges').classList.toggle('off', !data.nudgesEnabled);
    document.getElementById('toggleSounds').classList.toggle('off', !data.soundsEnabled);
    document.getElementById('toggleRitual').classList.toggle('off', !data.ritualEnabled);
    // Sync ritual state
    Ritual.enabled = data.ritualEnabled;
  }
};
