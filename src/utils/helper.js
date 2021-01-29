export function loadScript (url, callback) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

export function loadScriptSync (url) {
  return new Promise((resolve, reject) => {
    try {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      if (script.readyState) {
        script.onreadystatechange = function () {
          if (script.readyState == 'loaded' || script.readyState == 'complete') {
            script.onreadystatechange = null;
            resolve(1);
          }
        };
      } else {
        script.onload = function () {
          resolve(1);
        };
      }
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    } catch (e) {
      reject(e);
    }
  });
}
