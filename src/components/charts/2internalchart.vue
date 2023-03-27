<template>
  <div class="col">
    <div class="no-padding q-mb-lg flex-center">
      <h6 class="no-margin">Internal</h6>
    </div>
    <div class="flex flex-center">
      <apexchart
        type="donut"
        width="500"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyChart4",
  data() {
    return {
      series: [44, 55, 41],
      chartOptions: {
        chart: {
          type: "donut",
          size: "70%",
        },
        labels: ["Ongoing", "Completed", "Claimed"],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>
