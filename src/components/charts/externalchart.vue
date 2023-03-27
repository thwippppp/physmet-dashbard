<template>
  <div class="col">
    <div class="no-padding flex-center">
      <h6 class="no-margin">External</h6>
    </div>
    <div class="flex flex-center">
      <apexchart
        type="polarArea"
        width="480"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyChart2",
  data() {
    return {
      series: [42, 47, 52],
      chartOptions: {
        chart: {
          width: 380,
          type: "polarArea",
          align: "center",
          verticalAlign: "middle",
        },
        labels: ["Ongoing", "Completed", "Claimed"],

        fill: {
          opacity: 90,
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          floating: true,
          position: "bottom",
          fontSize: "13px",
          offsetX: -35,
          offsetY: -2,
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
      },
    };
  },
};
</script>
