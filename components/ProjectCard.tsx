import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-base font-semibold leading-snug">
          <Link href={`/projects/${project.slug}`} className="focus-ring rounded-sm after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-accent-100 px-2 py-0.5 text-[11px] font-medium text-accent-600">
            Featured
          </span>
        )}
      </div>
      <p className="mt-2 line-clamp-3 text-sm text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted">
            +{project.stack.length - 4}
          </span>
        )}
      </div>
      <div className="relative z-10 mt-4 flex items-center gap-4 pt-1 text-sm">
        <Link href={`/projects/${project.slug}`} className="focus-ring inline-flex items-center gap-1 font-medium text-accent-600">
          Details <ArrowUpRight size={14} />
        </Link>
        <a
          href={project.repo}
          rel="noopener noreferrer"
          target="_blank"
          className="focus-ring inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </article>
  );
}
