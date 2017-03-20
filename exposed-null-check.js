const exposedNullRE = /undefined|NaN|\[object Object\]/;

const defaultConfig = {
  DEBUG: false,
  exposedNullRE: exposedNullRE
};

function installNullChecker(Raven, config) {
  config = Object.assign({}, defaultConfig, config);

  function reportNull(text, path) {
    Raven.context(
      {
        extra: {
          path: path
        }
      },
      function() {
        Raven.captureMessage("Exposed Null: " + text);
      }
    );
  }

  function handleText(textNode) {
    var newText = textNode.nodeValue;

    if (newText.match(exposedNullRE)) {
      if (config.DEBUG) console.log("scanned: ", newText);
      reportNull(newText);
    }
  }
  function walk(node) {
    // I stole this function from cloud 2 butt:
    // http://is.gd/mwZp7E
    var child, next;

    switch (node.nodeType) {
      case 1: // Element
      case 9: // Document
      case 11: // Document fragment
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case 3: // Text node
        handleText(node);
        break;
    }
  }

  function observeSignal(signal) {
    document.addEventListener(
      signal,
      function(e) {
        const newText = e.target.textContent || e.target.innerText;
        if (config.DEBUG) console.log(signal + ": ", e);
        if (newText.match(exposedNullRE)) {
          reportNull(newText, e.path);
        }
      },
      false
    );
  }

  observeSignal("DOMSubtreeModified");
  observeSignal("DOMNodeInserted");
  //do initial scan
  setTimeout(() => walk(document.body), 1000);
}

module.exports = installNullChecker;
