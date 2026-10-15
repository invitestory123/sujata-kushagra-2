/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Kushagra & Sujata Wedding Invitation (Card 2)
 * 28th November – 1st December 2026 · Jhansi
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sujata",
    groom: "Kushagra",
    brideFull: "Sujata",
    groomParents: "With love and blessings of Family & Friends",
    brideParents: "With love and blessings of Family & Friends",
    hashtag: "#KushagraWedsSujata",
    monogram: "K · S",
    order: "groom-first",
    groomFirst: true,
  },

  wedding: {
    dateISO: "2026-11-30T20:00:00+05:30",
    dateLabel: "Monday, 30th November 2026",
    timeLabel: "Swagat & Baraat at 8:00 PM",
  },

  venue: {
    name: "Radhika Mandapam",
    address: "Gwalior Road, Jhansi · Home: 402/1 CP Mission compound, Jhansi UP 284003",
    mapsQuery: "Radhika Mandapam, Gwalior Road, Jhansi",
    mapsUrl: "https://maps.google.com/?q=Radhika+Mandapam+Jhansi",
    homeAddress: "402/1 CP Mission compound, Jhansi UP 284003",
    homeMapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, Sujata and Kushagra request the honour of your presence as they embark on this beautiful journey of love and togetherness under a sky full of stars.",
  },

  events: [
    {
      name: "Pre-Wedding Functions",
      icon: "heart",
      date: "Sunday, 29th November 2026",
      dayLabel: "Sunday",
      dayNum: "29",
      monthLabel: "November 2026",
      time: "2:00 PM onwards",
      venue: "Aarambh Banquet, Gwalior Road, Thapak Bagh, Jhansi",
      note: "Mehendi at 2:00 PM · Sangeet at 7:00 PM",
    },
    {
      name: "Wedding Day",
      icon: "heart",
      date: "Monday, 30th November 2026",
      dayLabel: "Monday",
      dayNum: "30",
      monthLabel: "November 2026",
      time: "Swagat / Baraat at 8:00 PM",
      venue: "Radhika Mandapam, Gwalior Road, Jhansi",
      note: "Tika, Pujan & Panigrahan Sanskar • Baraat departs from Siddheshwar Mandir at 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=Radhika+Mandapam+Jhansi",
    },
  ],

  program: [
    {
      name: "Bhagyapada Sthapana / Anshudan",
      time: "Sat, 28 Nov · Home",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
    {
      name: "Matrika Pujan",
      time: "Sun, 29 Nov · Home",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
    {
      name: "Baraat Departure (Siddheshwar Mandir)",
      time: "Mon, 30 Nov · 7:00 PM",
    },
    {
      name: "Tika, Pujan & Panigrahan Sanskar",
      time: "Mon, 30 Nov · Radhika Mandapam",
      mapsUrl: "https://maps.google.com/?q=Radhika+Mandapam+Jhansi",
    },
    {
      name: "Vadhu Aagaman (Bride's Arrival Home)",
      time: "Tue, 1 Dec · Home",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
  ],

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    track: "./editable/assets/bg-music.mp3",
    title: "Jashn-E-Bahaaraa",
    autoplay: true,
  },

  footer: {
    families: "With love and blessings of Family & Friends",
  },

  images: {
    couple: "./editable/assets/couple.webp",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
  },
};