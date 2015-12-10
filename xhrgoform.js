// Filename: xhrgoform.js  
// Timestamp: 2015.05.27-13:59:39 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: xhrgo.js, formurlencoded.js, optfn.js

var xhrgo = require('xhrgo'),
    optfn = require('optfn'),
    formurlencoded = require('form-urlencoded');

var xhrgoform = module.exports = (function (xhrgoform) {

  xhrgoform = Object.create(xhrgo);

  xhrgoform.formEncoded = function (type, path, data, token, fn, resWaitTime) {
    var xhr = xhrgo.newRequest(), finData,
        timeout = resWaitTime || 30000, 
        timer;
        
    fn = optfn(fn);

    if (type.match(/GET|DELETE/) && data) {
      path += '?' + formurlencoded.encode(data);
    }

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

      clearTimeout(timer);
      if (xhr.responseText) {
        try {
          res = JSON.parse(xhr.responseText);
        } catch(e) {
          res = xhr.responseText;
        }
      }

      fn(xhr.status === 200 ? null : xhr, res);
    });

    xhr.send(finData);      

    timer = setTimeout(function () {
      // should .... 
      xhr.abort(); fn(xhr);
    }, timeout);
  };

  return xhrgoform;

}());
