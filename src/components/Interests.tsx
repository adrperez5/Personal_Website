import styles from './Interests.module.css';

interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <section className={styles.interestsSection}>
      <h2>Interests</h2>
      <div className={styles.interestsList}>
        {interests.map((interest) => (
          <span key={interest} className={styles.interestTag}>
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
