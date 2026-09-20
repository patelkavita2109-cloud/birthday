# Birthday Surprise — Personal Gift Site

Open `index.html` in a browser to play the gift locally.

## Add your photos

1. Put 9 square-ish photos in `assets/photos/` (create that folder).
2. In `script.js`, replace `const PHOTOS = [];` with your paths, for example:

```js
const PHOTOS = [
  'assets/photos/us-01.jpg', 'assets/photos/us-02.jpg', 'assets/photos/us-03.jpg',
  'assets/photos/us-04.jpg', 'assets/photos/us-05.jpg', 'assets/photos/us-06.jpg',
  'assets/photos/us-07.jpg', 'assets/photos/us-08.jpg', 'assets/photos/us-09.jpg'
];
```

The final screen automatically uses them to form the heart. You can also update the message in `index.html` to use her name and your personal details.

## Share it

For a free shareable link, upload this entire folder to Netlify Drop or deploy it with GitHub Pages. Keep the `assets` folder beside `index.html` so the background and guide character load correctly.

## Design notes

The page is mobile-first, supports keyboard controls, honors reduced-motion preferences, and only plays sounds after the recipient turns sound on.
