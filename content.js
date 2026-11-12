// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change what appears on your site.
//  Everything below is sample content: replace or delete it.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: "Smitaa",
  tagline: "words & little moments",
  eyebrow: "a small corner of the internet for my art pieces 💗",

  // Optional background music: put an .mp3 in this folder and set its name, e.g. "music.mp3".
  // Leave as "" to hide the music button.
  music: "",

  // A short note about you (optional). Delete the whole block to hide the section.
  about: {
    label: "hello",
    title: "A little note",
    text: `I hope this corner feels like a warm hug to your life. I'm just trying to portray life through my lens.💗`,
    sign: "— Smitaa :)"
  },

  // Optional: rename the section headings and the little star game at the bottom.
  sections: {
    // art: { label: "from my hands", title: "Art" },
    writing: { label: "words", title: "Things I’ve written" },
    photos: { label: "a few frames", title: "Moments" },
    wish: { label: "make a wish", title: "Light the stars", hint: "Tap each star.", done: "Whatever you wished for, I hope it finds you.", again: "relight the stars" }
  },

  // Links shown at the bottom of the page. Delete any you don't need.
  links: [
    { label: "Email", url: "mailto:smita01.ai@gmail.com" },
    { label: "Instagram", url: "https://instagram.com/smitaa.py" }
  ],

  // Your artwork. Put image files in the art/ folder and list them here.
  // src: file path   title   medium: e.g. "watercolour on paper"   year   size: e.g. "30 × 40 cm"
  // text: optional few lines about the piece   alt: description for screen readers
  // art: [
  //   { src: "art/sample-1.svg", title: "Morning, Unfinished", medium: "gouache on paper", year: "2026", size: "30 × 40 cm", text: "Replace me with a few words about this piece: what it is, what it meant, how it was made.", alt: "Abstract sample: rose circle over a sage hill" },
  //   { src: "art/sample-2.svg", title: "Two Moons", medium: "acrylic on canvas", year: "2025", size: "50 × 40 cm", alt: "Abstract sample: two overlapping circles" },
  //   { src: "art/sample-3.svg", title: "Orbit", medium: "ink and watercolour", year: "2025", alt: "Abstract sample: concentric circles" },
  //   { src: "art/sample-4.svg", title: "Stripes of Summer", medium: "mixed media", year: "2024", size: "A3", alt: "Abstract sample: stripes, circle and triangle" }
  // ],

  // Newest first. Separate paragraphs with a blank line.
  // Optional: add  excerpt: "..."  to control the preview line.
  writing: [
    {
      title: "The constellation of us",
      date: "Nov 2026",
      text: `We meet people at different ages, during different life spans, and somehow become a part of their story.

Every person brings out something of their own - like a sky full of stars, where a lot of stars light up to make the view beautiful. Just like that, the people we meet bring something unique to our lives.

Yet, we chase our lives just finding people, despite there being so many around us. Maybe that’s what a "shade" truly is: finding something that suits us. Adaptation, I guess.

Let it be positive, let it be negative - everything shapes our life in a different way.

We are just like an unwritten book, where everyone becomes an author when they reach their chapter. And somehow, by destiny, we write a great story - different in its own way, yet completely ordinary.

Maybe that is just another shade of human.`
    },
//     {
//       title: "The Quiet Between Trains",
//       date: "Nov 2026",
//       text: `This is a placeholder for your first piece. Paste your own writing between the backticks, and leave a blank line wherever you want a new paragraph.

// The first letter of the opening paragraph is styled as a drop cap, and each paragraph fades in as the reader opens the piece.

// Prose, essays, fragments and poems all work. Line breaks inside a paragraph are kept, so poetry keeps its shape.`
//     },
  
  ],

  // Put image files in the photos/ folder and list them here.
  // src: path to the file   alt: description for screen readers
  photos: [
    // caption = small line above the title, title = heading, text = optional short line
    { src: "photos/img1.jpeg", caption: "2026", title: "Golden hour", text: "It's always these little moments :)", alt: "Sand placeholder" },
    { src: "photos/img2.jpeg", caption: "2026", title: "Blue stillness", text: "Every photo can have a title and a line.", alt: "Sage placeholder" },
    { src: "photos/img3.jpeg", caption: "2026", title: "Dusky afternoon",text: "always a sunshine💗.", alt: "Stone placeholder" },
    { src: "photos/img4.jpeg", caption: "2025", title: "Sunsets :)", alt: "Rose placeholder" }
  ]
};
