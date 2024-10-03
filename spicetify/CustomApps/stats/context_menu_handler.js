(async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          "use strict";
var library = (() => {
  // src/extensions/context_menu_handler.tsx
  var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        const node = mutation.addedNodes[0];
        console.log(node);
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: false });
})();

        })();