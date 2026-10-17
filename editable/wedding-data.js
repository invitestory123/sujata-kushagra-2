/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Kushagra & Sujata Wedding Invitation (Card 2)
 * 28th November – 1st December 2026 · Jhansi
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Kushagra",
    bride: "Sujata",
    groomFull: "Kushagra",
    brideFull: "Sujata",
    groomParents: "With love and blessings of Family & Friends",
    brideParents: "With love and blessings of Family & Friends",
    hashtag: "#KushagraWedsSujata",
    monogram: "K · S",
    order: "groom-first",
    groomFirst: true,
  },

  wedding: {
    dateISO: "2026-11-30T19:00:00+05:30",
    dateLabel: "Monday, 30th November 2026",
    timeLabel: "Baraat Departure at 7:00 PM",
  },

  venue: {
    name: "Radhika Mandapam",
    address: "Gwalior Road, Jhansi · Groom's Residence: 402/1 CP Mission compound, Jhansi UP 284003",
    mapsQuery: "Radhika Mandapam, Gwalior Road, Jhansi",
    mapsUrl: "https://maps.google.com/?q=Radhika+Mandapam+Jhansi",
    homeAddress: "402/1 CP Mission compound, Jhansi UP 284003",
    homeMapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, Kushagra and Sujata request the honour of your presence as they unite in marriage under the starry sky.",
  },

  events: [
    {
      name: "Bhagyapada Sthapana / Anshudan",
      icon: "sparkles",
      date: "Saturday, 28th November 2026",
      dayLabel: "Saturday",
      dayNum: "28",
      monthLabel: "November 2026",
      time: "Auspicious Muhurat",
      venue: "Groom's Residence: 402/1 CP Mission compound, Jhansi UP 284003",
      note: "Sacred pre-wedding rituals from groom's residence",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
    {
      name: "Matrika Pujan",
      icon: "flower",
      date: "Sunday, 29th November 2026",
      dayLabel: "Sunday",
      dayNum: "29",
      monthLabel: "November 2026",
      time: "Sacred Morning Rituals",
      venue: "Groom's Residence: 402/1 CP Mission compound, Jhansi UP 284003",
      note: "Matrika Pujan from groom's residence",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
    {
      name: "The Wedding Day",
      icon: "heart",
      date: "Monday, 30th November 2026",
      dayLabel: "Monday",
      dayNum: "30",
      monthLabel: "November 2026",
      time: "Baraat at 7:00 PM",
      venue: "Radhika Mandapam, Gwalior Road, Jhansi",
      note: "Tika, Pujan & Panigrahan Sanskar • Baraat departs from Siddheshwar Mandir at 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=Radhika+Mandapam+Jhansi",
    },
    {
      name: "Vadhu Aagaman (Bride's Arrival Home)",
      icon: "sparkles",
      date: "Tuesday, 1st December 2026",
      dayLabel: "Tuesday",
      dayNum: "01",
      monthLabel: "December 2026",
      time: "Bride's Arrival Home",
      venue: "Groom's Residence: 402/1 CP Mission compound, Jhansi UP 284003",
      note: "Warm welcome of the bride to her new home with family blessings",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
  ],

  program: [
    {
      name: "Bhagyapada Sthapana / Anshudan",
      time: "Sat, 28 Nov · Groom's Home",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
    {
      name: "Matrika Pujan",
      time: "Sun, 29 Nov · Groom's Home",
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
      time: "Tue, 1 Dec · Groom's Home",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
    },
  ],

  venues: [
    {
      title: "The Wedding Day",
      name: "Radhika Mandapam",
      events: "Tika, Pujan & Panigrahan Sanskar (Baraat Departure: 7:00 PM from Siddheshwar Mandir)",
      address: "Gwalior Road, Jhansi",
      mapsUrl: "https://maps.google.com/?q=Radhika+Mandapam+Jhansi",
      mapsQuery: "Radhika Mandapam, Gwalior Road, Jhansi",
      date: "Monday, 30th November 2026",
    },
    {
      title: "Wedding Festivities (Groom's Home)",
      name: "CP Mission Compound (Groom's Residence)",
      events: "Bhagyapada Sthapana, Matrika Pujan & Vadhu Aagaman",
      address: "402/1 CP Mission compound, Jhansi UP 284003",
      mapsUrl: "https://maps.app.goo.gl/14qTVCMuVdeVWavG9",
      mapsQuery: "402/1 CP Mission compound Jhansi UP 284003",
      date: "28 Nov, 29 Nov & 1 Dec 2026",
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
    title: "Jashn Ae bahara",
    autoplay: true,
  },

  footer: {
    families: "With best compliments & blessings from Groom's Family & Friends",
  },

  images: {
    couple: "./editable/assets/couple.webp",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
  },
};