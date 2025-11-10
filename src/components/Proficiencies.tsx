import type { Proficiency } from '@/types/portfolio';
import styles from './Proficiencies.module.css';

interface ProficienciesProps {
  proficiencies: Proficiency[];
}

export default function Proficiencies({ proficiencies }: ProficienciesProps) {
  return (
    <section className={styles.proficienciesSection}>
      <h2>Proficiencies</h2>
      <div className={styles.proficienciesGrid}>
        {proficiencies.map((prof) => (
          <div key={prof.name} className={styles.proficiencyItem}>
            <div className={styles.proficiencyHeader}>
              <span className={styles.proficiencyName}>{prof.name}</span>
              <span className={styles.proficiencyLevel}>{prof.level}%</span>
            </div>
            <div className={styles.proficiencyBar}>
              <div
                className={styles.proficiencyFill}
                style={{ width: `${prof.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
