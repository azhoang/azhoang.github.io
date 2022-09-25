import React from "react";

interface IProps {
  percent: number;
  label: string;
}

export default function ProgressBar(props: IProps) {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${props.percent}%` }}>
        <div className="progress-text">
          <span>{props.label}</span>
          <span>{props.percent}%</span>
        </div>
      </div>
      <div className="progress-text text-light">
        <span>{props.label}</span>
      </div>
    </div>
  );
}
