import type { Skills as SkillsType } from '@/types/portfolio';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: SkillsType;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.categories.map((category) => (
          <div key={category.name} className={styles.skillCategory}>
            <h3>{category.name}</h3>
            <div className={styles.skillItems}>
              {category.items.map((item) => (
                <span key={item} className={styles.skillTag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
