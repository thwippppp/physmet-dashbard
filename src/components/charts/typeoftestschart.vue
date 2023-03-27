<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="400"
      width="1400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "MyChart7",
  data() {
    return {
      series: [
        {
          name: "Total Number",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"],
          },
        },
        xaxis: {
          labels: {
            rotate: -25,
          },
          categories: [
            "Metallography",
            "Thickness of Coating",
            "Macroexamination",
            "Photomicrography",
            "Scanning Electron Microscopy",
            "Energy Dispersive Spectroscopy",
            "Metal Classification/Certification",
            "Fractographic Evaluation",
            "Failure Investigation",
            "Sample Preparation",
          ],
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
          },
        },
      },
    };
  },
};
</script>
