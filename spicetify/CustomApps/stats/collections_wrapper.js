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

  // src/extensions/collections_wrapper.ts
  var collections_wrapper_exports = {};
  __export(collections_wrapper_exports, {
    default: () => collections_wrapper_default
  });

  // ../node_modules/uuid/dist/esm-browser/rng.js
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

  // ../node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }

  // ../node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // ../node_modules/uuid/dist/esm-browser/v4.js
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

  // src/extensions/collections_wrapper.ts
  var CollectionWrapper = class extends EventTarget {
    _collections;
    constructor() {
      super();
      this._collections = JSON.parse(localStorage.getItem("library:collections") || "[]");
    }
    saveCollections() {
      localStorage.setItem("library:collections", JSON.stringify(this._collections));
      this.dispatchEvent(new CustomEvent("update", { detail: this._collections }));
    }
    getCollection(uri) {
      return this._collections.find((collection) => collection.uri === uri);
    }
    async requestAlbums({ sortOrder, textFilter }) {
      const albums = await Spicetify.Platform.LibraryAPI.getContents({
        filters: ["0"],
        sortOrder,
        textFilter,
        offset: 0,
        limit: 9999
      });
      return albums;
    }
    async getCollectionItems(props) {
      const { collectionUri, textFilter, sortOrder, rootlist, limit = 9999, offset = 0 } = props;
      let collectionItems = this._collections;
      let albumItems = [];
      let unfilteredLength = this._collections.length;
      let openedCollection = "";
      if (collectionUri) {
        const collection = this.getCollection(collectionUri);
        const res = await this.requestAlbums({ sortOrder, textFilter });
        const collectionSet = new Set(collection.items);
        const commonElements = res.items.filter((item) => collectionSet.has(item.uri));
        const collections = this._collections.filter((collection2) => collection2.parentCollection === collectionUri);
        openedCollection = collection.name;
        collectionItems = collections;
        albumItems = commonElements;
        unfilteredLength = collection.totalLength;
      }
      if (textFilter) {
        let regex = new RegExp("\\b" + textFilter, "i");
        collectionItems = collectionItems.filter((item) => {
          return regex.test(item.name);
        });
      }
      if (rootlist && !collectionUri) {
        const res = await this.requestAlbums({ sortOrder, textFilter });
        albumItems = res.items;
        if (!textFilter) {
          const collectionSet = new Set(this._collections.map((collection) => collection.items).flat());
          const uncommonElements = res.items.filter((item) => !collectionSet.has(item.uri));
          collectionItems = this._collections.filter((collection) => !collection.parentCollection);
          albumItems = uncommonElements;
          unfilteredLength = this._collections.length + uncommonElements.length;
        }
      }
      if (offset > 0)
        collectionItems = [];
      return {
        openedCollection,
        items: [...collectionItems, ...albumItems.slice(offset, offset + limit)],
        totalLength: albumItems.length + collectionItems.length,
        unfilteredLength
      };
    }
    createCollection(name, parentCollection = "") {
      const uri = v4_default();
      const collection = {
        type: "collection",
        uri,
        name,
        items: [],
        totalLength: 0,
        imgUrl: "",
        parentCollection
      };
      this._collections.push(collection);
      this.saveCollections();
      Spicetify.showNotification("Collection created");
    }
    deleteCollection(uri) {
      this._collections = this._collections.filter((collection) => collection.uri !== uri);
      this.saveCollections();
      Spicetify.showNotification("Collection deleted");
    }
    async addAlbumToCollection(collectionUri, albumUri) {
      const collection = this.getCollection(collectionUri);
      if (!collection)
        return;
      collection.items.push(albumUri);
      collection.totalLength++;
      this.saveCollections();
      Spicetify.showNotification("Album added to collection");
    }
    removeAlbumFromCollection(collectionUri, albumUri) {
      const collection = this.getCollection(collectionUri);
      if (!collection)
        return;
      collection.items = collection.items.filter((item) => item !== albumUri);
      collection.totalLength--;
      this.saveCollections();
      Spicetify.showNotification("Album removed from collection");
    }
    getCollectionsWithAlbum(albumUri) {
      return this._collections.filter((collection) => {
        return collection.items.some((item) => item === albumUri);
      });
    }
    renameCollection(uri, newName) {
      const collection = this.getCollection(uri);
      if (!collection)
        return;
      collection.name = newName;
      this.saveCollections();
      Spicetify.showNotification("Collection renamed");
    }
    setCollectionImage(uri, imgUrl) {
      const collection = this.getCollection(uri);
      if (!collection)
        return;
      collection.imgUrl = imgUrl;
      this.saveCollections();
      Spicetify.showNotification("Collection image set");
    }
    removeCollectionImage(uri) {
      const collection = this.getCollection(uri);
      if (!collection)
        return;
      collection.imgUrl = "";
      this.saveCollections();
      Spicetify.showNotification("Collection image removed");
    }
  };
  var collections_wrapper_default = CollectionWrapper;
  return __toCommonJS(collections_wrapper_exports);
})();

        })();