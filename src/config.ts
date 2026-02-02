export const SITE = {
  name: "Coelacanth",
  description: "Sailing voyages and refit notes from SV Coelacanth, a Hutting 40 exploring the North Sea and beyond.",
  // Note: Site URL is defined in astro.config.mjs (accessed via Astro.site)
  lang: "en",
  locale: "en-GB",
  defaultImage: "/og-image.jpg",
};

export const PATHS = {
  logbook: "/logbook",
};

export const SECTIONS = {
  logbook: "Logbook",
};

export const NAV_LINKS = [
  { label: "The Ship", href: "/" },
  { label: "Logbook", href: "/logbook/" },
  { label: "YouTube", href: "https://www.youtube.com/@sy.coelacanth" },
  { label: "Contact", href: "mailto:ahoy@coelacanth.ch" },
];
