"use strict";
(globalThis["webpackChunkquaqua"] = globalThis["webpackChunkquaqua"] || []).push([[902],{

/***/ 8902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ internalchart)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/charts/internalchart.vue?vue&type=template&id=7dc6e454

const _hoisted_1 = {
  class: "col"
};
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "no-padding flex-center"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h6", {
  class: "no-margin"
}, "Internal")], -1);
const _hoisted_3 = {
  class: "flex flex-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_apexchart = (0,runtime_core_esm_bundler/* resolveComponent */.up)("apexchart");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [_hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_apexchart, {
    type: "polarArea",
    width: "480",
    options: $data.chartOptions,
    series: $data.series
  }, null, 8, ["options", "series"])])]);
}
;// CONCATENATED MODULE: ./src/components/charts/internalchart.vue?vue&type=template&id=7dc6e454

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/charts/internalchart.vue?vue&type=script&lang=js
/* harmony default export */ const internalchartvue_type_script_lang_js = ({
  name: "MyChart1",
  data() {
    return {
      series: [42, 47, 52],
      chartOptions: {
        chart: {
          width: 380,
          type: "polarArea",
          align: "center",
          verticalAlign: "middle"
        },
        labels: ["Ongoing", "Completed", "Claimed"],
        fill: {
          opacity: 90
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          floating: true,
          position: "bottom",
          fontSize: "13px",
          offsetX: -35,
          offsetY: -2
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "dark",
            shadeIntensity: 0.6
          }
        }
      }
    };
  }
});
;// CONCATENATED MODULE: ./src/components/charts/internalchart.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/components/charts/internalchart.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(internalchartvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const internalchart = (__exports__);

/***/ })

}]);
//# sourceMappingURL=902.6bbc23fc.js.map