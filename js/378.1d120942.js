"use strict";
(globalThis["webpackChunkquaqua"] = globalThis["webpackChunkquaqua"] || []).push([[378],{

/***/ 3378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ typeoftestschart)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/charts/typeoftestschart.vue?vue&type=template&id=61044561

const _hoisted_1 = {
  id: "chart"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_apexchart = (0,runtime_core_esm_bundler/* resolveComponent */.up)("apexchart");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_apexchart, {
    type: "bar",
    height: "400",
    width: "1400",
    options: $data.chartOptions,
    series: $data.series
  }, null, 8, ["options", "series"])]);
}
;// CONCATENATED MODULE: ./src/components/charts/typeoftestschart.vue?vue&type=template&id=61044561

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/charts/typeoftestschart.vue?vue&type=script&lang=js
/* harmony default export */ const typeoftestschartvue_type_script_lang_js = ({
  name: "MyChart7",
  data() {
    return {
      series: [{
        name: "Total Number",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "40%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0
        },
        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        xaxis: {
          labels: {
            rotate: -25
          },
          categories: ["Metallography", "Thickness of Coating", "Macroexamination", "Photomicrography", "Scanning Electron Microscopy", "Energy Dispersive Spectroscopy", "Metal Classification/Certification", "Fractographic Evaluation", "Failure Investigation", "Sample Preparation"]
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
            stops: [50, 0, 100]
          }
        }
      }
    };
  }
});
;// CONCATENATED MODULE: ./src/components/charts/typeoftestschart.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/components/charts/typeoftestschart.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(typeoftestschartvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const typeoftestschart = (__exports__);

/***/ })

}]);
//# sourceMappingURL=378.1d120942.js.map