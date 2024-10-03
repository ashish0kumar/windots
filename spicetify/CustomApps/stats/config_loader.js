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

  // src/extensions/config_loader.tsx
  var config_loader_exports = {};
  __export(config_loader_exports, {
    default: () => config_loader_default
  });

  // src/components/settings_modal.tsx
  var import_react = __toESM(require_react());
  var TextInput = (props) => {
    const textId = `text-input:${props.storageKey}`;
    return /* @__PURE__ */ import_react.default.createElement("label", {
      className: "text-input-wrapper"
    }, /* @__PURE__ */ import_react.default.createElement("input", {
      className: "text-input",
      type: "text",
      value: props.value || "",
      "data-storage-key": props.storageKey,
      placeholder: props.placeholder,
      id: textId,
      title: `Text input for ${props.storageKey}`,
      onChange: props.onChange
    }));
  };
  var Dropdown = (props) => {
    const dropdownId = `dropdown:${props.storageKey}`;
    return /* @__PURE__ */ import_react.default.createElement("label", {
      className: "dropdown-wrapper"
    }, /* @__PURE__ */ import_react.default.createElement("select", {
      className: "dropdown-input",
      value: props.value,
      "data-storage-key": props.storageKey,
      id: dropdownId,
      title: `Dropdown for ${props.storageKey}`,
      onChange: props.onChange
    }, props.options.map((option, index) => /* @__PURE__ */ import_react.default.createElement("option", {
      key: index,
      value: option
    }, option))));
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
    console.log(props);
    const enabled = !!props.modalConfig[props.storageKey];
    const value = props.modalConfig[props.storageKey];
    const updateItem = (storageKey, state) => {
      props.modalConfig[storageKey] = state;
      console.debug(`toggling ${storageKey} to ${state}`);
      localStorage.setItem(`library:config:${storageKey}`, String(state));
      props.updateConfig(props.modalConfig);
    };
    const settingsToggleChange = (newValue, storageKey) => {
      updateItem(storageKey, newValue);
      if (props.callback)
        props.callback(newValue);
    };
    const settingsTextChange = (event) => {
      console.log("yoohoo");
      updateItem(event.target.dataset.storageKey, event.target.value);
      console.log(props.callback);
      if (props.callback)
        props.callback(event.target.value);
    };
    const settingsDropdownChange = (event) => {
      updateItem(event.target.dataset.storageKey, event.target.value);
      if (props.callback)
        props.callback(event.target.value);
    };
    const element = () => {
      switch (props.type) {
        case "dropdown":
          return /* @__PURE__ */ import_react.default.createElement(Dropdown, {
            name: props.name,
            storageKey: props.storageKey,
            value,
            options: props.options || [],
            onChange: settingsDropdownChange
          });
        case "text":
          return /* @__PURE__ */ import_react.default.createElement(TextInput, {
            name: props.name,
            storageKey: props.storageKey,
            value,
            placeholder: props.placeholder,
            onChange: settingsTextChange
          });
        default:
          return /* @__PURE__ */ import_react.default.createElement(Spicetify.ReactComponent.Toggle, {
            id: `toggle:${props.storageKey}`,
            value: enabled,
            onSelected: (newValue) => {
              settingsToggleChange(newValue, props.storageKey);
            }
          });
      }
    };
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
    }, element()));
  };
  var SettingsModal = ({ CONFIG, settings, updateAppConfig }) => {
    const [modalConfig, setModalConfig] = import_react.default.useState(__spreadValues({}, CONFIG));
    const updateConfig = (CONFIG2) => {
      updateAppConfig(__spreadValues({}, CONFIG2));
      setModalConfig(__spreadValues({}, CONFIG2));
    };
    const configRows = settings.map((setting, index) => {
      console.log(setting);
      if (setting.sectionHeader) {
        return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, index != 0 ? /* @__PURE__ */ import_react.default.createElement("br", null) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null), /* @__PURE__ */ import_react.default.createElement("h2", {
          className: "section-header"
        }, setting.sectionHeader), /* @__PURE__ */ import_react.default.createElement(ConfigRow, {
          name: setting.name,
          storageKey: setting.key,
          type: setting.type,
          options: setting.options,
          placeholder: setting.placeholder,
          desc: setting.desc,
          modalConfig,
          updateConfig,
          callback: setting.callback
        }));
      }
      return /* @__PURE__ */ import_react.default.createElement(ConfigRow, {
        name: setting.name,
        storageKey: setting.key,
        type: setting.type,
        options: setting.options,
        placeholder: setting.placeholder,
        desc: setting.desc,
        modalConfig,
        updateConfig,
        callback: setting.callback
      });
    });
    return /* @__PURE__ */ import_react.default.createElement("div", {
      id: "stats-config-container"
    }, configRows);
  };
  var settings_modal_default = SettingsModal;

  // src/extensions/config_loader.tsx
  var import_react2 = __toESM(require_react());
  var getLocalStorageDataFromKey = (key, fallback) => {
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
  (function wait() {
    const { LocalStorageAPI } = Spicetify == null ? void 0 : Spicetify.Platform;
    if (!LocalStorageAPI) {
      setTimeout(wait, 100);
      return;
    }
  })();
  async function loadConfig(configSettings) {
    const { PopupModal } = Spicetify;
    await new Promise((resolve) => {
      (function checkPopupModal() {
        if (PopupModal) {
          resolve(void 0);
        } else {
          setTimeout(checkPopupModal, 100);
        }
      })();
    });
    const settingsArray = configSettings.map((setting) => {
      return { [setting.key]: getLocalStorageDataFromKey(`library:config:${setting.key}`, setting.def) };
    });
    let CONFIG = window.CONFIG = Object.assign({}, ...settingsArray);
    const updateConfig = (config) => {
      window.CONFIG = __spreadValues({}, config);
      console.log("updated config", config);
    };
    const launchModal = window.launchModal = () => {
      console.log(settingsArray);
      PopupModal.display({
        title: "Library Settings",
        content: /* @__PURE__ */ import_react2.default.createElement(settings_modal_default, {
          CONFIG,
          settings: configSettings,
          updateAppConfig: updateConfig
        }),
        isLarge: true
      });
    };
    return { CONFIG, launchModal };
  }
  var config_loader_default = loadConfig;
  return __toCommonJS(config_loader_exports);
})();

        })();