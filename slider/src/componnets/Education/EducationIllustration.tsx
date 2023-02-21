import * as React from "react";

type EducationIllustrationProps = {
  backgroundColor?: string;
  mountainColor?: string;
  textColor?: string;
  learnText?: string;
  growText?: string;
};

export const EducationIllustration: React.FunctionComponent<
  EducationIllustrationProps
> = (props) => {
  const {
    backgroundColor = "#F1F8FF",
    mountainColor = "#00ACC1",
    textColor = "#00ACC1",
    learnText = "Learn",
    growText = "Grow",
  } = props;

  return (
    <svg
      width="800"
      height="600"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="800" height="600" fill={backgroundColor} />
      <circle cx="400" cy="250" r="200" fill="#C8E6C9" />
      <rect x="150" y="100" width="500" height="400" fill="#FFFFFF" />
      <path d="M225 125 L575 125 L450 300 L225 125 Z" fill={mountainColor} />
      <circle cx="300" cy="200" r="40" fill="#FFFFFF" />
      <circle cx="500" cy="200" r="40" fill="#FFFFFF" />
      <text
        x="300"
        y="230"
        font-size="20"
        font-family="sans-serif"
        fill={textColor}
      >
        {learnText}
      </text>
      <text
        x="495"
        y="230"
        font-size="20"
        font-family="sans-serif"
        fill={textColor}
      >
        {growText}
      </text>
    </svg>
  );
};
