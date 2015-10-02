xhrgoform
=========
**(c)[Bumblehead][0], 2013-2015** [MIT-license](#license)

Sends POST/PUT requests with x-www-form-urlencoded data, using [xhrgo][5] and [form-urlencoded][3]. It inherits [xhrgo][6] fully but includes the additional method "formEncoded".

 * **xhrgoform.formEncoded( _type_, _url_, _data_, _token_, _fn_, _expirems_ )**
 
   Data is sent and received in `x-www-form-urlencoded` format but is passed to and returned from the method in the form of an object
 
   ```javascript
   xhrgoform.formEncoded('POST', '/hi', {hi:'b'}, null, function (err, res) {
     if (err) return fn(new Error(err));
     fn(null, res);
   }, 1000);
   ```

[2]: http://github.com/iambumblehead/url-formencoded     "formencoded"
[0]: http://www.bumblehead.com                            "bumblehead"
[5]: https://github.com/iambumblehead/xhrgo
[6]: https://github.com/iambumblehead/xhrgo#usage
[3]: https://npmjs.org/package/form-urlencoded    "www-urlformencoded"

------------------------------------------------------------------------------
#### <a id="license">license

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013-2015 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
