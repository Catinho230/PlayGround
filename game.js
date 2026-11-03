const roster = [
  {name:'Jonathan Joestar',short:'JONATHAN',part:'PART 1 · PHANTOM BLOOD',style:'HAMON',color:'#254b72',skin:'#d79c73',hair:'#33251f',role:'Hamon hero'},
  {name:'Dio Brando',short:'DIO',part:'PART 1 · PHANTOM BLOOD',style:'VAMPIRE',color:'#9c2635',skin:'#e3ae83',hair:'#e0bd63',role:'Vampire'},
  {name:'Joseph Joestar',short:'JOSEPH',part:'PART 2 · BATTLE TENDENCY',style:'HAMON · TRICKSTER',color:'#557b4d',skin:'#cb936f',hair:'#78492e',role:'Hamon / trickster'},
  {name:'Kars',short:'KARS',part:'PART 2 · BATTLE TENDENCY',style:'PILLAR MAN',color:'#87283d',skin:'#dfae91',hair:'#251c26',role:'Pillar Man'},
  {name:'Jotaro Kujo',short:'JOTARO',part:'PART 3 · STARDUST CRUSADERS',style:'STAND USER',color:'#285c79',skin:'#bd8065',hair:'#222025',role:'Stand user'},
  {name:'DIO',short:'DIO',part:'PART 3 · STARDUST CRUSADERS',style:'VAMPIRE · STAND',color:'#8d2732',skin:'#e3b18a',hair:'#d6b955',role:'Vampire / Stand'},
  {name:'Noriaki Kakyoin',short:'KAKYOIN',part:'PART 3 · STARDUST CRUSADERS',style:'STAND USER',color:'#557744',skin:'#d6a17e',hair:'#6d302c',role:'Stand user'},
  {name:'Jean Pierre Polnareff',short:'POLNAREFF',part:'PART 3 · STARDUST CRUSADERS',style:'STAND USER',color:'#b6b1a6',skin:'#dcad89',hair:'#dedbd0',role:'Stand user'},
  {name:'Muhammad Avdol',short:'AVDOL',part:'PART 3 · STARDUST CRUSADERS',style:'STAND USER',color:'#87393b',skin:'#a9664b',hair:'#241a1c',role:'Stand user'},
  {name:'Hol Horse',short:'HOL HORSE',part:'PART 3 · STARDUST CRUSADERS',style:'GUNNER',color:'#a35d36',skin:'#dbab83',hair:'#66422b',role:'Gunner'},
  {name:'Josuke Higashikata',short:'JOSUKE',part:'PART 4 · DIAMOND IS UNBREAKABLE',style:'STAND USER',color:'#35698c',skin:'#d6a17a',hair:'#1c2026',role:'Stand user'},
  {name:'Okuyasu Nijimura',short:'OKUYASU',part:'PART 4 · DIAMOND IS UNBREAKABLE',style:'STAND USER',color:'#516c96',skin:'#c58b69',hair:'#241e25',role:'Stand user'},
  {name:'Koichi Hirose',short:'KOICHI',part:'PART 4 · DIAMOND IS UNBREAKABLE',style:'STAND USER',color:'#7a7f51',skin:'#d7a57f',hair:'#d4c38a',role:'Stand user'},
  {name:'Rohan Kishibe',short:'ROHAN',part:'PART 4 · DIAMOND IS UNBREAKABLE',style:'STAND USER',color:'#7d693a',skin:'#dbab84',hair:'#2d3025',role:'Stand user'},
  {name:'Yoshikage Kira',short:'KIRA',part:'PART 4 · DIAMOND IS UNBREAKABLE',style:'STAND USER',color:'#b09a62',skin:'#d8a57e',hair:'#d8c796',role:'Stand user'},
  {name:'Giorno Giovanna',short:'GIORNO',part:'PART 5 · GOLDEN WIND',style:'STAND USER',color:'#c49436',skin:'#d7a07b',hair:'#e6c85c',role:'Stand user'},
  {name:'Bruno Bucciarati',short:'BRUNO',part:'PART 5 · GOLDEN WIND',style:'STAND USER',color:'#d9d4c8',skin:'#d7a07d',hair:'#f2eee3',role:'Stand user'},
  {name:'Guido Mista',short:'MISTA',part:'PART 5 · GOLDEN WIND',style:'GUNNER · STAND',color:'#873c45',skin:'#d9a780',hair:'#b54f59',role:'Gunner / Stand'},
  {name:'Narancia Ghirga',short:'NARANCIA',part:'PART 5 · GOLDEN WIND',style:'RANGED STAND',color:'#7891a4',skin:'#d29a76',hair:'#47394a',role:'Ranged Stand'},
  {name:'Jolyne Cujoh',short:'JOLYNE',part:'PART 6 · STONE OCEAN',style:'STAND USER',color:'#4c8e8d',skin:'#d9a781',hair:'#3c7069',role:'Stand user'},
  {name:'Weather Report',short:'WEATHER',part:'PART 6 · STONE OCEAN',style:'STAND USER',color:'#6599b3',skin:'#d3a181',hair:'#ddd5ca',role:'Stand user'},
  {name:'Enrico Pucci',short:'PUCCI',part:'PART 6 · STONE OCEAN',style:'STAND USER',color:'#8170a0',skin:'#d2a27e',hair:'#ded8d2',role:'Stand user'},
  {name:'Johnny Joestar',short:'JOHNNY',part:'PART 7 · STEEL BALL RUN',style:'SPIN · MONTARIA',color:'#518b92',skin:'#d3a17e',hair:'#b5c5b7',role:'Spin / horseback'},
  {name:'Gyro Zeppeli',short:'GYRO',part:'PART 7 · STEEL BALL RUN',style:'SPIN · MONTARIA',color:'#4a827f',skin:'#d3a07e',hair:'#d4d2bf',role:'Spin / horseback'},
  {name:'Funny Valentine',short:'VALENTINE',part:'PART 7 · STEEL BALL RUN',style:'STAND USER',color:'#9f5364',skin:'#d9a783',hair:'#dbcfc5',role:'Stand user'},
  {name:'Josuke Higashikata',short:'GAPPY',part:'PART 8 · JOJOLION',style:'STAND USER',color:'#468899',skin:'#d2a17e',hair:'#b7d4da',role:'Stand user'},
  {name:'Tooru',short:'TOORU',part:'PART 8 · JOJOLION',style:'STAND USER',color:'#9b8559',skin:'#d9a883',hair:'#c9b797',role:'Stand user'}
];
const partData = [
 ['PART 1 — PHANTOM BLOOD','Jonathan Joestar, Will A. Zeppeli, Robert E. O. Speedwagon, Dio Brando'],
 ['PART 2 — BATTLE TENDENCY','Joseph Joestar, Caesar Anthonio Zeppeli, Lisa Lisa, Kars, Wamuu, Esidisi'],
 ['PART 3 — STARDUST CRUSADERS','Jotaro Kujo, Noriaki Kakyoin, Jean Pierre Polnareff, Muhammad Avdol, Joseph (velho), Iggy, DIO, Hol Horse, Vanilla Ice, Pet Shop'],
 ['PART 4 — DIAMOND IS UNBREAKABLE','Josuke Higashikata, Okuyasu Nijimura, Koichi Hirose, Rohan Kishibe, Yoshikage Kira, Yukako Yamagishi, Kosaku Kawajiri'],
 ['PART 5 — GOLDEN WIND','Giorno Giovanna, Bruno Bucciarati, Guido Mista, Narancia Ghirga, Pannacotta Fugo, Trish Una, Diavolo, Prosciutto, Pesci, Ghiaccio'],
 ['PART 6 — STONE OCEAN','Jolyne Cujoh, Ermes Costello, Foo Fighters, Weather Report, Enrico Pucci, Narciso Anasui'],
 ['PART 7 — STEEL BALL RUN','Johnny Joestar, Gyro Zeppeli, Diego Brando, Funny Valentine'],
 ['PART 8 — JOJOLION','Josuke Higashikata (Gappy), Tooru / Wonder of U'],
 ['BÔNUS & CONVIDADOS','Personagens especiais, trajes alternativos e encontros de sonho podem ampliar a seleção.']
];
const $=s=>document.querySelector(s);
const featured = [roster[4],roster[18],roster[21],roster[5]];
$('#featuredRoster').innerHTML=featured.map((f,i)=>`<article class="fighter-card" data-fighter="${f.short}" style="--tone:${f.color};--skin:${f.skin};--hair:${f.hair}"><span class="card-number">0${i+1}</span><span class="card-part">${f.part.split(' · ')[0]}</span><div class="fighter-silhouette"><i class="silhouette-head"></i></div><div class="card-info"><small>${f.style}</small><h3>${f.short}</h3><span>${f.role.toUpperCase()}</span></div><span class="card-arrow">↗</span></article>`).join('');
$('#rosterGroups').innerHTML=partData.map(([h,p])=>`<article class="roster-group"><h3>${h}</h3><p>${p}</p></article>`).join('');
const playerSelect=$('#playerSelect'), enemySelect=$('#enemySelect');
const options=roster.map((f,i)=>`<option value="${i}">${f.short} — ${f.part.split(' · ')[0]}</option>`).join('');
playerSelect.innerHTML=options;enemySelect.innerHTML=options;playerSelect.value='4';enemySelect.value='5';
const overlay=$('#battleOverlay'), arena=$('#arena'), ctx=arena.getContext('2d');
let running=false, raf=0, last=0, time=60, soundOn=false, twoPlayer=false, audioCtx=null, hitTimer=0, announceTimer=0, stageT=0;
const keys={};
function fighter(id, x, facing){return {id,x,y:0,vx:0,face:facing,hp:100,meter:0,attack:0,attackType:'',attackHit:false,stun:0,block:false,dash:0,assist:0,pose:0,stand:true,combo:0}}
let p1=fighter(4,300,1),p2=fighter(5,800,-1);
function active(i){return roster[Number(i)]||roster[4]}
function startBattle(){overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';running=true;resetGame();cancelAnimationFrame(raf);raf=requestAnimationFrame(loop);setTimeout(()=>announce('FIGHT!'),250)}
function exitBattle(){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.style.overflow='';running=false;cancelAnimationFrame(raf)}
function resetGame(){p1=fighter(Number(playerSelect.value),285,1);p2=fighter(Number(enemySelect.value),815,-1);time=60;last=0;updateUI();$('#hitCounter').classList.remove('show');announce('READY?')}
function announce(text){const el=$('#announcer');el.textContent=text;el.classList.add('show');clearTimeout(announceTimer);announceTimer=setTimeout(()=>el.classList.remove('show'),900)}
function sfx(freq=145,dur=.065,type='square'){if(!soundOn)return;try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.055,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+dur);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+dur)}catch(e){}}
function action(f,type){if(!running||time<=0||f.hp<=0)return;if(type==='taunt'){f.pose=.65;f.meter=Math.min(100,f.meter+4);const enemy=f===p1?p2:p1;enemy.meter=Math.max(0,enemy.meter-5);announce('無駄無駄!');sfx(270,.11,'sawtooth');return}if(type==='assist'){f.assist=.48;f.meter=Math.min(100,f.meter+2);sfx(390,.05);return}if(type==='switch'){f.stand=!f.stand;announce(f.stand?'STAND ON':'STAND OFF');sfx(430,.08,'triangle');return}if(type==='dash'){f.dash=.2;f.vx=f.face*650;sfx(230,.05);return}if(type==='cancel'){if(f.attack>0&&f.meter>=15){f.meter-=15;f.attack=0;f.stun=0;f.vx=f.face*230;sfx(560,.07,'triangle')}return}if(f.attack>0||f.stun>.12)return;
 let damage=0,range=0,duration=0,cost=0;
 if(type==='light'){damage=7;range=85;duration=.22}else if(type==='special'){damage=14;range=215;duration=.37}else if(type==='hha'){if(f.meter<50)return;cost=50;damage=24;range=205;duration=.58}else if(type==='gha'){if(f.meter<90)return;cost=90;damage=39;range=250;duration=.82}else return;
 f.meter-=cost;f.attack=duration;f.attackType=type;f.attackHit=false;f.stun=duration*.55;sfx(type==='light'?165:type==='special'?110:85,type==='light'?.07:.14,type==='light'?'square':'sawtooth');
 if(type==='special'||type==='hha'||type==='gha'){f.vx=f.face*(type==='special'?220:90)}
}
function handleKey(key,down){const k=key.toLowerCase();if(down&&keys[k])return;keys[k]=down;if(!down)return;
 if(k==='escape'){exitBattle();return}if(k==='r'){resetGame();return}
 const p2keys=twoPlayer;
 if(k==='a')action(p1,'dashLeft');
 if(k==='j')action(p1,'light');if(k==='k')action(p1,'special');if(k==='l')action(p1,p1.meter>=90?'gha':'hha');if(k==='u')p1.block=true;if(k==='i')action(p1,'assist');if(k==='1')action(p1,'switch');if(k==='t')action(p1,'taunt');if(k==='c')action(p1,'cancel');if(k==='shift')action(p1,'dash');
 if(p2keys){if(k==='numpad4')p2.vx=-260;if(k==='numpad6')p2.vx=260;if(k==='numpad1')action(p2,'light');if(k==='numpad2')action(p2,'special');if(k==='numpad3')action(p2,p2.meter>=90?'gha':'hha');if(k==='numpad5')p2.block=true;if(k==='numpad0')action(p2,'assist')}
}
function updateUI(){const a=active(playerSelect.value),b=active(enemySelect.value);$('#playerName').textContent=a.name.toUpperCase();$('#playerStyle').textContent=`${a.style} · ${a.part.split(' · ')[0]}`;$('#enemyName').textContent=b.name.toUpperCase();$('#enemyStyle').textContent=`${b.style} · ${b.part.split(' · ')[0]}`;$('#playerHealth').style.width=`${p1.hp}%`;$('#enemyHealth').style.width=`${p2.hp}%`;$('#playerMeter').style.width=`${p1.meter}%`;$('#enemyMeter').style.width=`${p2.meter}%`;$('#timer').textContent=Math.ceil(time)}
function collision(attacker, defender){if(attacker.attack<=0||attacker.attackHit)return;const d=Math.abs(attacker.x-defender.x);const reach=attacker.attackType==='light'?95:attacker.attackType==='special'?235:attacker.attackType==='gha'?270:230;if(d<reach&&attacker.face*(defender.x-attacker.x)>-25){attacker.attackHit=true;const guarded=defender.block;const base=attacker.attackType==='light'?7:attacker.attackType==='special'?14:attacker.attackType==='gha'?39:24;let damage=guarded?Math.max(1,Math.floor(base*.22)):base;defender.hp=Math.max(0,defender.hp-damage);defender.stun=guarded?.18:.38;defender.vx=attacker.face*(guarded?95:240);attacker.meter=Math.min(100,attacker.meter+(guarded?3:9));defender.meter=Math.min(100,defender.meter+3);attacker.combo++;$('#hitCounter').textContent=`${attacker.combo} HIT${attacker.combo>1?' COMBO':''}`;$('#hitCounter').classList.add('show');hitTimer=.8;sfx(guarded?90:attacker.attackType==='light'?190:105,.09,guarded?'triangle':'sawtooth');if(!guarded)announce(attacker.attackType==='gha'?'ゴゴゴゴ':'DOYAA!');}}
function loop(now){if(!running)return;const dt=Math.min(.04,(now-last)/1000||0);last=now;stageT+=dt;
 if(time>0){time=Math.max(0,time-dt);const cpu=twoPlayer?false:true;
 // Facing and movement
 p1.face=p1.x<p2.x?1:-1;p2.face=p2.x<p1.x?1:-1;
 if(keys.a)p1.vx=-255;if(keys.d)p1.vx=255;if(!keys.a&&!keys.d&&p1.dash<=0)p1.vx*=Math.pow(.001,dt);
 if(twoPlayer){if(keys.arrowleft)p2.vx=-255;if(keys.arrowright)p2.vx=255;if(!keys.arrowleft&&!keys.arrowright)p2.vx*=Math.pow(.001,dt)}else{
  p2.ai=(p2.ai||0)-dt;if(p2.ai<=0){p2.ai=.22+Math.random()*.38;const d=p1.x-p2.x;if(Math.abs(d)>205)p2.vx=Math.sign(d)*175;else if(Math.random()<.58)action(p2,Math.random()<.28?'special':'light');else if(Math.random()<.45){p2.block=true;p2.guardTime=.28+Math.random()*.32}else action(p2,'special')}
  if(p2.guardTime>0){p2.guardTime-=dt;if(p2.guardTime<=0)p2.block=false}
 }
 for(const f of [p1,p2]){f.x+=f.vx*dt;f.x=Math.max(60,Math.min(1040,f.x));if(f.attack>0)f.attack=Math.max(0,f.attack-dt);if(f.stun>0)f.stun=Math.max(0,f.stun-dt);if(f.dash>0)f.dash-=dt;else if(!(f===p1&&(keys.a||keys.d))&&!(f===p2&&twoPlayer&&(keys.arrowleft||keys.arrowright)))f.vx*=Math.pow(.0005,dt);if(f.pose>0)f.pose-=dt;if(f.assist>0)f.assist-=dt;f.meter=Math.min(100,f.meter+dt*1.35);if(f.hp<=0)f.block=false;}
 p1.block=!!keys.u;p2.block=twoPlayer?!!keys.numpad5:p2.block;if(p1.stun>0)p1.block=false;
 collision(p1,p2);collision(p2,p1);
 if(p1.hp<=0||p2.hp<=0){time=0;announce(p1.hp<=0?'KO — DIO WINS':'JOJO! YOU WIN');$('#battleHint').textContent=p1.hp<=0?'O destino favoreceu o rival. Tente outra vez.':'Vitória! O legado Joestar continua.'}else $('#battleHint').textContent=twoPlayer?'P1 WASD + J/K/L · P2 setas + numpad':'Acumule Heat e encontre sua abertura.';
 }else if(!$('#announcer').classList.contains('show'))$('#battleHint').textContent='Round encerrado — aperte R para recomeçar.';
 if(hitTimer>0){hitTimer-=dt;if(hitTimer<=0){$('#hitCounter').classList.remove('show');p1.combo=0;p2.combo=0}}
 updateUI();draw();raf=requestAnimationFrame(loop)}
function draw(){const w=arena.width,h=arena.height;ctx.clearRect(0,0,w,h);const grad=ctx.createLinearGradient(0,0,0,h);grad.addColorStop(0,'#2a2a3d');grad.addColorStop(.52,'#534849');grad.addColorStop(1,'#272220');ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
 // stylized manga skyline
 ctx.fillStyle='#252632';for(let i=0;i<12;i++){let x=i*102-((stageT*12)%102),bh=85+(i*47%90);ctx.fillRect(x,175-bh/2,80,bh+90);ctx.fillStyle=i%2?'#e1a34b':'#da554a';for(let wy=0;wy<4;wy++)for(let wx=0;wx<3;wx++){ctx.globalAlpha=.35;ctx.fillRect(x+12+wx*20,195-bh/2+wy*22,5,8)}ctx.globalAlpha=1;ctx.fillStyle='#252632'}
 ctx.fillStyle='#d5a74a';ctx.globalAlpha=.18;ctx.beginPath();ctx.arc(550,150,112,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
 // manga rays
 ctx.strokeStyle='rgba(242,211,149,.14)';ctx.lineWidth=2;for(let i=0;i<13;i++){ctx.beginPath();ctx.moveTo(550,205);ctx.lineTo(i*105-60,0);ctx.stroke()}
 ctx.fillStyle='#38312e';ctx.beginPath();ctx.moveTo(0,315);ctx.lineTo(w,315);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();ctx.strokeStyle='rgba(219,190,144,.18)';ctx.lineWidth=2;for(let i=0;i<11;i++){let x=i*120-((stageT*25)%120);ctx.beginPath();ctx.moveTo(550,315);ctx.lineTo(x,h);ctx.stroke()}ctx.beginPath();ctx.moveTo(0,405);ctx.lineTo(w,405);ctx.stroke();
 // ambient title lettering
 ctx.save();ctx.globalAlpha=.12;ctx.fillStyle='#fff';ctx.font='900 72px Impact';ctx.translate(550,250);ctx.rotate(-.08);ctx.textAlign='center';ctx.fillText('ゴゴゴゴ',0,0);ctx.restore();
 drawFighter(p1,active(playerSelect.value),true);drawFighter(p2,active(enemySelect.value),false);
 // impact effects
 for(const f of [p1,p2])if(f.attack>0&&(f.attackType==='special'||f.attackType==='hha'||f.attackType==='gha')){ctx.save();ctx.globalAlpha=.2+Math.random()*.14;ctx.fillStyle=f===p1?'#67cbea':'#e84345';ctx.beginPath();ctx.ellipse(f.x+f.face*95,340,65,20,0,0,Math.PI*2);ctx.fill();ctx.restore()}
}
function drawFighter(f,data,isPlayer){const x=f.x,base=370,scale=1;ctx.save();ctx.translate(x,base);ctx.scale(f.face,1);
 // shadow
 ctx.fillStyle='#14111188';ctx.beginPath();ctx.ellipse(0,7,48,10,0,0,Math.PI*2);ctx.fill();
 // assist ghost silhouette
 if(f.assist>0){ctx.globalAlpha=Math.min(.7,f.assist*2);ctx.fillStyle='#e7d578';ctx.beginPath();ctx.ellipse(-f.face*66,-69,25,48,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1}
 const pose=f.pose>0?Math.sin((.65-f.pose)*15)*10:0;const hit=f.stun>0?Math.sin(stageT*48)*4:0;ctx.translate(0,hit);
 // stand projection behind
 if(f.stand){ctx.globalAlpha=.62;ctx.fillStyle=isPlayer?'#56c0dc':'#c563a9';ctx.beginPath();ctx.ellipse(-18,-105,29,53,-.15,0,Math.PI*2);ctx.fill();ctx.fillRect(-42,-130,48,42);ctx.globalAlpha=1;ctx.strokeStyle=isPlayer?'#a6efff':'#ffc5e7';ctx.lineWidth=3;ctx.beginPath();ctx.arc(-18,-105,29,-1.7,1.3);ctx.stroke()}
 // limbs, costume
 ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#171416';ctx.lineWidth=17;ctx.beginPath();ctx.moveTo(-12,-63);ctx.lineTo(-19+pose,-20);ctx.lineTo(-29,-1);ctx.moveTo(12,-63);ctx.lineTo(20-pose,-20);ctx.lineTo(29,-1);ctx.stroke();ctx.strokeStyle=data.color;ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(-12,-62);ctx.lineTo(-19+pose,-20);ctx.moveTo(12,-62);ctx.lineTo(20-pose,-20);ctx.stroke();
 ctx.fillStyle=data.color;ctx.strokeStyle='#171416';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-22,-121);ctx.lineTo(20,-121);ctx.lineTo(29,-63);ctx.lineTo(13,-52);ctx.lineTo(-21,-58);ctx.closePath();ctx.fill();ctx.stroke();
 // arm pose during attacks
 const armX=f.attack>0?f.attackType==='light'?61:f.attackType==='special'?98:78:28;ctx.strokeStyle='#171416';ctx.lineWidth=16;ctx.beginPath();ctx.moveTo(13,-111);ctx.lineTo(armX*.58,-102);ctx.lineTo(armX,-97);ctx.stroke();ctx.strokeStyle=data.skin;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(13,-111);ctx.lineTo(armX*.58,-102);ctx.lineTo(armX,-97);ctx.stroke();
 // head
 ctx.fillStyle=data.skin;ctx.strokeStyle='#171416';ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(0,-141,21,24,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle=data.hair;ctx.beginPath();ctx.moveTo(-22,-146);ctx.quadraticCurveTo(-20,-175,5,-168);ctx.quadraticCurveTo(22,-172,21,-146);ctx.lineTo(12,-151);ctx.lineTo(4,-163);ctx.lineTo(-5,-151);ctx.lineTo(-14,-160);ctx.closePath();ctx.fill();
 // headband/character markings
 ctx.fillStyle=isPlayer?'#f0cf69':'#e66b63';ctx.fillRect(-20,-151,40,4);ctx.fillStyle='#171416';ctx.fillRect(5,-141,7,3);
 if(f.attack>0){ctx.strokeStyle=f.attackType==='light'?'#f6df92':f.attackType==='special'?'#57d5f1':'#fa5d54';ctx.lineWidth=f.attackType==='gha'?7:4;ctx.beginPath();ctx.moveTo(30,-100);ctx.lineTo(armX+24,-100);ctx.stroke();if(f.attackType==='hha'||f.attackType==='gha'){ctx.font='bold 30px Impact';ctx.fillStyle='#fff4bf';ctx.strokeStyle='#bd332e';ctx.lineWidth=2;ctx.strokeText(f.attackType==='gha'?'ゴゴゴ':'オラ!',50,-155);ctx.fillText(f.attackType==='gha'?'ゴゴゴ':'オラ!',50,-155)}}
 ctx.restore();ctx.fillStyle='#fff';ctx.font='bold 10px Arial';ctx.textAlign='center';ctx.fillText(data.short,x,base+25);}
$('#openBattle').addEventListener('click',startBattle);$('#closeBattle').addEventListener('click',exitBattle);$('#rematchBtn').addEventListener('click',resetGame);$('#fullRosterBtn').addEventListener('click',()=>{$('#rosterModal').classList.add('open');$('#rosterModal').setAttribute('aria-hidden','false')});$('#closeRoster').addEventListener('click',()=>{$('#rosterModal').classList.remove('open');$('#rosterModal').setAttribute('aria-hidden','true')});$('#rosterModal').addEventListener('click',e=>{if(e.target.id==='rosterModal')$('#closeRoster').click()});
playerSelect.addEventListener('change',()=>{p1.id=Number(playerSelect.value);updateUI()});enemySelect.addEventListener('change',()=>{p2.id=Number(enemySelect.value);updateUI()});
document.addEventListener('keydown',e=>{const key=e.key.toLowerCase();if([' ','arrowleft','arrowright','arrowup','arrowdown'].includes(key))e.preventDefault();if(key==='arrowleft'||key==='arrowright'){keys[key]=true;if(twoPlayer)p2.vx=key==='arrowleft'?-255:255;return}handleKey(e.key,true)});
document.addEventListener('keyup',e=>{const key=e.key.toLowerCase();keys[key]=false;if(key==='u')p1.block=false;if(key==='arrowleft'||key==='arrowright')p2.vx=0;if(key==='numpad5')p2.block=false});
$('#soundToggle').addEventListener('click',()=>{soundOn=!soundOn;$('#soundToggle').classList.toggle('on',soundOn);$('#soundState').textContent=soundOn?'ON':'OFF';if(soundOn)sfx(480,.08,'sine')});
document.querySelectorAll('.fighter-card').forEach(card=>card.addEventListener('click',()=>{const f=roster.find(x=>x.short===card.dataset.fighter);if(f)playerSelect.value=roster.indexOf(f);startBattle()}));
document.querySelectorAll('.touch-controls button').forEach(btn=>{const key=btn.dataset.key;btn.addEventListener('pointerdown',e=>{e.preventDefault();if(key==='a'){keys.a=true;return}if(key==='d'){keys.d=true;return}if(key==='u'){keys.u=true;return}action(p1,key==='j'?'light':key==='k'?'special':'hha')});for(const ev of ['pointerup','pointerleave','pointercancel'])btn.addEventListener(ev,()=>{if(key==='a')keys.a=false;if(key==='d')keys.d=false;if(key==='u')keys.u=false})});
// Add a compact duel mode toggle as an explicit control in the battle header.
const toggle=document.createElement('button');toggle.className='duel-toggle';toggle.id='duelToggle';toggle.textContent='CPU';toggle.title='Alternar CPU / dois jogadores';$('.battle-top').insertBefore(toggle,$('#closeBattle'));toggle.addEventListener('click',()=>{twoPlayer=!twoPlayer;toggle.textContent=twoPlayer?'2P LOCAL':'CPU';toggle.classList.toggle('active',twoPlayer);$('#battleHint').textContent=twoPlayer?'P1 WASD + J/K/L · P2 setas + numpad':'Acumule Heat e encontre sua abertura.';p2.block=false});
