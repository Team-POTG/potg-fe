import React, { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement } from "chart.js/auto";

function RecentMatchRate() {
  Chart.register(ArcElement);
  // useEffect(() => {}, []);
  const data = {
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderWidth: 0,
        animation: { duration: 0 },
        options: {
          plugins: {
            tooltip: {
              enabled: false,
            },
          },
        },
      },
    ],
  };

  return (
    <div className="flex rounded-xl h-[122px] w-60 bg-white ">
      <div className="flex">
        {/* <Doughnut className="w-20 -m-[5px] -mt-[10px]" data={data} /> */}
      </div>
    </div>
  );
}

export default RecentMatchRate;
