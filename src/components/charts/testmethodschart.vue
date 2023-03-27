<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="400"
      width="1550"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "MyChart6",
  data() {
    return {
      series: [
        {
          name: "Total Number",
          data: [25, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
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
            style: {
              fontSize: "9px",
            },

            rotate: -30,
          },
          categories: [
            "E3-11",
            "E407-07",
            "E883-11",
            "E340-13",
            "E381-01(Reapproved 2012) Electron\nMicroscopy",
            "JIS G 0553 (2006)",
            "JIS G 0556:1998",
            "E112-13",
            "E930-99 (Reapproved 2007)",
            "E1382-97 (Reapproved 2010)",
            "E1181-02 (Reapproved 2008)",
            "JIS G 0551:2005",
            "ISO 643 1st ed. 1983-09-01",
            "B487-85 (Reapproved 2013)",
            "E1077-14",
            "SAE J121 Aug 83",
            "SAE J423 Dec 83",
            "JIS G 0559",
            "E-1508-98 Re-approved 2003",
          ],
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: false,
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
