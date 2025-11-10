import type { Certificate } from '@/types/portfolio';
import styles from './Certificates.module.css';

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <section className={styles.certificatesSection}>
      <h2>Certificates</h2>
      <div className={styles.certificatesGrid}>
        {certificates.map((cert) => (
          <div key={cert.title} className={styles.certificateCard}>
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateLink}
              >
                <h3 className={styles.certificateTitle}>{cert.title}</h3>
                <p className={styles.certificateIssuer}>{cert.issuer}</p>
                <p className={styles.certificateDate}>{cert.date}</p>
              </a>
            ) : (
              <>
                <h3 className={styles.certificateTitle}>{cert.title}</h3>
                <p className={styles.certificateIssuer}>{cert.issuer}</p>
                <p className={styles.certificateDate}>{cert.date}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
