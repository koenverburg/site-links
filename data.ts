type Link = {
  label: string
  href: string
  status?: 'Live' | 'Coming soon'
  description?: string
}

const projects = [
  {
    label: "Dotfiles",
    description: "Config files for nvim, tmux, vscode, Mac, Linux and Windows",
    status: "Coming soon",
    href: "https://github.com/koenverburg/dotfiles",
  },
  {
    label: "Reel to MP4",
    status: "Live",
    description: "",
    href: "https://reeltomp4.com",
  },
  {
    label: "Crypto Trading Bot",
    status: "Live",
    description: "",
    href: "",
  },
  {
    label: "Stealth #2",
    status: "Coming soon",
    description: "",
    href: "",
  },
];

const knowledgeSharing = [
  // { label: "Products I use", href: "https://kit.conradtheprogrammer.com" },
  { label: "Blog", href: "https://conradtheprogrammer.medium.com" },
  {
    label: "Mentoring / Coaching / Career Advice",
    href: "https://appointments.lokiapp.live/consultant/WUJFxrwyO0MMZj6F9lEKOsVFtpx2",
    description:
      "Looking to make your Dev Team move faster to production, career advice, or something else, Book a Video Call",
  },
];

const socials = [
  { label: "Github", href: "https://github.com/koenverburg" },
  { label: "Twitter", href: "https://twitter.com/koenverburg" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/koen-verburg-728920102/",
  },
  { label: "YouTube", href: "https://www.youtube.com/@conradtheprogrammer" },
  { label: "Twitch", href: "https://www.twitch.tv/conradtheprogrammer" },
  { label: "TikTok", href: "https://www.tiktok.com/@conradtheprogrammer" },
  { label: "Instagram", href: "https://www.instagram.com/conradtheprogrammer" },
];

const supports = [
  {
    label: "Buy me a Coffee",
    href: "https://www.buymeacoffee.com/conradcoffee",
  },
  // { label: 'How to Make More Money as a Software Engineer', description: '^ PDF download ^', href: 'https://conradtheprogrammer.gumroad.com/l/how-to-make-money-on-the-side-as-a-software-engineer' },
];

export type Section = {
  label: string
  links: Link[]
}

export const sections: Section[] = [
  {
    label: "Projects",
    links: projects,
  },
  { label: "Knowledge Sharing", links: knowledgeSharing },
  { label: "Socials", links: socials },
  { label: "Supports", links: supports },
];
