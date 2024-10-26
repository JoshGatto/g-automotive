import React, { Suspense, lazy, useCallback, useId } from "react";
import styles from "./CardContainer.module.scss";
import { useCardContext } from "../../context/CardContext";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Card = lazy(() => import("../Card/Card"));

const CardContainer = () => {
  const { selectedCard, setSelectedCard, cardData } = useCardContext();
  const uniqueId = useId();

  const handleCardClick = useCallback(
    (index: number) => {
      setSelectedCard(index);
    },
    [setSelectedCard]
  );

  return (
    <section
      className={styles.cardContainer}
      aria-labelledby="featured-cards-heading"
    >
      <h2 id="featured-cards-heading" className="sr-only">
        Featured Cards
      </h2>
      {cardData.map((card, index) => (
        <div key={`${uniqueId}-${index}`} className={styles.cardWrapper}>
          <ErrorBoundary fallback={<div>Error loading card</div>}>
            <Suspense
              fallback={
                <div className={styles.cardPlaceholder}>Loading...</div>
              }
            >
              <Card
                cardData={card}
                isSelected={selectedCard === index}
                onClick={() => handleCardClick(index)}
                index={index}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      ))}
    </section>
  );
};

export default React.memo(CardContainer);
