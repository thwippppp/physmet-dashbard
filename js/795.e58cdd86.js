(globalThis["webpackChunkquaqua"] = globalThis["webpackChunkquaqua"] || []).push([[795],{

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ main_page)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
// EXTERNAL MODULE: ./src/assets/logo.png
var logo = __webpack_require__(744);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(1446);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/main-page.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-4319aa37"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  width: "40",
  height: "40",
  src: (logo_default())
}, null, -1));
const _hoisted_2 = {
  class: "q-px-lg q-pt-lg q-gutter-sm"
};
const _hoisted_3 = {
  class: "no-wrap items-center q-ma-lg q-px-lg bg-grey-3 rounded-borders text-justify"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-center text-h4 q-pa-md"
}, " Welcome to PhysMet Job Order Information System (PJOIS) ", -1));
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "flex flex-center text-center text-justify text-weight-medium q-py-lg"
}, " The Planning and Management Division (PMD) through the Management Information System (MIS) unit has been actively engaged in developing and maintaining information systems that are beneficial for the Center. Indeed, MIS keeps track of the Center’s Information Systems Strategic Plan (ISSP) whose main goal is to intensify the Center’s operational excellence through the acquisition of ICT infrastructure and implementation information systems in support of the productivity and competitiveness of the metals, engineering (M&E) and allied Industries. The PhysMet Job Order Information System is a web-based system developed for the acceptance, processing, and release of Physical Metallurgy service requests covering Metallography, Macro Examination, Photomicrography, among others. The system shall be developed under the Medium-Term Information and Communications Technology Harmonization Initiative (MITHI) project. The system’s main objective is to manage, monitor, and facilitate the Physical Metallurgy technical service requests entered by the clients of the Center. PhysMet Job Order Information System shall have a database of customer profiles, job profiles, cost estimates, status of jobs, and a library of Types of tests, Test method to be utilized for the specific service to be rendered. The system shall process the request up to billing and payment. It will have a dashboard that features information analytics and could generate reports. This concept paper discusses the requirement details that serve as analysis inputs to the design and development of the PhysMet Job Order Information System. It aims to minimize the iterations in the system’s development process and to anticipate possible problems, risks and opportunities. ", -1));


/* harmony default export */ const main_pagevue_type_script_setup_true_lang_js = ({
  __name: 'main-page',
  setup(__props) {
    const $q = (0,use_quasar/* default */.Z)();
    const app = (0,runtime_core_esm_bundler/* getCurrentInstance */.FN)().appContext.config.globalProperties;
    const linksList = [{
      title: "Homepage",
      icon: "home",
      path: "/home"
    }, {
      title: "Dashboard",
      icon: "dashboard",
      path: "/dashboard"
    }, {
      title: "Customer",
      icon: "people",
      path: "/customer"
    }, {
      title: "Job Order",
      icon: "list",
      path: "/job-order"
    }, {
      title: "Downloadable File",
      icon: "download",
      path: "/downloadable-file"
    }];
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const miniState = (0,reactivity_esm_bundler/* ref */.iH)(true);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function openInNewTab(url) {
      window.open(url, "_blank").focus();
    }
    return (_ctx, _cache) => {
      const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");
      const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
      const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");
      const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");
      const _component_q_breadcrumbs_el = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-breadcrumbs-el");
      const _component_q_breadcrumbs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-breadcrumbs");
      const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");
      const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");
      const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");
      const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");
      const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");
      const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");
      const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");
      const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");
      const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
        view: "hHh Lpr lff"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
          reveal: "",
          elevated: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
            class: "glossy"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              flat: "",
              dense: "",
              round: "",
              icon: "menu",
              "aria-label": "Menu",
              onClick: _cache[0] || (_cache[0] = $event => leftDrawerOpen.value = !leftDrawerOpen.value),
              class: "q-mr-md"
            }), _hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" PhysMet Job Order Information System (PJOIS) ")]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              flat: "",
              round: "",
              dense: "",
              icon: "person"
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_drop_down"
            })]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
          class: "q-px-xl"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
              label: "Homepage",
              icon: "home"
            })]),
            _: 1
          })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), _hoisted_5])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
          modelValue: leftDrawerOpen.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => leftDrawerOpen.value = $event),
          "show-if-above": "",
          bordered: "",
          width: 260,
          class: "bg-grey-2",
          mini: miniState.value,
          onMouseover: _cache[2] || (_cache[2] = $event => miniState.value = false),
          onMouseout: _cache[3] || (_cache[3] = $event => miniState.value = true),
          breakpoint: 500
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
            class: "text-primary"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(linksList, link => {
              return (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
                "active-class": "my-menu-link",
                key: link.title,
                clickable: "",
                exact: "",
                to: link.path
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [link.icon ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
                  key: 0,
                  avatar: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                    name: link.icon
                  }, null, 8, ["name"])]),
                  _: 2
                }, 1024)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(link.title), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["to"]);
            }), 64))]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "mini"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container)]),
        _: 1
      });
    };
  }
});
;// CONCATENATED MODULE: ./src/layouts/main-page.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(7605);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(6602);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(1663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 3 modules
var QBtn = __webpack_require__(963);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(1973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbs.js
var QBreadcrumbs = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbsEl.js
var QBreadcrumbsEl = __webpack_require__(8052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/main-page.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(main_pagevue_type_script_setup_true_lang_js, [['__scopeId',"data-v-4319aa37"]])

/* harmony default export */ const main_page = (__exports__);
;















runtime_auto_import_default()(main_pagevue_type_script_setup_true_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QBreadcrumbs: QBreadcrumbs/* default */.Z,QBreadcrumbsEl: QBreadcrumbsEl/* default */.Z,QSeparator: QSeparator/* default */.Z,QDrawer: QDrawer/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.13fbb3a7.png";

/***/ })

}]);
//# sourceMappingURL=795.e58cdd86.js.map