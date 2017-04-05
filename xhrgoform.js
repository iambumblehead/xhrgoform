// Filename: xhrgoform.js  
// Timestamp: 2017.04.05-11:00:10 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: xhrgo.js, formurlencoded.js, optfn.js

var xhrgo = require('xhrgo'),
    optfn = require('optfn'),
    formurlencoded = require('form-urlencoded');

var xhrgoform = module.exports = (xhrgoform => {

  xhrgoform = Object.create(xhrgo);

  xhrgoform.formEncoded = (type, path, data, token, fn, resWaitTime) => {
    var xhr = xhrgo.newRequest(), finData,
        timeout = resWaitTime || 30000, 
        timer;
        
    fn = optfn(fn);

    if (type.match(/GET|DELETE/) && data) {
      path += '?' + formurlencoded(data);
    }

    xhr.open(type, path, true);

    if (token) {
      xhr.setRequestHeader("Authorization", token);
    }

    if (type.match(/PUT|POST/)) {
      finData = formurlencoded(data);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json, text/javascript");
    }

    xhr.onreadystatechange = xhrgo.constructReadyState(xhr, (xhr) => {
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

    timer = setTimeout(() => {
      xhr.abort(); fn(xhr);
    }, timeout);
  };

  return xhrgoform;

})({});
