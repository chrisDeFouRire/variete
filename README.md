Variété.js
==========

This NPM module (no dependencies!) will help you when you need to vary your copy randomly (think SEO).

## Duplicate descriptions? A thing of the past

Say you'd like to output a `description meta`, here's how to do it:

```
npm install variete
```

```JavaScript
var variete = require("variete");
var description = variete.parse('This {amazing|extraordinary|nice} module {will help me|already helps me} when I {need|have to} vary my copy.');
```

Now `description` contains a random string (among 3*2*2=12 variations) with the alternatives you've specified.

Note that you can't nest multiple alternatives.

It would be nice if we could seed the random number generator, so that result could depend on an page Id for instance...

This module is using a parser generated online at http://pegjs.majda.cz/online (nice!).