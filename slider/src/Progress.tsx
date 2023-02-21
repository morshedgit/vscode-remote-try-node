import React from "react";

type ProgressProps = {
  id: string;
  progress: number;
  max: number;
  min: number;
  label: string;
  className: string;
};

/**
 * The Progress component is a simple React component that displays a progress bar and label.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.id - The id for the progress element.
 * @param {number} props.progress - The current progress value. This value should be between the min and max values.
 * @param {number} props.max - The maximum progress value.
 * @param {number} props.min - The minimum progress value.
 * @param {string} props.label - The label for the progress element.
 * @param {string} props.className - The class name for the progress element.
 *
 * @return {JSX.Element} - The rendered JSX element.
 */
function Progress(props: ProgressProps) {
  const { id, progress, max, min, label, className } = props;
  return (
    <div className="relative rounded-md">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-gray-600"></span>
      </div>
      <div className="relative h-3 rounded-md bg-gray-300 flex items-center justify-between">
        <span
          className={`h-3 w-3 rounded-full bg-${className}-500`}
          style={{ width: `${progress}%` }}
        ></span>
      </div>
    </div>
  );
}

export default Progress;

