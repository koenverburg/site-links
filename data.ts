import { Section } from "@/lib/types"

export function mapPlatformToColor(platform: string): string {
  const colors = {
    github: 'bg-black text-white',
    twitter: 'bg-[#1da1f2] text-white',
    linkedin: 'bg-[#378fe9] text-white',
    youtube: 'bg-[red] text-white',
    twitch: 'bg-[#9146ff] text-white',
    tiktok: 'bg-black text-white',
    instagram: 'bg-gradient-to-r from-[#1400c8] via-[#b900b4] to-[#f50000] text-white', //background-image: linear-gradient(-135deg, #1400c8, #b900b4, #f50000);
    upwork: 'bg-[#14A800] text-white',
    fiverr: 'bg-[#1DBF73] text-white'
  }

  if (colors[platform]) {
    return colors[platform]
  }

  return 'bg-[lightgray] text-black'
} 

const projects = [
  {
    label: "Dotfiles",
    description: "Config files for nvim, tmux, vscode, Mac, Linux and Windows",
    href: "https://github.com/koenverburg/dotfiles",
  },
  {
    label: "Reel to MP4",
    status: "Live",
    description: "A site where you can convert reels into mp4",
    href: "https://reeltomp4.com",
  },
  {
    label: "Crypto/Stock Trading Bot",
    status: "Live",
    description: "self explanatory",
    href: "#nope",
  },
];

const knowledgeSharing = [
  {
    label: "Book a 1:1 - Mentoring / Coaching / Career Advice",
    href: "https://appointments.lokiapp.live/consultant/WUJFxrwyO0MMZj6F9lEKOsVFtpx2",
    // description: "Looking to make your Dev Team move faster to production, career advice, or something else, Book a Video Call",
  },
  // add upwork
  // add fiverr
  // add freelancer.nl
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
  { label: "Blog", href: "https://conradtheprogrammer.medium.com" },
  // { label: "Products I use", href: "https://kit.conradtheprogrammer.com" },
];

const supports = [
  {
    label: "Buy me a Coffee",
    href: "https://www.buymeacoffee.com/conradcoffee",
  },
  { label: 'How to Make More Money as a Software Engineer (PDF)', description: '', href: 'https://conradtheprogrammer.gumroad.com/l/how-to-make-money-on-the-side-as-a-software-engineer' },
];

const referrals = [
  {
    label: 'MyProtein',
    href: 'https://nl.myprotein.com/referrals.list?applyCode=KOEN-RU2',
    perk: 'Free Delivery over 30 euro for 3 months',
    description: ''
  },
  {
    label: "Digital Ocean",
    href: "https://m.do.co/c/4028d38b4a71",
    perk: 'Free $200 credit for 60 days!',
    description: 'Cloud platform to deploy, manage & scale applications'
  },
  {
    label: 'Bitvavo',
    href: "https://account.bitvavo.com/create?a=1D76BB79C5",
    description: 'Bitvavo offers tailor-made services for institutional investors and crypto funds (Exchange)',
    perk: 'Trade €10,000 without commission',
  },
];

export const sections: Section[] = [
  {
    label: "Projects",
    links: projects,
  },
  { label: "Knowledge Sharing", links: knowledgeSharing },
  { label: "Socials", links: socials },
  { label: "Supports", links: supports },
  { label: "Referrals", links: referrals},
];
