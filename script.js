const fx = document.createElement('script');
fx.src = 'final-fix.js';
document.head.append(fx);

const notes = [
  [
    'Dearest Kavita,',
    'Happy Birthday to the most special person in my life. You make every ordinary day feel extraordinary.'
  ],
  [
    'Your Beautiful Soul',
    'You have a heart full of warmth, kindness, and grace. Being with you is my favorite place in the world.'
  ],
  [
    'Imperfectly Yours',
    'I know I’m imperfect—I get angry and act foolish sometimes, but deep down, your happiness means the entire world to me. No simple sorry today; just promise to stay strong, because my heart and my tantrums are yours for life.'
  ],
  [
    'A Gentle Reminder',
    'You turn simple moments into cherished memories and make my heart feel lighter every single day. You are not just the calm in my storm—you are my sunshine, my favorite thought, and my endless love.'
  ],
  [
    'My Birthday Wish',
    'May this year bring you boundless joy, laughter, and every dream your heart holds. I love you endlessly ♡'
  ]
];

let n = 0, t;
const $ = x => document.querySelector(x);

function page(id) {
  document.querySelectorAll('.screen').forEach(x => x.classList.toggle('active', x.id === id));
  if (t) clearInterval(t);
}

function note() {
  const current = String(n + 1).padStart(2, '0');
  const total = String(notes.length).padStart(2, '0');
  $('#counter').textContent = `${current} / ${total}`;
  $('#title').textContent = notes[n][0];
  $('#message').textContent = notes[n][1];
  $('#next').textContent = (n === notes.length - 1) ? 'Make a birthday wish →' : 'Open next message →';
}

$('#start').onclick = () => {
  n = 0;
  page('letters');
  note();
};

$('#next').onclick = () => {
  if (n < notes.length - 1) {
    n++;
    note();
  } else {
    page('cake');
  }
};

$('#wish').onclick = () => {
  page('final');
  party();
};

$('#again').onclick = () => {
  n = 0;
  page('home');
};

const photos = [
  'WhatsApp Image 2026-09-19 at 10.36.41 PM.jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.41 PM (1).jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.41 PM (2).jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.41 PM (3).jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.42 PM.jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.42 PM (1).jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.42 PM (2).jpeg',
  'WhatsApp Image 2026-09-19 at 10.36.42 PM (3).jpeg',
  'WhatsApp Image 2026-09-19 at 10.49.41 PM (1).jpeg'
];

for (let i = 0; i < photos.length; i++) {
  let p = document.createElement('i');
  p.className = 'photo';
  p.style.backgroundImage = `url("assets/${encodeURIComponent(photos[i])}")`;
  $('#heart').append(p);
}

function party() {
  let b = () => window.confetti && confetti({
    particleCount: 100,
    spread: 120,
    origin: { y: 0.58 },
    colors: ['#55e0d0', '#c7ffe5', '#f9d46b', '#fff']
  });
  b();
  t = setInterval(b, 4000);
}
