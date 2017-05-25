# my-plugin

[![Build Status](https://travis-ci.org/ilyavf/my-plugin.png?branch=master)](https://travis-ci.org/ilyavf/my-plugin)

My plugin description

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'my-plugin';
```

### CommonJS use

Use `require` to load `my-plugin` and everything else
needed to create a template that uses `my-plugin`:

```js
var plugin = require("my-plugin");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/my-plugin/dist/global/my-plugin.js'></script>
```
