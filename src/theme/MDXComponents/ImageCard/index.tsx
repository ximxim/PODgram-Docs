import React from "react";
import styles from "./styles.module.css";

interface ImageCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  prompt: string;
}

interface ImageCardGridProps {
  children: React.ReactNode;
}

export function ImageCard({
  title,
  imageSrc,
  imageAlt,
  prompt,
}: ImageCardProps) {
  return (
    <div className={styles.imageCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.cardImage} />
      </div>
      <div className={styles.promptSection}>
        <span className={styles.promptLabel}>Prompt:</span>
        <p className={styles.promptText}>{prompt}</p>
      </div>
    </div>
  );
}

export function ImageCardGrid({ children }: ImageCardGridProps) {
  return <div className={styles.imageCardGrid}>{children}</div>;
}

export default ImageCard;
