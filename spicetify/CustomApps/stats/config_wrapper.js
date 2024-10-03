(async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          "use strict";
var library = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // src/extensions/config_wrapper.tsx
  var config_wrapper_exports = {};
  __export(config_wrapper_exports, {
    default: () => config_wrapper_default
  });
  var import_react2 = __toESM(require_react());

  // src/components/config/config_modal.tsx
  var import_react = __toESM(require_react());
  var TextInput = (props) => {
    const handleTextChange = (event) => {
      props.callback(event.target.value);
    };
    return /* @__PURE__ */ import_react.default.createElement("label", {
      className: "text-input-wrapper"
    }, /* @__PURE__ */ import_react.default.createElement("input", {
      className: "text-input",
      type: "text",
      value: props.value || "",
      "data-storage-key": props.storageKey,
      placeholder: props.placeholder,
      id: `text-input:${props.storageKey}`,
      title: `Text input for ${props.storageKey}`,
      onChange: handleTextChange
    }));
  };
  var Dropdown = (props) => {
    const handleDropdownChange = (event) => {
      props.callback(event.target.value);
    };
    return /* @__PURE__ */ import_react.default.createElement("label", {
      className: "dropdown-wrapper"
    }, /* @__PURE__ */ import_react.default.createElement("select", {
      className: "dropdown-input",
      value: props.value,
      "data-storage-key": props.storageKey,
      id: `dropdown:${props.storageKey}`,
      title: `Dropdown for ${props.storageKey}`,
      onChange: handleDropdownChange
    }, props.options.map((option, index) => /* @__PURE__ */ import_react.default.createElement("option", {
      key: index,
      value: option
    }, option))));
  };
  var ToggleInput = (props) => {
    const { Toggle } = Spicetify.ReactComponent;
    const handleToggleChange = (newValue) => {
      props.callback(newValue);
    };
    return /* @__PURE__ */ import_react.default.createElement(Toggle, {
      id: `toggle:${props.storageKey}`,
      value: props.value,
      onSelected: (newValue) => handleToggleChange(newValue)
    });
  };
  var SliderInput = (props) => {
    const { Slider } = Spicetify.ReactComponent;
    const handleSliderChange = (newValue) => {
      const calculatedValue = props.min + newValue * (props.max - props.min);
      props.callback(calculatedValue);
    };
    const value = (props.value - props.min) / (props.max - props.min);
    return /* @__PURE__ */ import_react.default.createElement(Slider, {
      id: `slider:${props.storageKey}`,
      value,
      min: 0,
      max: 1,
      step: 0.1,
      onDragMove: (newValue) => handleSliderChange(newValue),
      onDragStart: () => {
      },
      onDragEnd: () => {
      }
    });
  };
  var TooltipIcon = () => {
    return /* @__PURE__ */ import_react.default.createElement("svg", {
      role: "img",
      height: "16",
      width: "16",
      className: "Svg-sc-ytk21e-0 uPxdw nW1RKQOkzcJcX6aDCZB4",
      viewBox: "0 0 16 16"
    }, /* @__PURE__ */ import_react.default.createElement("path", {
      d: "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
    }), /* @__PURE__ */ import_react.default.createElement("path", {
      d: "M7.25 12.026v-1.5h1.5v1.5h-1.5zm.884-7.096A1.125 1.125 0 007.06 6.39l-1.431.448a2.625 2.625 0 115.13-.784c0 .54-.156 1.015-.503 1.488-.3.408-.7.652-.973.818l-.112.068c-.185.116-.26.203-.302.283-.046.087-.097.245-.097.57h-1.5c0-.47.072-.898.274-1.277.206-.385.507-.645.827-.846l.147-.092c.285-.177.413-.257.526-.41.169-.23.213-.397.213-.602 0-.622-.503-1.125-1.125-1.125z"
    }));
  };
  var ConfigRow = (props) => {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "setting-row"
    }, /* @__PURE__ */ import_react.default.createElement("label", {
      className: "col description"
    }, props.name, props.desc && /* @__PURE__ */ import_react.default.createElement(Spicetify.ReactComponent.TooltipWrapper, {
      label: /* @__PURE__ */ import_react.default.createElement("div", {
        dangerouslySetInnerHTML: { __html: props.desc }
      }),
      renderInline: true,
      showDelay: 10,
      placement: "top",
      labelClassName: "tooltip",
      disabled: false
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      className: "tooltip-icon"
    }, /* @__PURE__ */ import_react.default.createElement(TooltipIcon, null)))), /* @__PURE__ */ import_react.default.createElement("div", {
      className: "col action"
    }, props.children));
  };
  var ConfigModal = (props) => {
    const { config, structure, updateAppConfig } = props;
    const [modalConfig, setModalConfig] = import_react.default.useState(__spreadValues({}, config));
    const modalRows = structure.map((modalRow, index) => {
      const key = modalRow.key;
      const currentValue = modalConfig[key];
      const updateItem = (state) => {
        console.debug(`toggling ${key} to ${state}`);
        localStorage.setItem(`library:config:${key}`, String(state));
        if (modalRow.callback)
          modalRow.callback(state);
        const newConfig = __spreadValues({}, modalConfig);
        newConfig[key] = state;
        updateAppConfig(newConfig);
        setModalConfig(newConfig);
      };
      const header = modalRow.sectionHeader;
      const element = () => {
        switch (modalRow.type) {
          case "toggle":
            return /* @__PURE__ */ import_react.default.createElement(ToggleInput, {
              storageKey: key,
              value: currentValue,
              callback: updateItem
            });
          case "text":
            return /* @__PURE__ */ import_react.default.createElement(TextInput, {
              storageKey: key,
              value: currentValue,
              callback: updateItem
            });
          case "dropdown":
            return /* @__PURE__ */ import_react.default.createElement(Dropdown, {
              storageKey: key,
              value: currentValue,
              options: modalRow.options,
              callback: updateItem
            });
          case "slider":
            return /* @__PURE__ */ import_react.default.createElement(SliderInput, {
              storageKey: key,
              value: currentValue,
              min: modalRow.min,
              max: modalRow.max,
              step: modalRow.step,
              callback: updateItem
            });
        }
      };
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, header && index !== 0 && /* @__PURE__ */ import_react.default.createElement("br", null), header && /* @__PURE__ */ import_react.default.createElement("h2", {
        className: "section-header"
      }, modalRow.sectionHeader), /* @__PURE__ */ import_react.default.createElement(ConfigRow, {
        name: modalRow.name,
        desc: modalRow.desc
      }, element()));
    });
    return /* @__PURE__ */ import_react.default.createElement("div", {
      id: "library-config-container"
    }, modalRows);
  };
  var config_modal_default = ConfigModal;

  // src/extensions/config_wrapper.tsx
  var _ConfigWrapper = class {
    constructor(modalStructure) {
      const config = modalStructure.map((modalStructureRow) => {
        var _a;
        const value = _ConfigWrapper.getLocalStorageDataFromKey(`library:config:${modalStructureRow.key}`, modalStructureRow.def);
        (_a = modalStructureRow.callback) == null ? void 0 : _a.call(modalStructureRow, value);
        return { [modalStructureRow.key]: value };
      });
      this.Config = Object.assign({}, ...config);
      this.launchModal = (callback) => {
        const updateConfig = (config2) => {
          this.Config = __spreadValues({}, config2);
          callback == null ? void 0 : callback(config2);
        };
        Spicetify.PopupModal.display({
          title: "Library Settings",
          content: /* @__PURE__ */ import_react2.default.createElement(config_modal_default, {
            config: this.Config,
            structure: modalStructure,
            updateAppConfig: updateConfig
          }),
          isLarge: true
        });
      };
    }
  };
  var ConfigWrapper = _ConfigWrapper;
  ConfigWrapper.getLocalStorageDataFromKey = (key, fallback) => {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    } else {
      return fallback;
    }
  };
  var config_wrapper_default = ConfigWrapper;
  return __toCommonJS(config_wrapper_exports);
})();

        })();