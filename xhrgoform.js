// Filename: xhrgoform.js  
// Timestamp: 2013.11.22-02:01:43 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: xhrgo.js, formurlencoded.js

var xhrgo = require('xhrgo'),
    formurlencoded = require('form-urlencoded');

var xhrgoform = ((typeof module === 'object') ? module : {}).exports = (function (xhrgoform) {

  xhrgoform = Object.create(xhrgo);

  xhrgoform.formEncoded = function (type, path, data, token, fn, resWaitTime) {
    var xhr = xhrgo.newRequest(), finData,
        timeout = resWaitTime || 30000, 
        timer,
        doneFn = function (err, res) { if (typeof fn === 'function') fn(err, res); };

    xhr.open(type, path, true);

    if (token) {
      xhr.setRequestHeader("Authorization", token);
    }

    if (type.match(/PUT|POST/)) {
      finData = formurlencoded.encode(data);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json, text/javascript");
    }

    xhr.onreadystatechange = xhrgo.constructReadyState(xhr, function (xhr) {
      var res = 'success';
      if (xhr.responseText) {
        try {
          res = JSON.parse(xhr.responseText);
        } catch(e) {
          res = xhr.responseText;
        }
      }

      doneFn((xhr.status === 200) ? null : xhr, res);
    });

    xhr.send(finData);      

    timer = setTimeout(function () {
      xhr.abort(); doneFn(xhr);
    }, timeout);
  };

  return xhrgoform;

}());
