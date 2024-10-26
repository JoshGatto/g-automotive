import React from "react";
import styles from "./Card.module.scss";
import { CardData } from "../../context/CardContext";

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className={styles.cardImage}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

const CardHeader = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <h2 className={styles.cardHeader} id={id}>
    {children}
  </h2>
);

const CardBody = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <div className={styles.cardBody} id={id}>
    {children}
  </div>
);

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button className={`button ${styles.cardButton}`} onClick={onClick}>
    {children}
  </button>
);

type CardProps = {
  cardData: CardData;
  isSelected: boolean;
  onClick: () => void;
  index: number;
};

const Card = React.memo(
  ({ cardData, isSelected, onClick, index }: CardProps) => {
    const { image, heading, text, buttonText } = cardData;

    const cardId = `card-${index}`;
    const headingId = `${cardId}-heading`;
    const bodyId = `${cardId}-body`;
    return (
      <article
        className={`${styles.card} ${isSelected ? styles.selected : ""}`}
        aria-current={isSelected ? "true" : undefined}
        aria-labelledby={headingId}
        aria-describedby={bodyId}
        role="region"
      >
        <div className={styles.cardInner}>
          <CardImage src={image} alt={heading} />

          <div className={styles.cardContent}>
            <CardHeader id={headingId}>{heading}</CardHeader>

            <CardBody id={bodyId}>
              {Array.isArray(text) ? (
                text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
              ) : (
                <p>{text}</p>
              )}
            </CardBody>

            <Button onClick={onClick}>{buttonText}</Button>
          </div>
        </div>
      </article>
    );
  }
);

Card.displayName = "Card";

export default Card;
