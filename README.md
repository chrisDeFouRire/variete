Variété
==========

This NPM module will help you when you need to vary your copy randomly.

## Duplicate descriptions? A thing of the past

Say you'd like to output a `description meta`, here's how to do it:

```
npm install variete
```

```JavaScript
var variete = require("variete");
var description = variete.parse('This {amazing|extraordinary|nice} module {will help me|already helps me} when I {need|have to} vary my copy.');
```

Now `description` contains a random string with the alternatives you've specified.

