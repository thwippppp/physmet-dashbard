<template>
  <div class="col">
    <div class="no-padding q-mb-lg flex-center">
      <h6 class="no-margin">External</h6>
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
  name: "MyChart5",
  data() {
    return {
      series: [44, 55, 41],
      chartOptions: {
        chart: {
          type: "donut",
        },
        labels: ["Ongoing", "Completed", "Claimed"],
        colors: ["#FFD700", "#FF6347", "#00BFFF"],
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
