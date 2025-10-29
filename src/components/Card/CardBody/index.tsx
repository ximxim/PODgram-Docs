import React, { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

interface CardBodyProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  textAlign?: string;
  variant?: string;
  italic?: boolean;
  noDecoration?: boolean;
  transform?: string;
  breakWord?: boolean;
  truncate?: boolean;
  weight?: string;
  lineClamp?: number;
  fontSize?: string;
}

const CardBody: React.FC<CardBodyProps> = ({
  className,
  style,
  children,
  textAlign,
  variant,
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
  lineClamp,
  fontSize,
}) => {
  const text = textAlign ? `text--${textAlign}` : "";
  const textColor = variant ? `text--${variant}` : "";
  const textItalic = italic ? "text--italic" : "";
  const textDecoration = noDecoration ? "text-no-decoration" : "";
  const textType = transform ? `text--${transform}` : "";
  const textBreak = breakWord ? "text--break" : "";
  const textTruncate = truncate ? "text--truncate" : "";
  const textWeight = weight ? `text--${weight}` : "";

  const lineClampStyles: CSSProperties = lineClamp
    ? {
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }
    : {};

  const contentStyle: CSSProperties = {
    ...lineClampStyles,
    ...(fontSize && { fontSize }),
    margin: 0,
  };

  return (
    <div
      className={clsx(
        "card__body",
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {lineClamp ? <p style={contentStyle}>{children}</p> : children}
    </div>
  );
};

export default CardBody;
