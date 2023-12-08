// {
//     "twitter": "https://twitter.com/TajAlasfiyaa/",
//     "github": "https://github.com/TajAlasfiyaa",
//     "linkedn": "https://www.linkedin.com/in/tajalasfiyaa",
//     "youtube": "https://www.youtube.com/@TajAlasfiyaa",
//     "email": "tajalasfiaa@gmail.com"
// }
import { CohostIcon } from "@/components/icons/cohost";
import { KeybaseIcon } from "@/components/icons/keybase";
import { MastodonIcon } from "@/components/icons/mastodon";
import { MatrixIcon } from "@/components/icons/matrix";
import { XIcon } from "@/components/icons/x";
import { customMetadata } from "@/site.config.js";
import { CloudIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export const links = [
  {
    href: customMetadata.blueskyUrl,
    Icon: CloudIcon,
    label: "Go to my Bluesky Account",
  },
  {
    href: customMetadata.githubUrl,
    Icon: GithubIcon,
    label: "Go to my GitHub Account",
  },
  {
    href: customMetadata.linkedInUrl,
    Icon: LinkedinIcon,
    label: "Go to my LinkedIn Account",
  },
  {
    href: customMetadata.mastodonUrl,
    Icon: MastodonIcon,
    label: "Go to my Mastodon Account",
  },
];

export const wholeLinks = [
  { href: customMetadata.blueskyUrl, Icon: CloudIcon, label: "Bluesky" },
  { href: customMetadata.cohostUrl, Icon: CohostIcon, label: "Cohost" },
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.keybaseUrl, Icon: KeybaseIcon, label: "Keybase" },
  { href: customMetadata.mastodonUrl, Icon: MastodonIcon, label: "Mastodon" },
  { href: customMetadata.matrixUrl, Icon: MatrixIcon, label: "Matrix" },
  { href: customMetadata.xUrl, Icon: XIcon, label: "X (formerly Twitter)" },
];
