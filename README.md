# luthier

**noun** (*lu·thi·er*)

> one who makes stringed musical instruments (such as violins or guitars)

`luthier` handles all of your `string` needs. 🎸

[![License](https://img.shields.io/npm/l/luthier?style=for-the-badge)](https://github.com/joshtronic/luthier/blob/master/LICENSE)
![Node Version](https://img.shields.io/node/v/luthier?style=for-the-badge)
![Build Status](https://img.shields.io/travis/joshtronic/luthier/master?style=for-the-badge)
[![Coverage Status](https://img.shields.io/coveralls/github/joshtronic/luthier/master?style=for-the-badge)](https://coveralls.io/github/joshtronic/luthier?branch=master)

## Installation

```shell
npm install luthier --save
# or
yarn add luthier
```

## Usage

```javascript
import { luthier } from 'luthier';
```

### Functions

* [`camelCase`](#camelCase)
* [`constantCase`](#constantCase)
* [`countLines`](#countLines)
* [`countWords`](#countWords)
* [`dotCase`](#dotCase)
* [`flip`](#flip)
* [`initials`](#initial)
* [`kebabCase`](#kebabCase)
* [`lowerCaseFirst`](#lowerCaseFirst)
* [`lowerCaseWords`](#lowerCaseWords)
* [`numeronym`](#numeronym)
* [`pascalCase`](#pascalCase)
* [`random`](#random)
* [`reverse`](#reverse)
* [`rot13`](#rot13)
* [`shuffle`](#shuffle)
* [`snakeCase`](#snakeCase)
* [`startCase`](#startCase)
* [`stripTags`](#stripTags)
* [`studlyCaps`](#studlyCaps)
* [`upperCaseFirst`](#upperCaseFirst)
* [`upperCaseWords`](#upperCaseWords)

#### `camelCase`

```javascript
luthier.camelCase('your string');
// 'yourString'
```

#### `constantCase`

```javascript
luthier.constantCase('your string');
// 'YOUR_STRING'
```

#### `countLines`

```javascript
luthier.countLines('your\nstring');
// 2
```

#### `countWords`

```javascript
luthier.countWords('your string');
// 2
```

#### `dotCase`

```javascript
luthier.dotCase('your string');
// 'your.string'
```

#### `flip`

```javascript
luthier.flip('your string');
// 'ɓuᴉɹʇs ɹnoʎ'
```

#### `initials`

```javascript
luthier.initials('your string');
// 'YG'
```

#### `kebabCase`

```javascript
luthier.kebabCase('your string');
// 'your-string'
```

#### `lowerCaseFirst`

```javascript
luthier.lowerCaseFirst('Your string');
// 'your string'
```

#### `lowerCaseWords`

```javascript
luthier.lowerCaseWords('Your String');
// 'your string'
```

#### `numeronym`

```javascript
luthier.numeronym('your string');
// 'y8g'
```

#### `pascalCase`

```javascript
luthier.pascalCase('your string');
// 'YourString'
```

#### `random`

```javascript
luthier.random(10);
// 'psifnwkflr'
```

#### `reverse`

```javascript
luthier.pascalCase('your string');
// 'gnirts ruoy'
```

#### `rot13`

```javascript
luthier.pascalCase('your string');
// 'lbhe fgevat'
```

#### `shuffle`

```javascript
luthier.pascalCase('your string');
// 'nru grsioty'
```

#### `snakeCase`

```javascript
luthier.snakeCase('your string');
// 'your_string'
```

#### `startCase`

```javascript
luthier.startCase('your string');
// 'Your String'
```

#### `stripTags`

```javascript
luthier.stripTags('<em>your string</em>');
// 'your string'
```

#### `studlyCaps`

```javascript
luthier.studlyCaps('your string');
// 'YoUr StRiNg'
```

#### `upperCaseFirst`

```javascript
luthier.upperCaseFirst('your string');
// 'Your string'
```

#### `upperCaseWords`

```javascript
luthier.upperCaseWords('your string');
// 'Your String'
```

Unlike `startCase`, the `upperCaseWords` method does not apply
`String.prototype.toLowerCase()` first.

## License

MIT
