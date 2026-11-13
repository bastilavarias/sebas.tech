import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

/** Only the owner's three featured projects, using each project's original mark. */
export function FocusCard() {
  return (
    <Card className="education-card card secondary-card" data-drag-asset aria-label="Projects">
      <CardContent className="!p-0">
        <h2>Projects</h2>
        <ul className="timeline project-links" aria-label="Featured projects">
          {profile.work.map(project => (
            <li key={project.title}>
              <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in new tab)`}>
                <span className="project-logo" aria-hidden="true">
                  <img src={project.logo} alt="" width="42" height="42" loading="lazy" />
                </span>
                <span className="timeline-text">
                  <strong>{project.title}</strong>
                  <small>{project.subtitle}</small>
                </span>
                <ArrowUpRight className="project-arrow" size={18} weight="regular" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
