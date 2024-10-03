var library = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // ../../../AppData/Local/Temp/spicetify-creator/index.jsx
  var spicetify_creator_exports = {};
  __export(spicetify_creator_exports, {
    default: () => render
  });

  // src/app.tsx
  var import_react23 = __toESM(require_react());

  // ../node_modules/spcr-navigation-bar/useNavigationBar.tsx
  var import_react3 = __toESM(require_react());

  // ../node_modules/spcr-navigation-bar/navBar.tsx
  var import_react2 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // ../node_modules/spcr-navigation-bar/optionsMenu.tsx
  var import_react = __toESM(require_react());
  var OptionsMenuItemIcon = /* @__PURE__ */ import_react.default.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M13.985 2.383L5.127 12.754 1.388 8.375l-.658.77 4.397 5.149 9.618-11.262z"
  }));
  var OptionsMenuItem = import_react.default.memo((props) => {
    return /* @__PURE__ */ import_react.default.createElement(Spicetify.ReactComponent.MenuItem, {
      onClick: props.onSelect,
      icon: props.isSelected ? OptionsMenuItemIcon : null
    }, props.value);
  });
  var OptionsMenu = import_react.default.memo((props) => {
    const menuRef = import_react.default.useRef(null);
    const menu = /* @__PURE__ */ import_react.default.createElement(Spicetify.ReactComponent.Menu, null, props.options.map(
      (option) => /* @__PURE__ */ import_react.default.createElement(OptionsMenuItem, {
        value: option.link,
        isSelected: option.isActive,
        onSelect: () => {
          props.onSelect(option.link);
          menuRef.current?.click();
        }
      })
    ));
    return /* @__PURE__ */ import_react.default.createElement(Spicetify.ReactComponent.ContextMenu, {
      menu,
      trigger: "click",
      action: "toggle",
      renderInLine: true
    }, /* @__PURE__ */ import_react.default.createElement("button", {
      className: navBar_module_default.optionsMenuDropBox,
      ref: menuRef
    }, /* @__PURE__ */ import_react.default.createElement("span", {
      className: props.bold ? "main-type-mestoBold" : "main-type-mesto"
    }, props.options.find((o) => o.isActive)?.link || props.defaultValue), /* @__PURE__ */ import_react.default.createElement("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "currentColor"
    }, /* @__PURE__ */ import_react.default.createElement("path", {
      d: "M3 6l5 5.794L13 6z"
    }))));
  });
  var optionsMenu_default = OptionsMenu;

  // postcss-module:C:\Users\user\AppData\Local\Temp\tmp-5152-1Ex7Bvh4Tu6u\18f3cb8bc8b4\navBar.module.css
  var navBar_module_default = { "topBarHeaderItem": "navBar-module__topBarHeaderItem___piw4C_library", "topBarHeaderItemLink": "navBar-module__topBarHeaderItemLink___xA4uv_library", "topBarActive": "navBar-module__topBarActive___XhWpm_library", "topBarNav": "navBar-module__topBarNav___qWGeZ_library", "optionsMenuDropBox": "navBar-module__optionsMenuDropBox___pzfNI_library" };

  // ../node_modules/spcr-navigation-bar/navBar.tsx
  var NavbarItem2 = class {
    constructor(link, isActive) {
      this.link = link;
      this.isActive = isActive;
    }
  };
  var NavbarItemComponent = (props) => {
    return /* @__PURE__ */ import_react2.default.createElement("li", {
      className: navBar_module_default.topBarHeaderItem,
      onClick: (e) => {
        e.preventDefault();
        props.switchTo(props.item.link);
      }
    }, /* @__PURE__ */ import_react2.default.createElement("a", {
      className: `${navBar_module_default.topBarHeaderItemLink} ${props.item.isActive ? navBar_module_default.topBarActive : ""}`,
      "aria-current": "page",
      draggable: false,
      href: ""
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "main-type-mestoBold"
    }, props.item.link)));
  };
  var NavbarMore = import_react2.default.memo(({ items, switchTo }) => {
    return /* @__PURE__ */ import_react2.default.createElement("li", {
      className: `${navBar_module_default.topBarHeaderItem} ${items.find((item) => item.isActive) ? navBar_module_default.topBarActive : ""}`
    }, /* @__PURE__ */ import_react2.default.createElement(optionsMenu_default, {
      options: items,
      onSelect: switchTo,
      defaultValue: "More",
      bold: true
    }));
  });
  var NavbarContent = (props) => {
    const resizeHost = document.querySelector(".Root__main-view .os-resize-observer-host") ?? document.querySelector(".Root__main-view .os-size-observer");
    const [windowSize, setWindowSize] = (0, import_react2.useState)(resizeHost.clientWidth);
    const resizeHandler = () => setWindowSize(resizeHost.clientWidth);
    (0, import_react2.useEffect)(() => {
      const observer = new ResizeObserver(resizeHandler);
      observer.observe(resizeHost);
      return () => {
        observer.disconnect();
      };
    }, [resizeHandler]);
    return /* @__PURE__ */ import_react2.default.createElement(NavbarContext, null, /* @__PURE__ */ import_react2.default.createElement(Navbar, {
      ...props,
      windowSize
    }));
  };
  var NavbarContext = (props) => {
    return import_react_dom.default.createPortal(
      /* @__PURE__ */ import_react2.default.createElement("div", {
        className: "main-topbar-topbarContent"
      }, props.children),
      document.querySelector(".main-topBar-topbarContentWrapper")
    );
  };
  var Navbar = (props) => {
    const navBarListRef = import_react2.default.useRef(null);
    const [childrenSizes, setChildrenSizes] = (0, import_react2.useState)([]);
    const [availableSpace, setAvailableSpace] = (0, import_react2.useState)(0);
    const [outOfRangeItemIndexes, setOutOfRangeItemIndexes] = (0, import_react2.useState)([]);
    let items = props.links.map((link) => new NavbarItem2(link, link === props.activeLink));
    (0, import_react2.useEffect)(() => {
      if (!navBarListRef.current)
        return;
      const children = Array.from(navBarListRef.current.children);
      const navBarItemSizes = children.map((child) => child.clientWidth);
      setChildrenSizes(navBarItemSizes);
    }, []);
    (0, import_react2.useEffect)(() => {
      if (!navBarListRef.current)
        return;
      setAvailableSpace(navBarListRef.current.clientWidth);
    }, [props.windowSize]);
    (0, import_react2.useEffect)(() => {
      if (!navBarListRef.current)
        return;
      let totalSize = childrenSizes.reduce((a, b) => a + b, 0);
      if (totalSize <= availableSpace) {
        setOutOfRangeItemIndexes([]);
        return;
      }
      const viewMoreButtonSize = Math.max(...childrenSizes);
      const itemsToHide = [];
      let stopWidth = viewMoreButtonSize;
      childrenSizes.forEach((childWidth, i) => {
        if (availableSpace >= stopWidth + childWidth) {
          stopWidth += childWidth;
        } else if (i !== items.length) {
          itemsToHide.push(i);
        }
      });
      setOutOfRangeItemIndexes(itemsToHide);
    }, [availableSpace, childrenSizes]);
    return /* @__PURE__ */ import_react2.default.createElement("nav", {
      className: navBar_module_default.topBarNav
    }, /* @__PURE__ */ import_react2.default.createElement("ul", {
      className: navBar_module_default.topBarHeader,
      ref: navBarListRef
    }, items.filter((_, id) => !outOfRangeItemIndexes.includes(id)).map(
      (item) => /* @__PURE__ */ import_react2.default.createElement(NavbarItemComponent, {
        item,
        switchTo: props.switchCallback
      })
    ), outOfRangeItemIndexes.length ? /* @__PURE__ */ import_react2.default.createElement(NavbarMore, {
      items: outOfRangeItemIndexes.map((i) => items[i]),
      switchTo: props.switchCallback
    }) : null));
  };
  var navBar_default = NavbarContent;

  // ../node_modules/spcr-navigation-bar/useNavigationBar.tsx
  var useNavigationBar = (links) => {
    const [activeLink, setActiveLink] = (0, import_react3.useState)(links[0]);
    const navbar = /* @__PURE__ */ import_react3.default.createElement(navBar_default, {
      links,
      activeLink,
      switchCallback: (link) => setActiveLink(link)
    });
    return [navbar, activeLink, setActiveLink];
  };
  var useNavigationBar_default = useNavigationBar;

  // src/pages/albums.tsx
  var import_react19 = __toESM(require_react());

  // src/components/searchbar.tsx
  var import_react4 = __toESM(require_react());
  var SearchBar = (props) => {
    const { setSearch, placeholder } = props;
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "x-filterBox-filterInputContainer x-filterBox-expandedOrHasFilter",
      role: "search"
    }, /* @__PURE__ */ import_react4.default.createElement("input", {
      type: "text",
      className: "x-filterBox-filterInput",
      role: "searchbox",
      maxLength: 80,
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      placeholder: `Search ${placeholder}`,
      "aria-hidden": "false",
      onChange: handleChange
    }), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "x-filterBox-overlay"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "x-filterBox-searchIconContainer"
    }, /* @__PURE__ */ import_react4.default.createElement("svg", {
      "data-encore-id": "icon",
      role: "img",
      "aria-hidden": "true",
      className: "Svg-sc-ytk21e-0 Svg-img-icon-small x-filterBox-searchIcon",
      viewBox: "0 0 16 16"
    }, /* @__PURE__ */ import_react4.default.createElement("path", {
      d: "M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"
    })))), /* @__PURE__ */ import_react4.default.createElement("button", {
      className: "x-filterBox-expandButton",
      "aria-hidden": "false",
      "aria-label": "Search Playlists"
    }, /* @__PURE__ */ import_react4.default.createElement("svg", {
      "data-encore-id": "icon",
      role: "img",
      "aria-hidden": "true",
      className: "Svg-sc-ytk21e-0 Svg-img-icon-small x-filterBox-searchIcon",
      viewBox: "0 0 16 16"
    }, /* @__PURE__ */ import_react4.default.createElement("path", {
      d: "M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"
    }))));
  };
  var searchbar_default = SearchBar;

  // ../shared/components/settings_button.tsx
  var import_react5 = __toESM(require_react());
  function SettingsIcon() {
    return /* @__PURE__ */ import_react5.default.createElement(Spicetify.ReactComponent.IconComponent, {
      semanticColor: "textSubdued",
      dangerouslySetInnerHTML: {
        __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>'
      },
      iconSize: 16
    });
  }
  function SettingsButton(props) {
    const { TooltipWrapper, ButtonTertiary } = Spicetify.ReactComponent;
    const { configWrapper } = props;
    return /* @__PURE__ */ import_react5.default.createElement(TooltipWrapper, {
      label: "Settings",
      renderInline: true,
      placement: "top"
    }, /* @__PURE__ */ import_react5.default.createElement(ButtonTertiary, {
      buttonSize: "sm",
      onClick: configWrapper.launchModal,
      "aria-label": "Settings",
      iconOnly: SettingsIcon
    }));
  }
  var settings_button_default = SettingsButton;

  // ../shared/dropdown/useDropdownMenu.tsx
  var import_react7 = __toESM(require_react());

  // ../shared/dropdown/dropdown.tsx
  var import_react6 = __toESM(require_react());
  function CheckIcon() {
    return /* @__PURE__ */ import_react6.default.createElement(Spicetify.ReactComponent.IconComponent, {
      iconSize: 16,
      semanticColor: "textBase",
      dangerouslySetInnerHTML: {
        __html: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"/></svg>'
      }
    });
  }
  var MenuItem = (props) => {
    const { ReactComponent } = Spicetify;
    const { option, isActive, switchCallback } = props;
    const activeStyle = {
      backgroundColor: "rgba(var(--spice-rgb-selected-row),.1)"
    };
    return /* @__PURE__ */ import_react6.default.createElement(ReactComponent.MenuItem, {
      trigger: "click",
      onClick: () => switchCallback(option),
      "data-checked": isActive,
      trailingIcon: isActive ? /* @__PURE__ */ import_react6.default.createElement(CheckIcon, null) : void 0,
      style: isActive ? activeStyle : void 0
    }, option.name);
  };
  var DropdownMenu = (props) => {
    const { ContextMenu, Menu, TextComponent } = Spicetify.ReactComponent;
    const { options, activeOption, switchCallback } = props;
    const optionItems = options.map((option) => {
      return /* @__PURE__ */ import_react6.default.createElement(MenuItem, {
        option,
        isActive: option === activeOption,
        switchCallback
      });
    });
    const MenuWrapper = (props2) => {
      return /* @__PURE__ */ import_react6.default.createElement(Menu, {
        ...props2
      }, optionItems);
    };
    return /* @__PURE__ */ import_react6.default.createElement(ContextMenu, {
      menu: /* @__PURE__ */ import_react6.default.createElement(MenuWrapper, null),
      trigger: "click"
    }, /* @__PURE__ */ import_react6.default.createElement("button", {
      className: "x-sortBox-sortDropdown",
      type: "button",
      role: "combobox",
      "aria-expanded": "false"
    }, /* @__PURE__ */ import_react6.default.createElement(TextComponent, {
      variant: "mesto",
      semanticColor: "textSubdued"
    }, activeOption.name), /* @__PURE__ */ import_react6.default.createElement("svg", {
      role: "img",
      height: "16",
      width: "16",
      "aria-hidden": "true",
      className: "Svg-img-16 Svg-img-16-icon Svg-img-icon Svg-img-icon-small",
      viewBox: "0 0 16 16",
      "data-encore-id": "icon"
    }, /* @__PURE__ */ import_react6.default.createElement("path", {
      d: "m14 6-6 6-6-6h12z"
    }))));
  };
  var dropdown_default = DropdownMenu;

  // ../shared/dropdown/useDropdownMenu.tsx
  var useDropdownMenu = (options, storageVariable) => {
    const initialOptionID = storageVariable && Spicetify.LocalStorage.get(`${storageVariable}:active-option`);
    const initialOption = initialOptionID && options.find((e) => e.id === initialOptionID);
    const [activeOption, setActiveOption] = (0, import_react7.useState)(initialOption || options[0]);
    const [availableOptions, setAvailableOptions] = (0, import_react7.useState)(options);
    const dropdown = /* @__PURE__ */ import_react7.default.createElement(dropdown_default, {
      options: availableOptions,
      activeOption,
      switchCallback: (option) => {
        setActiveOption(option);
        if (storageVariable)
          Spicetify.LocalStorage.set(`${storageVariable}:active-option`, option.id);
      }
    });
    return [dropdown, activeOption, setActiveOption, setAvailableOptions];
  };
  var useDropdownMenu_default = useDropdownMenu;

  // ../shared/components/page_container.tsx
  var import_react9 = __toESM(require_react());

  // ../stats/src/components/buttons/create_playlist_button.tsx
  var import_react8 = __toESM(require_react());
  async function createPlaylistAsync(infoToCreatePlaylist) {
    const { Platform, showNotification } = Spicetify;
    const { RootlistAPI, PlaylistAPI } = Platform;
    try {
      const { playlistName, itemsUris } = infoToCreatePlaylist;
      const playlistUri = await RootlistAPI.createPlaylist(playlistName, { before: "start" });
      await PlaylistAPI.add(playlistUri, itemsUris, { before: "start" });
    } catch (error) {
      console.error(error);
      showNotification("Failed to create playlist", true, 1e3);
    }
  }
  function CreatePlaylistButton(props) {
    const { TooltipWrapper, ButtonSecondary } = Spicetify.ReactComponent;
    const { infoToCreatePlaylist } = props;
    return /* @__PURE__ */ import_react8.default.createElement(TooltipWrapper, {
      label: "Turn Into Playlist",
      renderInline: true,
      placement: "top"
    }, /* @__PURE__ */ import_react8.default.createElement(ButtonSecondary, {
      "aria-label": "Turn Into Playlist",
      children: "Turn Into Playlist",
      semanticColor: "textBase",
      buttonSize: "sm",
      onClick: () => createPlaylistAsync(infoToCreatePlaylist),
      className: "stats-make-playlist-button"
    }));
  }
  var create_playlist_button_default = CreatePlaylistButton;

  // ../shared/components/page_container.tsx
  var PageContainer = (props) => {
    const { title, infoToCreatePlaylist, headerEls, children } = props;
    const { TextComponent } = Spicetify.ReactComponent;
    return /* @__PURE__ */ import_react9.default.createElement("section", {
      className: "contentSpacing"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "page-header"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "header-left"
    }, /* @__PURE__ */ import_react9.default.createElement(TextComponent, {
      children: title,
      as: "h1",
      variant: "canon",
      semanticColor: "textBase"
    }), infoToCreatePlaylist ? /* @__PURE__ */ import_react9.default.createElement(create_playlist_button_default, {
      infoToCreatePlaylist
    }) : null), /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "header-right"
    }, headerEls)), /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "page-content"
    }, children));
  };
  var page_container_default = PageContainer;

  // ../shared/components/status.tsx
  var import_react10 = __toESM(require_react());
  var ErrorIcon = () => {
    return /* @__PURE__ */ import_react10.default.createElement("svg", {
      "data-encore-id": "icon",
      role: "img",
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      className: "status-icon"
    }, /* @__PURE__ */ import_react10.default.createElement("path", {
      d: "M11 18v-2h2v2h-2zm0-4V6h2v8h-2z"
    }), /* @__PURE__ */ import_react10.default.createElement("path", {
      d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
    }));
  };
  var LibraryIcon = () => {
    return /* @__PURE__ */ import_react10.default.createElement("svg", {
      role: "img",
      height: "46",
      width: "46",
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      "data-encore-id": "icon",
      className: "status-icon"
    }, /* @__PURE__ */ import_react10.default.createElement("path", {
      d: "M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"
    }));
  };
  var Status = (props) => {
    const [isVisible, setIsVisible] = import_react10.default.useState(false);
    import_react10.default.useEffect(() => {
      const to = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(to);
    }, []);
    return isVisible ? /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", {
      className: "loadingWrapper"
    }, props.icon === "error" ? /* @__PURE__ */ import_react10.default.createElement(ErrorIcon, null) : /* @__PURE__ */ import_react10.default.createElement(LibraryIcon, null), /* @__PURE__ */ import_react10.default.createElement("h1", null, props.heading), /* @__PURE__ */ import_react10.default.createElement("h3", null, props.subheading))) : /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null);
  };
  var status_default = Status;

  // src/components/collection_menu.tsx
  var import_react13 = __toESM(require_react());

  // src/components/text_input_dialog.tsx
  var import_react11 = __toESM(require_react());
  var TextInputDialog = (props) => {
    const { ButtonPrimary } = Spicetify.ReactComponent;
    const { def, placeholder, onSave } = props;
    const [value, setValue] = import_react11.default.useState(def);
    const onSubmit = (e) => {
      e.preventDefault();
      Spicetify.PopupModal.hide();
      onSave(value);
    };
    return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("form", {
      className: "text-input-form",
      onSubmit
    }, /* @__PURE__ */ import_react11.default.createElement("label", {
      className: "text-input-wrapper"
    }, /* @__PURE__ */ import_react11.default.createElement("input", {
      className: "text-input",
      type: "text",
      value,
      placeholder,
      onChange: (e) => setValue(e.target.value)
    })), /* @__PURE__ */ import_react11.default.createElement("button", {
      type: "submit",
      "data-encore-id": "buttonPrimary",
      className: "Button-sc-qlcn5g-0 Button-small-buttonPrimary"
    }, /* @__PURE__ */ import_react11.default.createElement("span", {
      className: "ButtonInner-sc-14ud5tc-0 ButtonInner-small encore-bright-accent-set"
    }, "Save"))));
  };
  var text_input_dialog_default = TextInputDialog;

  // src/components/leading_icon.tsx
  var import_react12 = __toESM(require_react());
  var LeadingIcon = ({ path }) => {
    return /* @__PURE__ */ import_react12.default.createElement(Spicetify.ReactComponent.IconComponent, {
      semanticColor: "textSubdued",
      dangerouslySetInnerHTML: {
        __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">${path}</svg>`
      },
      iconSize: 16
    });
  };
  var leading_icon_default = LeadingIcon;

  // src/components/collection_menu.tsx
  var editIconPath = '<path d="M11.838.714a2.438 2.438 0 0 1 3.448 3.448l-9.841 9.841c-.358.358-.79.633-1.267.806l-3.173 1.146a.75.75 0 0 1-.96-.96l1.146-3.173c.173-.476.448-.909.806-1.267l9.84-9.84zm2.387 1.06a.938.938 0 0 0-1.327 0l-9.84 9.842a1.953 1.953 0 0 0-.456.716L2 14.002l1.669-.604a1.95 1.95 0 0 0 .716-.455l9.841-9.841a.938.938 0 0 0 0-1.327z"></path>';
  var deleteIconPath = '<path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M12 8.75H4v-1.5h8v1.5z"></path>';
  var CollectionMenu = ({ id }) => {
    const { Menu, MenuItem: MenuItem2 } = Spicetify.ReactComponent;
    const deleteCollection = () => {
      SpicetifyLibrary.CollectionWrapper.deleteCollection(id);
    };
    const renameCollection = () => {
      const name = SpicetifyLibrary.CollectionWrapper.getCollection(id).name;
      const rename = (newName) => {
        SpicetifyLibrary.CollectionWrapper.renameCollection(id, newName);
      };
      Spicetify.PopupModal.display({
        title: "Rename Collection",
        content: /* @__PURE__ */ import_react13.default.createElement(text_input_dialog_default, {
          def: name,
          onSave: rename
        })
      });
    };
    const image = SpicetifyLibrary.CollectionWrapper.getCollection(id).imgUrl;
    const setCollectionImage = () => {
      const setImg = (imgUrl) => {
        SpicetifyLibrary.CollectionWrapper.setCollectionImage(id, imgUrl);
      };
      Spicetify.PopupModal.display({
        title: "Set Collection Image",
        content: /* @__PURE__ */ import_react13.default.createElement(text_input_dialog_default, {
          def: image,
          placeholder: "Image URL",
          onSave: setImg
        })
      });
    };
    const removeImage = () => {
      SpicetifyLibrary.CollectionWrapper.removeCollectionImage(id);
    };
    return /* @__PURE__ */ import_react13.default.createElement(Menu, null, /* @__PURE__ */ import_react13.default.createElement(MenuItem2, {
      leadingIcon: /* @__PURE__ */ import_react13.default.createElement(leading_icon_default, {
        path: editIconPath
      }),
      onClick: renameCollection
    }, "Rename"), /* @__PURE__ */ import_react13.default.createElement(MenuItem2, {
      leadingIcon: /* @__PURE__ */ import_react13.default.createElement(leading_icon_default, {
        path: deleteIconPath
      }),
      onClick: deleteCollection
    }, "Delete"), /* @__PURE__ */ import_react13.default.createElement(MenuItem2, {
      leadingIcon: /* @__PURE__ */ import_react13.default.createElement(leading_icon_default, {
        path: editIconPath
      }),
      onClick: setCollectionImage
    }, "Set Collection Image"), image && /* @__PURE__ */ import_react13.default.createElement(MenuItem2, {
      leadingIcon: /* @__PURE__ */ import_react13.default.createElement(leading_icon_default, {
        path: deleteIconPath
      }),
      onClick: removeImage
    }, "Remove Collection Image"));
  };
  var collection_menu_default = CollectionMenu;

  // src/components/folder_menu.tsx
  var import_react14 = __toESM(require_react());
  var editIconPath2 = '<path d="M11.838.714a2.438 2.438 0 0 1 3.448 3.448l-9.841 9.841c-.358.358-.79.633-1.267.806l-3.173 1.146a.75.75 0 0 1-.96-.96l1.146-3.173c.173-.476.448-.909.806-1.267l9.84-9.84zm2.387 1.06a.938.938 0 0 0-1.327 0l-9.84 9.842a1.953 1.953 0 0 0-.456.716L2 14.002l1.669-.604a1.95 1.95 0 0 0 .716-.455l9.841-9.841a.938.938 0 0 0 0-1.327z"></path>';
  var deleteIconPath2 = '<path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M12 8.75H4v-1.5h8v1.5z"></path>';
  var FolderMenu = ({ uri }) => {
    const { MenuItem: MenuItem2, Menu } = Spicetify.ReactComponent;
    const image = SpicetifyLibrary.FolderImageWrapper.getFolderImage(uri);
    const setImage = () => {
      const setNewImage = (newUrl) => {
        SpicetifyLibrary.FolderImageWrapper.setFolderImage({ uri, url: newUrl });
      };
      Spicetify.PopupModal.display({
        title: "Set Folder Image",
        content: /* @__PURE__ */ import_react14.default.createElement(text_input_dialog_default, {
          def: image,
          onSave: setNewImage
        })
      });
    };
    const removeImage = () => {
      SpicetifyLibrary.FolderImageWrapper.removeFolderImage(uri);
    };
    return /* @__PURE__ */ import_react14.default.createElement(Menu, null, /* @__PURE__ */ import_react14.default.createElement(MenuItem2, {
      leadingIcon: /* @__PURE__ */ import_react14.default.createElement(leading_icon_default, {
        path: editIconPath2
      }),
      onClick: setImage
    }, "Set Folder Image"), image && /* @__PURE__ */ import_react14.default.createElement(MenuItem2, {
      leadingIcon: /* @__PURE__ */ import_react14.default.createElement(leading_icon_default, {
        path: deleteIconPath2
      }),
      onClick: removeImage
    }, "Remove Folder Image"));
  };
  var folder_menu_default = FolderMenu;

  // ../shared/components/spotify_card.tsx
  var import_react16 = __toESM(require_react());

  // ../shared/components/folder_fallback.tsx
  var import_react15 = __toESM(require_react());
  var FolderSVG = (e) => {
    return /* @__PURE__ */ import_react15.default.createElement(Spicetify.ReactComponent.IconComponent, {
      semanticColor: "textSubdued",
      viewBox: "0 0 24 24",
      size: "xxlarge",
      dangerouslySetInnerHTML: {
        __html: '<path d="M1 4a2 2 0 0 1 2-2h5.155a3 3 0 0 1 2.598 1.5l.866 1.5H21a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7.155 0H3v16h18V7H10.464L9.021 4.5a1 1 0 0 0-.866-.5z"/>'
      },
      ...e
    });
  };
  var folder_fallback_default = FolderSVG;

  // ../shared/components/spotify_card.tsx
  function SpotifyCard(props) {
    const { Cards, TextComponent, ArtistMenu, AlbumMenu, PodcastShowMenu, PlaylistMenu, ContextMenu } = Spicetify.ReactComponent;
    const { FeatureCard: Card, CardImage } = Cards;
    const { createHref, push } = Spicetify.Platform.History;
    const { type, header, uri, imageUrl, subheader, artistUri } = props;
    const backupImageUrl = type === "folder" || type === "collection" ? "https://raw.githubusercontent.com/harbassan/spicetify-apps/main/shared/placeholders/folder_placeholder.png" : "https://raw.githubusercontent.com/harbassan/spicetify-apps/main/shared/placeholders/def_placeholder.png";
    const Menu = () => {
      switch (type) {
        case "artist":
          return /* @__PURE__ */ import_react16.default.createElement(ArtistMenu, {
            uri
          });
        case "album":
          return /* @__PURE__ */ import_react16.default.createElement(AlbumMenu, {
            uri,
            artistUri,
            canRemove: true
          });
        case "playlist":
          return /* @__PURE__ */ import_react16.default.createElement(PlaylistMenu, {
            uri
          });
        case "show":
          return /* @__PURE__ */ import_react16.default.createElement(PodcastShowMenu, {
            uri
          });
        case "collection":
          return /* @__PURE__ */ import_react16.default.createElement(collection_menu_default, {
            id: uri
          });
        case "folder":
          return /* @__PURE__ */ import_react16.default.createElement(folder_menu_default, {
            uri
          });
        default:
          return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null);
      }
    };
    const lastfmProps = type === "lastfm" ? { onClick: () => window.open(uri, "_blank"), isPlayable: false, delegateNavigation: true } : {};
    const folderProps = type === "folder" ? {
      delegateNavigation: true,
      onClick: () => {
        createHref({ pathname: `/library/folder/${uri}` });
        push({ pathname: `/library/folder/${uri}` });
      }
    } : {};
    const collectionProps = type === "collection" ? {
      delegateNavigation: true,
      onClick: () => {
        createHref({ pathname: `/library/collection/${uri}` });
        push({ pathname: `/library/collection/${uri}` });
      }
    } : {};
    return /* @__PURE__ */ import_react16.default.createElement(ContextMenu, {
      menu: Menu(),
      trigger: "right-click"
    }, /* @__PURE__ */ import_react16.default.createElement(Card, {
      featureIdentifier: type,
      headerText: header,
      renderCardImage: () => /* @__PURE__ */ import_react16.default.createElement(CardImage, {
        images: [
          {
            height: 640,
            url: imageUrl,
            width: 640
          }
        ],
        isCircular: type === "artist",
        FallbackComponent: folder_fallback_default
      }),
      renderSubHeaderContent: () => /* @__PURE__ */ import_react16.default.createElement(TextComponent, {
        as: "div",
        variant: "mesto",
        semanticColor: "textSubdued",
        children: subheader
      }),
      uri,
      ...lastfmProps,
      ...folderProps,
      ...collectionProps
    }));
  }
  var spotify_card_default = SpotifyCard;

  // src/components/load_more_card.tsx
  var import_react17 = __toESM(require_react());
  var LoadMoreCard = (props) => {
    const { callback } = props;
    return /* @__PURE__ */ import_react17.default.createElement("div", {
      onClick: callback,
      className: "load-more-card main-card-card"
    }, /* @__PURE__ */ import_react17.default.createElement("div", {
      className: "svg-placeholder"
    }, /* @__PURE__ */ import_react17.default.createElement("svg", {
      viewBox: "0 8 24 8",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react17.default.createElement("circle", {
      cx: "17.5",
      cy: "12",
      r: "1.5"
    }), /* @__PURE__ */ import_react17.default.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.5"
    }), /* @__PURE__ */ import_react17.default.createElement("circle", {
      cx: "6.5",
      cy: "12",
      r: "1.5"
    }))), /* @__PURE__ */ import_react17.default.createElement(Spicetify.ReactComponent.TextComponent, {
      as: "div",
      variant: "violaBold",
      semanticColor: "textBase",
      weight: "bold",
      children: "Load More"
    }));
  };
  var load_more_card_default = LoadMoreCard;

  // src/components/add_button.tsx
  var import_react18 = __toESM(require_react());
  function AddIcon() {
    return /* @__PURE__ */ import_react18.default.createElement(Spicetify.ReactComponent.IconComponent, {
      semanticColor: "textSubdued",
      dangerouslySetInnerHTML: {
        __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>'
      },
      iconSize: 16
    });
  }
  function AddButton(props) {
    const { ReactComponent } = Spicetify;
    const { TooltipWrapper, ButtonTertiary, ContextMenu } = ReactComponent;
    const { Menu } = props;
    return /* @__PURE__ */ import_react18.default.createElement(TooltipWrapper, {
      label: "Add",
      placement: "top"
    }, /* @__PURE__ */ import_react18.default.createElement("span", null, /* @__PURE__ */ import_react18.default.createElement(ContextMenu, {
      trigger: "click",
      menu: Menu
    }, /* @__PURE__ */ import_react18.default.createElement(ButtonTertiary, {
      buttonSize: "sm",
      "aria-label": "Add",
      iconOnly: AddIcon
    }))));
  }
  var add_button_default = AddButton;

  // src/pages/albums.tsx
  var sortOptions = [
    { id: "0", name: "Name" },
    { id: "1", name: "Date Added" },
    { id: "2", name: "Artist Name" },
    { id: "6", name: "Recents" }
  ];
  var AddMenu = ({ collection }) => {
    const { MenuItem: MenuItem2, Menu } = Spicetify.ReactComponent;
    const { SVGIcons } = Spicetify;
    const createCollection = () => {
      const onSave = (value) => {
        SpicetifyLibrary.CollectionWrapper.createCollection(value, collection);
      };
      Spicetify.PopupModal.display({
        title: "Create Collection",
        content: /* @__PURE__ */ import_react19.default.createElement(text_input_dialog_default, {
          def: "New Collection",
          placeholder: "Collection Name",
          onSave
        })
      });
    };
    const addAlbum = () => {
      const onSave = (value) => {
        if (collection)
          SpicetifyLibrary.CollectionWrapper.addAlbumToCollection(collection, value);
        Spicetify.Platform.LibraryAPI.add({ uris: [value] });
      };
      Spicetify.PopupModal.display({
        title: "Add Album",
        content: /* @__PURE__ */ import_react19.default.createElement(text_input_dialog_default, {
          def: "",
          placeholder: "Album URI",
          onSave
        })
      });
    };
    return /* @__PURE__ */ import_react19.default.createElement(Menu, null, /* @__PURE__ */ import_react19.default.createElement(MenuItem2, {
      onClick: createCollection,
      leadingIcon: /* @__PURE__ */ import_react19.default.createElement(leading_icon_default, {
        path: SVGIcons["playlist-folder"]
      })
    }, "Create Collection"), /* @__PURE__ */ import_react19.default.createElement(MenuItem2, {
      onClick: addAlbum,
      leadingIcon: /* @__PURE__ */ import_react19.default.createElement(leading_icon_default, {
        path: SVGIcons["album"]
      })
    }, "Add Album"));
  };
  var AlbumsPage = ({ configWrapper, collection }) => {
    const [dropdown, sortOption] = useDropdownMenu_default(sortOptions, "library:albums");
    const [textFilter, setTextFilter] = import_react19.default.useState("");
    const { useInfiniteQuery } = Spicetify.ReactQuery;
    const limit = 200;
    const fetchRootlist = async ({ pageParam }) => {
      const collections = await SpicetifyLibrary.CollectionWrapper.getCollectionItems({
        collectionUri: collection,
        textFilter,
        sortOrder: sortOption.id,
        limit,
        offset: pageParam,
        rootlist: true
      });
      return collections;
    };
    const { data, status, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
      queryKey: ["library:albums", sortOption.id, textFilter, collection],
      queryFn: fetchRootlist,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        return lastPage.totalLength > lastPageParam + limit ? lastPageParam + limit : void 0;
      },
      structuralSharing: false
    });
    import_react19.default.useEffect(() => {
      const onUpdate = (e) => {
        refetch();
      };
      Spicetify.Platform.LibraryAPI.getEvents()._emitter.addListener("update", onUpdate);
      SpicetifyLibrary.CollectionWrapper.addEventListener("update", onUpdate);
      return () => {
        Spicetify.Platform.LibraryAPI.getEvents()._emitter.removeListener("update", onUpdate);
        SpicetifyLibrary.CollectionWrapper.removeEventListener("update", onUpdate);
      };
    }, []);
    const props = {
      title: data?.pages[0].openedCollection || "Albums",
      headerEls: [
        /* @__PURE__ */ import_react19.default.createElement(add_button_default, {
          Menu: /* @__PURE__ */ import_react19.default.createElement(AddMenu, {
            collection
          })
        }),
        dropdown,
        /* @__PURE__ */ import_react19.default.createElement(searchbar_default, {
          setSearch: setTextFilter,
          placeholder: "Albums"
        }),
        /* @__PURE__ */ import_react19.default.createElement(settings_button_default, {
          configWrapper
        })
      ]
    };
    if (status === "pending") {
      return /* @__PURE__ */ import_react19.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react19.default.createElement(status_default, {
        icon: "library",
        heading: "Loading",
        subheading: "Fetching your albums"
      }));
    } else if (status === "error") {
      return /* @__PURE__ */ import_react19.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react19.default.createElement(status_default, {
        icon: "error",
        heading: "Error",
        subheading: "Failed to load your albums"
      }));
    } else if (!data.pages[0].items.length) {
      return /* @__PURE__ */ import_react19.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react19.default.createElement(status_default, {
        icon: "library",
        heading: "Nothing Here",
        subheading: "You don't have any albums saved"
      }));
    }
    const rootlistItems = data.pages.map((page) => page.items).flat();
    const rootlistCards = rootlistItems.map((item) => {
      const isAlbum = item.type === "album";
      return /* @__PURE__ */ import_react19.default.createElement(spotify_card_default, {
        type: item.type,
        uri: item.uri,
        header: item.name,
        subheader: isAlbum ? item.artists?.[0]?.name : "Collection",
        imageUrl: isAlbum ? item.images?.[0]?.url : item.imgUrl,
        artistUri: isAlbum ? item.artists?.[0]?.uri : void 0
      });
    });
    if (hasNextPage)
      rootlistCards.push(/* @__PURE__ */ import_react19.default.createElement(load_more_card_default, {
        callback: fetchNextPage
      }));
    return /* @__PURE__ */ import_react19.default.createElement(page_container_default, {
      ...props
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: `main-gridContainer-gridContainer grid`
    }, rootlistCards));
  };
  var albums_default = AlbumsPage;

  // src/pages/artists.tsx
  var import_react20 = __toESM(require_react());
  var sortOptions2 = [
    { id: "0", name: "Name" },
    { id: "1", name: "Date Added" }
  ];
  var AddMenu2 = () => {
    const { MenuItem: MenuItem2, Menu } = Spicetify.ReactComponent;
    const { SVGIcons } = Spicetify;
    const addAlbum = () => {
      const onSave = (value) => {
        Spicetify.Platform.LibraryAPI.add({ uris: [value] });
      };
      Spicetify.PopupModal.display({
        title: "Add Artist",
        content: /* @__PURE__ */ import_react20.default.createElement(text_input_dialog_default, {
          def: "",
          placeholder: "Artist URI",
          onSave
        })
      });
    };
    return /* @__PURE__ */ import_react20.default.createElement(Menu, null, /* @__PURE__ */ import_react20.default.createElement(MenuItem2, {
      onClick: addAlbum,
      leadingIcon: /* @__PURE__ */ import_react20.default.createElement(leading_icon_default, {
        path: SVGIcons["artist"]
      })
    }, "Add Artist"));
  };
  var ArtistsPage = ({ configWrapper }) => {
    const [dropdown, sortOption] = useDropdownMenu_default(sortOptions2, "library:artists");
    const [textFilter, setTextFilter] = import_react20.default.useState("");
    const { useInfiniteQuery } = Spicetify.ReactQuery;
    const limit = 200;
    const fetchArtists = async ({ pageParam }) => {
      const res = await Spicetify.Platform.LibraryAPI.getContents({
        filters: ["1"],
        sortOrder: sortOption.id,
        textFilter,
        offset: pageParam,
        limit
      });
      return res;
    };
    const { data, status, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
      queryKey: ["library:artists", sortOption.id, textFilter],
      queryFn: fetchArtists,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        return lastPage.totalLength > lastPageParam + limit ? lastPageParam + limit : void 0;
      }
    });
    import_react20.default.useEffect(() => {
      const onUpdate = (e) => refetch();
      Spicetify.Platform.LibraryAPI.getEvents()._emitter.addListener("update", onUpdate);
      return () => Spicetify.Platform.LibraryAPI.getEvents()._emitter.removeListener("update", onUpdate);
    }, []);
    const props = {
      title: "Artists",
      headerEls: [
        /* @__PURE__ */ import_react20.default.createElement(add_button_default, {
          Menu: /* @__PURE__ */ import_react20.default.createElement(AddMenu2, null)
        }),
        dropdown,
        /* @__PURE__ */ import_react20.default.createElement(searchbar_default, {
          setSearch: setTextFilter,
          placeholder: "Artists"
        }),
        /* @__PURE__ */ import_react20.default.createElement(settings_button_default, {
          configWrapper
        })
      ]
    };
    if (status === "pending") {
      return /* @__PURE__ */ import_react20.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react20.default.createElement(status_default, {
        icon: "library",
        heading: "Loading",
        subheading: "Fetching your artists"
      }));
    } else if (status === "error") {
      return /* @__PURE__ */ import_react20.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react20.default.createElement(status_default, {
        icon: "error",
        heading: "Error",
        subheading: "Failed to load your artists"
      }));
    } else if (!data.pages[0].items.length) {
      return /* @__PURE__ */ import_react20.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react20.default.createElement(status_default, {
        icon: "library",
        heading: "Nothing Here",
        subheading: "You don't have any artists saved"
      }));
    }
    const artists = data.pages.map((page) => page.items).flat();
    const artistCards = artists.map((artist) => {
      return /* @__PURE__ */ import_react20.default.createElement(spotify_card_default, {
        type: "artist",
        uri: artist.uri,
        header: artist.name,
        subheader: "Artist",
        imageUrl: artist.images?.[0]?.url || ""
      });
    });
    if (hasNextPage)
      artistCards.push(/* @__PURE__ */ import_react20.default.createElement(load_more_card_default, {
        callback: fetchNextPage
      }));
    return /* @__PURE__ */ import_react20.default.createElement(page_container_default, {
      ...props
    }, /* @__PURE__ */ import_react20.default.createElement("div", {
      className: `main-gridContainer-gridContainer grid`
    }, artistCards));
  };
  var artists_default = ArtistsPage;

  // src/pages/shows.tsx
  var import_react21 = __toESM(require_react());
  var sortOptions3 = [
    { id: "0", name: "Name" },
    { id: "1", name: "Date Added" }
  ];
  var AddMenu3 = () => {
    const { MenuItem: MenuItem2, Menu } = Spicetify.ReactComponent;
    const { SVGIcons } = Spicetify;
    const addAlbum = () => {
      const onSave = (value) => {
        Spicetify.Platform.LibraryAPI.add({ uris: [value] });
      };
      Spicetify.PopupModal.display({
        title: "Add Show",
        content: /* @__PURE__ */ import_react21.default.createElement(text_input_dialog_default, {
          def: "",
          placeholder: "Show URI",
          onSave
        })
      });
    };
    return /* @__PURE__ */ import_react21.default.createElement(Menu, null, /* @__PURE__ */ import_react21.default.createElement(MenuItem2, {
      onClick: addAlbum,
      leadingIcon: /* @__PURE__ */ import_react21.default.createElement(leading_icon_default, {
        path: SVGIcons["podcasts"]
      })
    }, "Add Show"));
  };
  var ShowsPage = ({ configWrapper }) => {
    const [dropdown, sortOption] = useDropdownMenu_default(sortOptions3, "library:shows");
    const [textFilter, setTextFilter] = import_react21.default.useState("");
    const { useInfiniteQuery } = Spicetify.ReactQuery;
    const limit = 200;
    const fetchShows = async ({ pageParam }) => {
      const res = await Spicetify.Platform.LibraryAPI.getContents({
        filters: ["3"],
        sortOrder: sortOption.id,
        textFilter,
        offset: pageParam,
        limit
      });
      return res;
    };
    const { data, status, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
      queryKey: ["library:shows", sortOption.id, textFilter],
      queryFn: fetchShows,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        return lastPage.totalLength > lastPageParam + limit ? lastPageParam + limit : void 0;
      }
    });
    import_react21.default.useEffect(() => {
      const onUpdate = (e) => refetch();
      Spicetify.Platform.LibraryAPI.getEvents()._emitter.addListener("update", onUpdate);
      return () => Spicetify.Platform.LibraryAPI.getEvents()._emitter.removeListener("update", onUpdate);
    }, []);
    const props = {
      title: "Shows",
      headerEls: [
        /* @__PURE__ */ import_react21.default.createElement(add_button_default, {
          Menu: /* @__PURE__ */ import_react21.default.createElement(AddMenu3, null)
        }),
        dropdown,
        /* @__PURE__ */ import_react21.default.createElement(searchbar_default, {
          setSearch: setTextFilter,
          placeholder: "Shows"
        }),
        /* @__PURE__ */ import_react21.default.createElement(settings_button_default, {
          configWrapper
        })
      ]
    };
    if (status === "pending") {
      return /* @__PURE__ */ import_react21.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react21.default.createElement(status_default, {
        icon: "library",
        heading: "Loading",
        subheading: "Fetching your shows"
      }));
    } else if (status === "error") {
      return /* @__PURE__ */ import_react21.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react21.default.createElement(status_default, {
        icon: "error",
        heading: "Error",
        subheading: "Failed to load your shows"
      }));
    } else if (!data.pages[0].items.length) {
      return /* @__PURE__ */ import_react21.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react21.default.createElement(status_default, {
        icon: "library",
        heading: "Nothing Here",
        subheading: "You don't have any shows saved"
      }));
    }
    const shows = data.pages.map((page) => page.items).flat();
    const showCards = shows.map((show) => {
      return /* @__PURE__ */ import_react21.default.createElement(spotify_card_default, {
        type: "show",
        uri: show.uri,
        header: show.name,
        subheader: show.publisher,
        imageUrl: show.images?.[0]?.url || ""
      });
    });
    if (hasNextPage)
      showCards.push(/* @__PURE__ */ import_react21.default.createElement(load_more_card_default, {
        callback: fetchNextPage
      }));
    return /* @__PURE__ */ import_react21.default.createElement(page_container_default, {
      ...props
    }, /* @__PURE__ */ import_react21.default.createElement("div", {
      className: `main-gridContainer-gridContainer grid`
    }, showCards));
  };
  var shows_default = ShowsPage;

  // src/pages/playlists.tsx
  var import_react22 = __toESM(require_react());
  var dropdownOptions = [
    { id: "0", name: "Name" },
    { id: "1", name: "Date Added" },
    { id: "2", name: "Creator" },
    { id: "4", name: "Custom Order" },
    { id: "6", name: "Recents" }
  ];
  var filterOptions = [
    { id: "all", name: "All" },
    { id: "100", name: "Downloaded" },
    { id: "102", name: "By You" },
    { id: "103", name: "By Spotify" }
  ];
  var AddMenu4 = ({ folder }) => {
    const { MenuItem: MenuItem2, Menu } = Spicetify.ReactComponent;
    const { RootlistAPI } = Spicetify.Platform;
    const { SVGIcons } = Spicetify;
    const insertLocation = folder ? { uri: folder } : "start";
    const createFolder = () => {
      const onSave = (value) => {
        RootlistAPI.createFolder(value || "New Folder", { after: insertLocation });
      };
      Spicetify.PopupModal.display({
        title: "Create Folder",
        content: /* @__PURE__ */ import_react22.default.createElement(text_input_dialog_default, {
          def: "New Folder",
          placeholder: "Folder Name",
          onSave
        })
      });
    };
    const createPlaylist = () => {
      const onSave = (value) => {
        RootlistAPI.createPlaylist(value || "New Playlist", { after: insertLocation });
      };
      Spicetify.PopupModal.display({
        title: "Create Playlist",
        content: /* @__PURE__ */ import_react22.default.createElement(text_input_dialog_default, {
          def: "New Playlist",
          placeholder: "Playlist Name",
          onSave
        })
      });
    };
    return /* @__PURE__ */ import_react22.default.createElement(Menu, null, /* @__PURE__ */ import_react22.default.createElement(MenuItem2, {
      onClick: createFolder,
      leadingIcon: /* @__PURE__ */ import_react22.default.createElement(leading_icon_default, {
        path: SVGIcons["playlist-folder"]
      })
    }, "Create Folder"), /* @__PURE__ */ import_react22.default.createElement(MenuItem2, {
      onClick: createPlaylist,
      leadingIcon: /* @__PURE__ */ import_react22.default.createElement(leading_icon_default, {
        path: SVGIcons["playlist"]
      })
    }, "Create Playlist"));
  };
  var PlaylistsPage = ({ folder, configWrapper }) => {
    const [sortDropdown, sortOption] = useDropdownMenu_default(dropdownOptions, "library:playlists-sort");
    const [filterDropdown, filterOption, setFilterOption, setAvailableOptions] = useDropdownMenu_default(filterOptions);
    const [textFilter, setTextFilter] = import_react22.default.useState("");
    const [images, setImages] = import_react22.default.useState({ ...SpicetifyLibrary.FolderImageWrapper.getFolderImages() });
    const { useInfiniteQuery } = Spicetify.ReactQuery;
    const limit = 200;
    const fetchRootlist = async ({ pageParam }) => {
      const filters = filterOption.id === "all" ? ["2"] : ["2", filterOption.id];
      const res = await Spicetify.Platform.LibraryAPI.getContents({
        filters,
        sortOrder: sortOption.id,
        folderUri: folder,
        textFilter,
        offset: pageParam,
        limit
      });
      return res;
    };
    const { data, status, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
      queryKey: ["library:playlists", sortOption.id, filterOption.id, textFilter, folder],
      queryFn: fetchRootlist,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        return lastPage.totalLength > lastPageParam + limit ? lastPageParam + limit : void 0;
      }
    });
    import_react22.default.useEffect(() => {
      const onUpdate = (e) => refetch();
      const onImageUpdate = (e) => setImages({ ...e.detail });
      Spicetify.Platform.RootlistAPI.getEvents().addListener("update", onUpdate);
      SpicetifyLibrary.FolderImageWrapper.addEventListener("update", onImageUpdate);
      return () => {
        Spicetify.Platform.RootlistAPI.getEvents().removeListener("update", onUpdate);
        SpicetifyLibrary.FolderImageWrapper.removeEventListener("update", onImageUpdate);
      };
    }, []);
    const props = {
      title: data?.pages[0].openedFolderName || "Playlists",
      headerEls: [
        /* @__PURE__ */ import_react22.default.createElement(add_button_default, {
          Menu: /* @__PURE__ */ import_react22.default.createElement(AddMenu4, {
            folder
          })
        }),
        sortDropdown,
        filterDropdown,
        /* @__PURE__ */ import_react22.default.createElement(searchbar_default, {
          setSearch: setTextFilter,
          placeholder: "Playlists"
        }),
        /* @__PURE__ */ import_react22.default.createElement(settings_button_default, {
          configWrapper
        })
      ]
    };
    if (status === "pending") {
      return /* @__PURE__ */ import_react22.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react22.default.createElement(status_default, {
        icon: "library",
        heading: "Loading",
        subheading: "Fetching your playlists"
      }));
    } else if (status === "error") {
      return /* @__PURE__ */ import_react22.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react22.default.createElement(status_default, {
        icon: "error",
        heading: "Error",
        subheading: "Failed to load your playlists"
      }));
    } else if (!data.pages[0].items.length) {
      return /* @__PURE__ */ import_react22.default.createElement(page_container_default, {
        ...props
      }, /* @__PURE__ */ import_react22.default.createElement(status_default, {
        icon: "library",
        heading: "Nothing Here",
        subheading: "You don't have any playlists saved"
      }));
    }
    const rootlistItems = data.pages.map((page) => page.items).flat();
    const rootlistCards = rootlistItems.map((playlist) => {
      return /* @__PURE__ */ import_react22.default.createElement(spotify_card_default, {
        type: playlist.type,
        uri: playlist.uri,
        header: playlist.name,
        subheader: playlist.owner?.name || "Folder",
        imageUrl: playlist.images?.[0]?.url || images[playlist.uri] || ""
      });
    });
    if (hasNextPage)
      rootlistCards.push(/* @__PURE__ */ import_react22.default.createElement(load_more_card_default, {
        callback: fetchNextPage
      }));
    return /* @__PURE__ */ import_react22.default.createElement(page_container_default, {
      ...props
    }, /* @__PURE__ */ import_react22.default.createElement("div", {
      className: `main-gridContainer-gridContainer grid`
    }, rootlistCards));
  };
  var playlists_default = PlaylistsPage;

  // package.json
  var version = "0.1.1";

  // src/app.tsx
  var tabPages = ["Playlists", "Albums", "Artists", "Shows"];
  var checkForUpdates = (setNewUpdate) => {
    fetch("https://api.github.com/repos/harbassan/spicetify-apps/releases").then((res) => res.json()).then(
      (result) => {
        const releases = result.filter((release) => release.name.startsWith("library"));
        setNewUpdate(releases[0].name.slice(9) !== version);
      },
      (error) => {
        console.log("Failed to check for updates", error);
      }
    );
  };
  var NavbarContainer = ({ configWrapper }) => {
    const pages = {
      ["Artists"]: /* @__PURE__ */ import_react23.default.createElement(artists_default, {
        configWrapper
      }),
      ["Albums"]: /* @__PURE__ */ import_react23.default.createElement(albums_default, {
        configWrapper
      }),
      ["Shows"]: /* @__PURE__ */ import_react23.default.createElement(shows_default, {
        configWrapper
      }),
      ["Playlists"]: /* @__PURE__ */ import_react23.default.createElement(playlists_default, {
        configWrapper
      })
    };
    const [navBar, activeLink, setActiveLink] = useNavigationBar_default(tabPages);
    const [firstUpdate, setFirstUpdate] = import_react23.default.useState(true);
    const [newUpdate, setNewUpdate] = import_react23.default.useState(false);
    import_react23.default.useEffect(() => {
      setActiveLink(Spicetify.LocalStorage.get("library:active-link") || "Playlists");
      checkForUpdates(setNewUpdate);
      setFirstUpdate(false);
    }, []);
    import_react23.default.useEffect(() => {
      Spicetify.LocalStorage.set("library:active-link", activeLink);
    }, [activeLink]);
    if (firstUpdate)
      return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null);
    return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, navBar, newUpdate && /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "new-update"
    }, "New app update available! Visit", " ", /* @__PURE__ */ import_react23.default.createElement("a", {
      href: "https://github.com/harbassan/spicetify-apps/releases"
    }, "harbassan/spicetify-apps"), " to install."), pages[activeLink]);
  };
  var App = () => {
    const [config, setConfig] = import_react23.default.useState({ ...SpicetifyLibrary.ConfigWrapper.Config });
    const launchModal = () => {
      SpicetifyLibrary.ConfigWrapper.launchModal(setConfig);
    };
    const configWrapper = {
      config,
      launchModal
    };
    const { pathname } = Spicetify.Platform.History.location;
    const route = pathname.slice(8);
    if (/^\/folder\/.+/.test(route)) {
      return /* @__PURE__ */ import_react23.default.createElement("div", {
        id: "library-app"
      }, /* @__PURE__ */ import_react23.default.createElement(playlists_default, {
        folder: route.split("/").pop(),
        configWrapper
      }));
    }
    if (/^\/collection\/.+/.test(route)) {
      return /* @__PURE__ */ import_react23.default.createElement("div", {
        id: "library-app"
      }, /* @__PURE__ */ import_react23.default.createElement(albums_default, {
        collection: route.split("/").pop(),
        configWrapper
      }));
    }
    return /* @__PURE__ */ import_react23.default.createElement("div", {
      id: "library-app"
    }, /* @__PURE__ */ import_react23.default.createElement(NavbarContainer, {
      configWrapper
    }));
  };
  var app_default = App;

  // ../../../AppData/Local/Temp/spicetify-creator/index.jsx
  var import_react24 = __toESM(require_react());
  function render() {
    return /* @__PURE__ */ import_react24.default.createElement(app_default, null);
  }
  return __toCommonJS(spicetify_creator_exports);
})();
const render=()=>library.default();
