import {
  ArrowUpRight,
  GithubLogo,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

// Facebook's recognizable mark is the solid, standalone 'f', not Phosphor's
// circular FacebookLogo glyph. Keep the other brand icons from Phosphor.
function FacebookBrandMark({ size }: { size: number; weight?: string }) {
  return (
    <svg
      data-facebook-brand-mark="solid-f"
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 320 512"
      fill="currentColor"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.4 0 225.36 0C152.22 0 104.42 44.34 104.42 124.72v70.62H23.11V288h81.31v224h100.2V288z" />
    </svg>
  );
}

const socialIcons = {
  tiktok: TiktokLogo,
  youtube: YoutubeLogo,
  facebook: FacebookBrandMark,
  instagram: InstagramLogo,
  github: GithubLogo,
};

export function ProfileCard() {
  return (
    <Card id="home-panel" className="profile-card card" aria-label="Profile">
      <CardContent className="!p-0">
        <header className="profile-head">
          <Avatar className="avatar">
            <AvatarImage src="/images/profile-avatar.webp" alt="Sebastian Curtis Lavarias wearing sunglasses" />
            <AvatarFallback className="bg-sky-600 text-sm font-semibold text-white">SC</AvatarFallback>
          </Avatar>
          <div className="profile-identity">
            <h1>{profile.name}</h1>
            <p>{profile.role}</p>
          </div>
        </header>
        <div className="bio">
          <p className="profile-desktop-intro">{profile.description[0].split("digital space")[0]}<em>digital space</em>{profile.description[0].split("digital space").slice(1).join("digital space")}</p>
          <p className="profile-mobile-intro">Welcome to my <em>digital space</em>. Here&apos;s where I share my projects, socials, and music.</p>
          <p className="desktop-story">{profile.description[1]}</p>
          <p>{profile.description[2]}</p>
        </div>
        <ul className="timeline profile-links" aria-label="Social media profiles">
          {profile.social.map((link) => {
            const Icon = socialIcons[link.kind];
            return (
              <li key={link.kind}>
                <a className="profile-social-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${link.label} (opens in new tab)`}>
                  <span className={`profile-social-icon profile-social-icon--${link.kind}`} aria-hidden="true">
                    <Icon size={25} weight="fill" />
                  </span>
                  <span className="timeline-text">
                    <strong>{link.label}</strong>
                    <small>{link.handle}</small>
                  </span>
                  <ArrowUpRight className="profile-social-arrow" size={18} weight="regular" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
