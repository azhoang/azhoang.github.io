import React from "react";
import { Chart } from "chart.js";
import { WordCloudController, WordElement } from "chartjs-chart-wordcloud";
Chart.register(WordCloudController, WordElement);

interface IProps {
  words: Array<{
    key: string;
    value: number;
  }>;
}

export default function ChartWordCloud(props: IProps) {
  const chartRef = React.useRef<any>();
  React.useEffect(() => {
    const element: any = document.querySelector("#chart-js-word-cloud");
    console.log(element);

    if (element && !chartRef.current) {
      chartRef.current = new Chart(element.getContext("2d"), {
        type: "wordCloud",
        data: {
          labels: props.words.map((d) => d.key),
          datasets: [
            {
              label: "",
              data: props.words.map((d) => 10 + d.value * 10),
            },
          ],
        },
        options: {
          // title: {
          //   display: false,
          //   text: "Chart.js Word Cloud",
          // },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, []);

  return <canvas id="chart-js-word-cloud"></canvas>;
}
