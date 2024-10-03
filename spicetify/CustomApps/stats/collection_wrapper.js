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

  // src/extensions/collection_wrapper.tsx
  var collection_wrapper_exports = {};
  __export(collection_wrapper_exports, {
    default: () => collection_wrapper_default
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // src/extensions/collection_wrapper.tsx
  var CollectionWrapper = class {
    constructor() {
      this.getCollections = () => {
        return this._collections;
      };
      this.createCollection = (name) => {
        const collection = {
          id: v4_default(),
          name,
          items: []
        };
        this._collections.push(collection);
        this.saveCollections();
        Spicetify.showNotification("Collection Created");
        return collection;
      };
      this.deleteCollection = (collectionID) => {
        this._collections = this._collections.filter((collection) => collection.id !== collectionID);
        this.saveCollections();
        Spicetify.showNotification("Collection Deleted");
      };
      this.getCollection = (collectionID) => {
        return this._collections.find((collection) => collection.id === collectionID);
      };
      this.renameCollection = (collectionID, name) => {
        const collection = this.getCollection(collectionID);
        if (!collection)
          throw new Error("Collection is not defined");
        collection.name = name;
        this.saveCollections();
        Spicetify.showNotification("Collection Renamed");
      };
      this.addToCollection = (collectionID, albumURI) => {
        const collection = this.getCollection(collectionID);
        if (!collection)
          throw new Error("Collection is not defined");
        Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
          uri: albumURI,
          locale: "en",
          offset: 0,
          limit: 1
        }).then((res) => {
          var _a, _b, _c, _d, _e, _f, _g;
          const data = res.data.albumUnion;
          const albumItem = {
            uri: data.uri,
            name: data.name,
            artist: (_d = (_c = (_b = (_a = data.artists) == null ? void 0 : _a.items) == null ? void 0 : _b[0]) == null ? void 0 : _c.profile) == null ? void 0 : _d.name,
            image: ((_g = (_f = (_e = data.coverArt) == null ? void 0 : _e.sources) == null ? void 0 : _f[0]) == null ? void 0 : _g.url) || ""
          };
          collection.items.push(albumItem);
          this.saveCollections();
        });
        Spicetify.showNotification("Item Added to Collection");
      };
      this.removeFromCollection = (collectionID, albumURI) => {
        const collection = this.getCollection(collectionID);
        if (!collection)
          throw new Error("Collection is not defined");
        collection.items = collection.items.filter((album) => album.uri !== albumURI);
        this.saveCollections();
        Spicetify.showNotification("Item Removed from Collection");
      };
      this.getCollectionForItem = (albumURI) => {
        return this._collections.filter((collection) => collection.items.some((item) => item.uri === albumURI));
      };
      this.saveCollections = () => {
        localStorage.setItem("library:collections", JSON.stringify(this._collections));
      };
      this._collections = JSON.parse(localStorage.getItem("library:collections") || "[]");
    }
  };
  var collection_wrapper_default = CollectionWrapper;
  return __toCommonJS(collection_wrapper_exports);
})();

        })();