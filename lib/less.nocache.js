// https://gist.github.com/attaboy/1346280
function destroyLessCache(pathToCss) { // e.g. '/css/' or '/stylesheets/'
  if (!window.localStorage) {
    return;
  }

  var keyPrefix = window.location.href;
  var lastSlashPos = keyPrefix.lastIndexOf('/');
  if (lastSlashPos >= 0) {
    keyPrefix = keyPrefix.substring(0, lastSlashPos);
  }

  keyPrefix += pathToCss;

  for (var key in window.localStorage) {
    if (key.indexOf(keyPrefix) === 0) {
      delete window.localStorage[key];
    }
  }
}

destroyLessCache('/styles/');

