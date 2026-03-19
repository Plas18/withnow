*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
:root{
  --bg:#0a0a0f;--surface:#111118;--surface2:#18181f;
  --text:#e8e4d9;--muted:rgba(232,228,217,0.35);--dim:rgba(232,228,217,0.13);
  --green:#639922;--gd:#2d5012;--gm:#3d6b1a;--gb:#4a8020;
  --gold:#f5c842;--gold-d:#d4900a;
}
html,body{height:100%;overflow:hidden;background:var(--bg);}
body{font-family:'DM Mono',monospace;color:var(--text);display:flex;justify-content:center;align-items:flex-start;}
.phone{width:100%;max-width:430px;height:100vh;background:var(--bg);display:flex;flex-direction:column;position:relative;overflow:hidden;}
.status-bar{padding:14px 24px 8px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;}
.status-time{font-size:12px;font-weight:500;}
.status-icons{font-size:11px;letter-spacing:2px;}
.screens{flex:1;position:relative;overflow:hidden;}
.screen{position:absolute;inset:0;padding:1.25rem 1.25rem 0;display:none;flex-direction:column;overflow-y:auto;scrollbar-width:none;}
.screen::-webkit-scrollbar{display:none;}
.screen.active{display:flex;}
.tab-bar{flex-shrink:0;display:flex;align-items:flex-start;padding:10px 8px 24px;border-top:0.5px solid rgba(232,228,217,0.06);background:var(--bg);gap:4px;}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;padding:6px 4px;border-radius:12px;transition:all 0.2s;border:none;background:transparent;}
.tab-svg{width:22px;height:22px;}
.tab-svg path,.tab-svg circle,.tab-svg rect{stroke:rgba(232,228,217,0.18);fill:none;stroke-width:1.5;stroke-linecap:round;transition:stroke 0.2s;}
.tab.active .tab-svg path,.tab.active .tab-svg circle,.tab.active .tab-svg rect{stroke:var(--green);}
.tab-label{font-size:9px;letter-spacing:0.08em;color:var(--dim);transition:color 0.2s;font-family:'DM Mono',monospace;}
.tab.active .tab-label{color:var(--green);}

/* NOW */
.s1-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;}
.logo{font-family:'Instrument Serif',serif;font-style:italic;font-size:22px;opacity:0.4;}
.live-clock{font-size:12px;color:var(--muted);}
.pip-strip{display:flex;align-items:center;gap:10px;background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);border-radius:16px;padding:10px 14px;margin-bottom:1rem;}
.pip-bubble{font-family:'Instrument Serif',serif;font-style:italic;font-size:12px;color:var(--muted);line-height:1.5;transition:all 0.4s;}
.task-area{text-align:center;margin-bottom:1.25rem;}
.now-label{font-size:9px;letter-spacing:0.25em;color:var(--green);text-transform:uppercase;margin-bottom:0.5rem;opacity:0.8;}
.task-display{font-family:'Instrument Serif',serif;font-size:22px;line-height:1.2;color:var(--text);cursor:pointer;min-height:52px;display:flex;align-items:center;justify-content:center;opacity:0.8;}
.task-input{font-family:'Instrument Serif',serif;font-size:20px;background:transparent;border:none;border-bottom:1px solid rgba(232,228,217,0.12);color:var(--text);text-align:center;width:100%;outline:none;padding:0.4rem 0;display:none;}
.task-input::placeholder{color:rgba(232,228,217,0.15);}
.task-input.show{display:block;}
.task-display.hide{display:none;}
.ring-wrap{display:flex;justify-content:center;margin-bottom:1rem;position:relative;}
.ring-svg{transform:rotate(-90deg);}
.ring-track{fill:none;stroke:rgba(232,228,217,0.06);stroke-width:3;}
.ring-fill{fill:none;stroke:var(--green);stroke-width:3;stroke-linecap:round;transition:stroke-dashoffset 1s linear,stroke 1s ease;}
.ring-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}
.ring-time{font-size:30px;font-weight:300;letter-spacing:-2px;line-height:1;}
.ring-time span{font-size:12px;opacity:0.35;margin-left:1px;}
.ring-state{font-size:9px;letter-spacing:0.2em;color:var(--muted);text-transform:uppercase;margin-top:3px;}
.pills{display:flex;gap:6px;justify-content:center;margin-bottom:1rem;flex-wrap:wrap;}
.pill{font-family:'DM Mono',monospace;font-size:11px;padding:5px 12px;border-radius:100px;border:0.5px solid rgba(232,228,217,0.1);background:transparent;color:var(--muted);cursor:pointer;transition:all 0.2s;}
.pill.active{border-color:var(--green);color:var(--green);background:rgba(99,153,34,0.08);}
.controls{display:flex;gap:10px;align-items:center;justify-content:center;margin-bottom:1rem;}
.btn-main{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;padding:11px 28px;border-radius:100px;border:0.5px solid rgba(99,153,34,0.4);background:rgba(99,153,34,0.08);color:var(--green);cursor:pointer;transition:all 0.2s;}
.btn-main:hover{background:rgba(99,153,34,0.16);}
.btn-main.running{border-color:rgba(232,228,217,0.12);background:transparent;color:var(--muted);}
.btn-icon{width:38px;height:38px;border-radius:50%;border:0.5px solid rgba(232,228,217,0.08);background:transparent;color:var(--muted);cursor:pointer;font-size:13px;transition:all 0.2s;font-family:'DM Mono',monospace;}
.btn-icon:hover{border-color:rgba(232,228,217,0.22);color:var(--text);}
.s1-footer{display:flex;justify-content:space-between;align-items:center;}
.status-msg{font-size:10px;color:var(--dim);font-style:italic;}
.streak-badge{font-size:10px;color:rgba(99,153,34,0.45);}
.log-list{margin-top:0.75rem;border-top:0.5px solid rgba(232,228,217,0.05);padding-top:0.75rem;display:flex;flex-direction:column;gap:5px;padding-bottom:1rem;}
.log-item{display:flex;justify-content:space-between;font-size:11px;color:var(--dim);padding:2px 0;animation:fadeIn 0.4s ease;}
.log-check{color:var(--green);opacity:0.5;margin-right:5px;}
@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}

/* PROGRESS */
.screen-title{font-family:'Instrument Serif',serif;font-style:italic;font-size:24px;color:var(--text);opacity:0.7;margin-bottom:4px;}
.screen-sub{font-size:10px;color:var(--muted);letter-spacing:0.08em;margin-bottom:1.25rem;}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.25rem;}
.stat-card{background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);border-radius:16px;padding:14px;}
.stat-label{font-size:9px;letter-spacing:0.12em;color:var(--muted);text-transform:uppercase;margin-bottom:6px;}
.stat-value{font-size:26px;font-weight:300;letter-spacing:-1px;color:var(--text);}
.stat-unit{font-size:11px;color:var(--muted);margin-left:2px;}
.chart-card{background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);border-radius:16px;padding:16px;margin-bottom:1.25rem;}
.chart-title{font-size:10px;letter-spacing:0.1em;color:var(--muted);text-transform:uppercase;margin-bottom:14px;}
.bar-chart{display:flex;align-items:flex-end;gap:8px;height:80px;}
.bar-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;height:100%;justify-content:flex-end;}
.bar{width:100%;border-radius:4px 4px 0 0;background:rgba(99,153,34,0.2);min-height:3px;transition:height 0.6s ease;}
.bar.today{background:var(--green);}
.bar-day{font-size:8px;color:var(--dim);}
.today-label{color:var(--green);}
.best-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);border-radius:12px;margin-bottom:8px;}
.best-label{font-size:11px;color:var(--muted);}
.best-value{font-size:11px;color:var(--green);}

/* REWARDS */
.xp-card{background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);border-radius:20px;padding:20px;margin-bottom:1.25rem;display:flex;flex-direction:column;align-items:center;gap:12px;}
.level-badge{font-size:9px;letter-spacing:0.2em;color:var(--green);text-transform:uppercase;background:rgba(99,153,34,0.1);border:0.5px solid rgba(99,153,34,0.22);padding:4px 12px;border-radius:100px;}
.level-name{font-family:'Instrument Serif',serif;font-style:italic;font-size:28px;color:var(--text);opacity:0.8;}
.xp-bar-wrap{width:100%;height:4px;background:rgba(232,228,217,0.07);border-radius:100px;overflow:hidden;}
.xp-bar-fill{height:100%;background:var(--green);border-radius:100px;transition:width 1s ease;}
.xp-label{font-size:10px;color:var(--dim);letter-spacing:0.08em;}
.milestones-title{font-size:9px;letter-spacing:0.2em;color:var(--muted);text-transform:uppercase;margin-bottom:10px;}
.milestone{display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);border-radius:14px;margin-bottom:8px;transition:opacity 0.4s;}
.milestone.locked{opacity:0.3;}
.milestone-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}
.mi-green{background:rgba(99,153,34,0.14);}
.mi-gold{background:rgba(245,200,66,0.12);}
.mi-gray{background:rgba(232,228,217,0.05);}
.milestone-info{flex:1;}
.milestone-name{font-size:12px;color:var(--text);margin-bottom:2px;}
.milestone-desc{font-size:10px;color:var(--muted);}
.milestone-check{font-size:12px;color:var(--green);}
.pip-reward-wrap{display:flex;justify-content:center;margin-bottom:0.75rem;}

/* PROFILE */
.profile-hero{display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:1.25rem;}
.avatar{width:72px;height:72px;border-radius:50%;background:var(--surface2);border:2px solid rgba(99,153,34,0.25);display:flex;align-items:center;justify-content:center;font-size:28px;cursor:pointer;position:relative;}
.avatar-edit{position:absolute;bottom:0;right:0;width:20px;height:20px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:white;}
.profile-name{font-family:'Instrument Serif',serif;font-style:italic;font-size:22px;color:var(--text);opacity:0.8;cursor:pointer;}
.profile-name:hover{opacity:1;}
.profile-since{font-size:10px;color:var(--muted);letter-spacing:0.08em;}

/* EMOJI PICKER */
.emoji-picker{background:var(--surface);border:0.5px solid rgba(232,228,217,0.08);border-radius:20px;padding:16px;margin-bottom:1rem;display:none;}
.emoji-picker.show{display:block;}
.emoji-picker-title{font-size:9px;letter-spacing:0.2em;color:var(--muted);text-transform:uppercase;margin-bottom:12px;text-align:center;}
.emoji-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-bottom:12px;}
.emoji-option{font-size:24px;text-align:center;cursor:pointer;padding:6px;border-radius:10px;transition:background 0.15s;border:2px solid transparent;}
.emoji-option:hover{background:rgba(232,228,217,0.06);}
.emoji-option.selected{border-color:var(--green);background:rgba(99,153,34,0.08);}
.emoji-close{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;padding:10px;border-radius:100px;border:0.5px solid rgba(99,153,34,0.35);background:rgba(99,153,34,0.07);color:var(--green);cursor:pointer;width:100%;transition:background 0.2s;}
.emoji-close:hover{background:rgba(99,153,34,0.14);}

/* NAME EDITOR */
.name-editor{background:var(--surface);border:0.5px solid rgba(232,228,217,0.08);border-radius:16px;padding:16px;margin-bottom:1rem;display:none;}
.name-editor.show{display:block;}
.name-input{font-family:'Instrument Serif',serif;font-size:18px;background:transparent;border:none;border-bottom:1px solid rgba(232,228,217,0.12);color:var(--text);width:100%;outline:none;padding:0.4rem 0;margin-bottom:12px;}
.name-input::placeholder{color:rgba(232,228,217,0.18);}
.name-save{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;padding:10px;border-radius:100px;border:0.5px solid rgba(99,153,34,0.35);background:rgba(99,153,34,0.07);color:var(--green);cursor:pointer;width:100%;transition:background 0.2s;}
.name-save:hover{background:rgba(99,153,34,0.14);}

.settings-section{margin-bottom:1.25rem;}
.settings-label{font-size:9px;letter-spacing:0.2em;color:var(--dim);text-transform:uppercase;margin-bottom:8px;padding:0 4px;}
.setting-row{display:flex;align-items:center;justify-content:space-between;padding:13px 14px;background:var(--surface);border:0.5px solid rgba(232,228,217,0.06);margin-bottom:6px;border-radius:14px;cursor:pointer;transition:background 0.15s;}
.setting-row:hover{background:var(--surface2);}
.setting-left{display:flex;align-items:center;gap:10px;}
.setting-icon{font-size:14px;width:20px;text-align:center;}
.setting-name{font-size:12px;color:var(--text);}
.setting-right{font-size:11px;color:var(--muted);}
.toggle{width:36px;height:20px;background:var(--green);border-radius:100px;position:relative;cursor:pointer;transition:background 0.2s;flex-shrink:0;}
.toggle.off{background:rgba(232,228,217,0.1);}
.toggle::after{content:'';position:absolute;width:16px;height:16px;background:white;border-radius:50%;top:2px;left:2px;transition:transform 0.2s;}
.toggle:not(.off)::after{transform:translateX(16px);}

/* RITUAL */
.ritual-overlay{position:absolute;inset:0;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2.5rem 2rem;opacity:0;pointer-events:none;transition:opacity 0.35s;z-index:40;}
.ritual-overlay.show{opacity:1;pointer-events:all;}
.ritual-step{display:none;flex-direction:column;align-items:center;gap:1.5rem;text-align:center;width:100%;animation:stepIn 0.35s ease both;}
.ritual-step.active{display:flex;}
@keyframes stepIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.ritual-pip{margin-bottom:0.25rem;}
.ritual-eyebrow{font-size:9px;letter-spacing:0.22em;color:var(--green);text-transform:uppercase;opacity:0.8;}
.ritual-heading{font-family:'Instrument Serif',serif;font-style:italic;font-size:24px;color:var(--text);opacity:0.85;line-height:1.3;}
.breath-wrap{position:relative;width:150px;height:150px;display:flex;align-items:center;justify-content:center;}
.breath-svg{position:absolute;inset:0;}
.breath-track{fill:none;stroke:rgba(232,228,217,0.05);stroke-width:2;}
.breath-arc{fill:none;stroke:var(--green);stroke-width:2;stroke-linecap:round;stroke-dasharray:408;stroke-dashoffset:408;}
.breath-core{width:90px;height:90px;border-radius:50%;background:rgba(99,153,34,0.06);border:0.5px solid rgba(99,153,34,0.12);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;transition:transform 1s ease,background 1s ease;}
.breath-phase-label{font-size:9px;letter-spacing:0.18em;color:var(--green);text-transform:uppercase;}
.breath-num{font-size:26px;font-weight:300;letter-spacing:-1px;color:var(--text);}
.breath-round{font-size:9px;color:var(--dim);letter-spacing:0.1em;}
.ritual-skip{font-size:10px;color:var(--dim);cursor:pointer;letter-spacing:0.08em;background:none;border:none;font-family:'DM Mono',monospace;padding:4px 8px;transition:color 0.2s;}
.ritual-skip:hover{color:var(--muted);}
.energy-cards{display:flex;gap:10px;width:100%;}
.energy-card{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px 8px;background:var(--surface);border:0.5px solid rgba(232,228,217,0.07);border-radius:18px;cursor:pointer;transition:all 0.2s;}
.energy-card:hover{border-color:rgba(232,228,217,0.18);background:var(--surface2);}
.energy-card.selected{border-color:var(--green);background:rgba(99,153,34,0.08);}
.energy-icon{font-size:24px;line-height:1;}
.energy-label{font-size:10px;color:var(--muted);letter-spacing:0.08em;}
.energy-card.selected .energy-label{color:var(--green);}
.ritual-launch{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;padding:13px 32px;border-radius:100px;border:0.5px solid rgba(99,153,34,0.4);background:rgba(99,153,34,0.08);color:var(--green);cursor:pointer;transition:all 0.25s;opacity:0.3;pointer-events:none;width:100%;}
.ritual-launch.ready{opacity:1;pointer-events:all;}
.ritual-launch.ready:hover{background:rgba(99,153,34,0.18);}

/* REWARD */
.reward-overlay{position:absolute;inset:0;background:rgba(10,10,15,0.96);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;opacity:0;pointer-events:none;transition:opacity 0.4s;z-index:50;padding:2rem;}
.reward-overlay.show{opacity:1;pointer-events:all;}
.reward-title{font-family:'Instrument Serif',serif;font-style:italic;font-size:28px;color:var(--text);text-align:center;animation:slideUp 0.5s 0.1s ease both;}
.reward-sub{font-size:11px;color:var(--muted);letter-spacing:0.08em;text-align:center;animation:slideUp 0.5s 0.2s ease both;}
.reward-xp{font-size:13px;color:var(--green);letter-spacing:0.12em;animation:slideUp 0.5s 0.3s ease both;}
.reward-bar-wrap{width:160px;height:3px;background:rgba(232,228,217,0.07);border-radius:100px;overflow:hidden;animation:slideUp 0.5s 0.35s ease both;}
.reward-bar-fill{height:100%;background:var(--green);border-radius:100px;width:0%;transition:width 1.2s 0.5s ease;}
.reward-btn{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;padding:11px 28px;border-radius:100px;border:0.5px solid rgba(99,153,34,0.35);background:rgba(99,153,34,0.07);color:var(--green);cursor:pointer;animation:slideUp 0.5s 0.4s ease both;transition:background 0.2s;}
.reward-btn:hover{background:rgba(99,153,34,0.16);}
@keyframes slideUp{from{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}
.particle{position:absolute;width:5px;height:5px;border-radius:50%;pointer-events:none;animation:pFly var(--d) ease-out forwards;}
@keyframes pFly{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--tx),var(--ty)) scale(0);opacity:0}}

/* PIP ANIMATIONS */
@keyframes pipFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes pipBlink{0%,84%,100%{transform:scaleY(1)}90%{transform:scaleY(0.06)}}
@keyframes pipBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
.pf{animation:pipFloat 3.2s ease-in-out infinite;}
.pb{animation:pipBlink 4s ease-in-out infinite;transform-origin:50px 44px;}
.pBreathe{animation:pipBreathe 4s ease-in-out infinite;}
