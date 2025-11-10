import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * ImagePlaceholder component for development
 * Shows colored gradient div with image path label
 * Color is deterministic based on path hash for consistency
 */
export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className = '',
}: ImagePlaceholderProps) {
  // Generate deterministic color from path
  const getColorFromString = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Use theme-appropriate colors
    const colors = [
      ['#569cd6', '#c586c0'], // blue to purple
      ['#4ec9b0', '#569cd6'], // green to blue
      ['#ce9178', '#c586c0'], // orange to purple
      ['#569cd6', '#4ec9b0'], // blue to green
    ];

    const colorPair = colors[Math.abs(hash) % colors.length];
    return `linear-gradient(135deg, ${colorPair[0]}, ${colorPair[1]})`;
  };

  const gradient = getColorFromString(src);
  const filename = src.split('/').pop() || 'image';

  return (
    <div
      className={`${styles.placeholder} ${className}`}
      style={{
        background: gradient,
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
      role="img"
      aria-label={alt}
    >
      <div className={styles.placeholderContent}>
        <svg
          className={styles.placeholderIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className={styles.placeholderText}>{filename}</span>
      </div>
    </div>
  );
}
