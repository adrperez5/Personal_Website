import { useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/types/portfolio';
import ImagePlaceholder from './ImagePlaceholder';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Link href={`/projects/${project.id}`} className={styles.cardWrapper}>
      <div
        className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onFocus={() => setShowPreview(true)}
        onBlur={() => setShowPreview(false)}
      >
        <div className={styles.projectThumbnail}>
          <ImagePlaceholder
            src={project.thumbnail}
            alt={project.title}
            height={200}
          />
        </div>

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectSummary}>{project.summary}</p>

          <div className={styles.projectTech}>
            {project.details.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
            {project.details.techStack.length > 3 && (
              <span className={styles.techTag}>
                +{project.details.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>

        {showPreview && (
          <div className={styles.previewPopover}>
            <p className={styles.previewSummary}>{project.summary}</p>
            <div className={styles.previewTech}>
              <strong>Tech Stack:</strong>
              <div className={styles.previewTechList}>
                {project.details.techStack.map((tech) => (
                  <span key={tech} className={styles.previewTechTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className={styles.previewCta}>Click to view full details →</p>
          </div>
        )}
      </div>
    </Link>
  );
}
