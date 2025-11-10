import type { Bio as BioType } from '@/types/portfolio';
import ImagePlaceholder from './ImagePlaceholder';
import styles from './Bio.module.css';

interface BioProps {
  bio: BioType;
}

export default function Bio({ bio }: BioProps) {
  return (
    <section className={styles.bioSection}>
      <div className={styles.bioContent}>
        <h1>{bio.name}</h1>
        <p className={styles.title}>{bio.title}</p>
        <p className={styles.location}>{bio.location}</p>
        <p className={styles.email}>
          <a href={`mailto:${bio.email}`}>{bio.email}</a>
        </p>
        <p className={styles.description}>{bio.description}</p>
      </div>
      <div className={styles.bioImage}>
        <ImagePlaceholder
          src={bio.profileImage}
          alt={`${bio.name} profile picture`}
          height={280}
        />
      </div>
    </section>
  );
}
