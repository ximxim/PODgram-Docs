import React, { CSSProperties } from "react";
import clsx from "clsx";

interface CardImageProps {
  className?: string;
  style?: CSSProperties;
  cardImageUrl: string;
}

const CardImage: React.FC<CardImageProps> = ({
  className,
  style,
  cardImageUrl,
}) => {
  return (
    <div className={clsx("card__image", className)} style={style}>
      <img src={cardImageUrl} alt="Card image" />
    </div>
  );
};

export default CardImage;
