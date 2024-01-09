import { Component } from "@angular/core";
import { ChartData, ChartOptions } from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent {
  data: ChartData = {
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "ابريل",
      "مايو",
      "يونيو",
      "يوليو",
      "اغسطس",
      "سبتمبر",
      "نوفمبر",
      "ديسمبر",
    ],
    datasets: [
      {
        label: " Dataset",
        data: [40, 51, 62, 33, 67, 90, 45, 29, 45, 70, 80],
        fill: true,
        borderColor: "#8A74F9",
        tension: 0.4,
        backgroundColor: "#8A74F943",
      },
    ],
  };
  chartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          // color: "red",
          font: {
            family: "Noto Sans Arabic", // Set the font family for x-axis ticks
            size: 16, // Set the font size for x-axis ticks
            style: "normal", // Set the font style for x-axis ticks (normal, italic, or oblique)
            weight: "normal", // Set the font weight for x-axis ticks (normal, bold, bolder, lighter, or a number)
          },
        },
        grid: {
          color: "red",
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          color: "red",
          display: false,
        },
        grid: {
          // color: "blue",
          drawBorder: false,
        },
      },
    },
    elements: {
      point: {
        // pointStyle: "circle"
        // radius: 5,
        hoverRadius: 10,
        hoverBackgroundColor: "#8A74F9",
        hoverBorderColor: "white",
        hoverBorderWidth: 3,
      },
    },
  };
}
