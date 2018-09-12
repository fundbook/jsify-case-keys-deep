# jsify-keys-deep

> Deeply converts object keys to match js naming conventions

___Original source code: <https://github.com/rxaviers/camelcase-keys-deep>___

## Install

```
$ npm install --save jsify-keys-deep
```

## Usage

```js
const jsifyKeysDeep = require('jsify-keys-deep');

jsifyKeysDeep({
  unicorn_rainbow: {
    foo_bar: 1,
    'flying?': true
  }
});
//=> {unicornRainbow: {fooBar: 1, isFlying: true}}
```

## License

MIT © [Fundbook](https://fundbook.co.jp/)
