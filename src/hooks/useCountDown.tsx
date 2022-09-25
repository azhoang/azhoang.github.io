import React from "react";

interface IProps {
  timeFrom: number;
  margin?: number;
}

const calcTime = (unixTime: number) => {
  const fromTime = new Date(unixTime);
  return {
    second: fromTime.getSeconds(),
    minute: fromTime.getMinutes(),
    hour: fromTime.getHours(),
    day: fromTime.getDay(),
    month: fromTime.getMonth(),
    year: fromTime.getFullYear(),
  };
};

export default function useCountDown(props: IProps) {
  const { margin = 1000 } = props;
  const [result, setResult] = React.useState(calcTime(props.timeFrom));

  React.useEffect(() => {
    let time = props.timeFrom;
    const interval = setInterval(() => {
      time -= margin;
      setResult(calcTime(time));
    }, margin);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return result;
}
