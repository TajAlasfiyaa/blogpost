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
import {
  CloudIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export const links = [
  {
    href: customMetadata.xUrl,
    Icon: TwitterIcon,
    label: "X (formerly Twitter)",
  },
  {
    href: customMetadata.githubUrl,
    Icon: GithubIcon,
    label: "GitHub Account",
  },
  {
    href: customMetadata.linkedInUrl,
    Icon: LinkedinIcon,
    label: "LinkedIn Account",
  },
  {
    href: customMetadata.facebookUrl,
    Icon: FacebookIcon,
    label: "Facebook Account",
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
