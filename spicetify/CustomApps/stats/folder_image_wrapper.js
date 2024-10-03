(async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          "use strict";
var library = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/extensions/folder_image_wrapper.ts
  var folder_image_wrapper_exports = {};
  __export(folder_image_wrapper_exports, {
    default: () => folder_image_wrapper_default
  });
  var FolderImageWrapper = class extends EventTarget {
    _folderImages;
    constructor() {
      super();
      this._folderImages = JSON.parse(localStorage.getItem("library:folderImages") || "{}");
    }
    getFolderImage(uri) {
      return this._folderImages[uri];
    }
    getFolderImages() {
      return this._folderImages;
    }
    setFolderImage({ uri, url }) {
      this._folderImages[uri] = url;
      this.saveFolderImages();
      Spicetify.showNotification("Folder image updated");
    }
    removeFolderImage(uri) {
      delete this._folderImages[uri];
      this.saveFolderImages();
      Spicetify.showNotification("Folder image removed");
    }
    saveFolderImages() {
      this.dispatchEvent(new CustomEvent("update", { detail: this._folderImages }));
      localStorage.setItem("library:folderImages", JSON.stringify(this._folderImages));
    }
  };
  var folder_image_wrapper_default = FolderImageWrapper;
  return __toCommonJS(folder_image_wrapper_exports);
})();

        })();