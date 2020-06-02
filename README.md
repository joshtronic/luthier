# luthier

**noun** (*lu·thi·er*)

> one who makes stringed musical instruments (such as violins or guitars)

`luthier` handles all of your `string` needs. 🎸

[![License](https://img.shields.io/npm/l/luthier?style=for-the-badge)](https://github.com/joshtronic/luthier/blob/master/LICENSE)
![Node Version](https://img.shields.io/node/v/luthier?style=for-the-badge)
[![Test Status](https://img.shields.io/github/workflow/status/joshtronic/luthier/Test?style=for-the-badge)](https://github.com/joshtronic/luthier/actions)
[![Code Coverage](https://img.shields.io/codecov/c/github/joshtronic/luthier?style=for-the-badge)](https://codecov.io/gh/joshtronic/luthier)

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
* [`containsLetters`](#containsLetters)
* [`containsLowerCasedLetters`](#containsLowerCasedLetters)
* [`containsNumbers`](#containsNumbers)
* [`containsOnlyLetters`](#containsOnlyLetters)
* [`containsOnlyLowerCasedLetters`](#containsOnlyLowerCasedLetters)
* [`containsOnlyNumbers`](#containsOnlyNumbers)
* [`containsOnlySpecialCharacters`](#containsOnlySpecialCharacters)
* [`containsOnlyUpperCasedLetters`](#containsOnlyUpperCasedLetters)
* [`containsSpecialCharacters`](#containsSpecialCharacters)
* [`containsUpperCasedLetters`](#containsUpperCasedLetters)
* [`countLines`](#countLines)
* [`countWords`](#countWords)
* [`customCase`](#customCase)
* [`dotCase`](#dotCase)
* [`flip`](#flip)
* [`initials`](#initials)
* [`isCamelCased`](#isCamelCased)
* [`isCapitalized`](#isCapitalized)
* [`isConstantCased`](#isConstantCased)
* [`isDotCased`](#isDotCased)
* [`isKebabCased`](#isKebabCased)
* [`isLowerCased`](#isLowerCased)
* [`isPascalCased`](#isPascalCased)
* [`isSnakeCased`](#isSnakeCased)
* [`isStartCased`](#isStartCased)
* [`isStudlyCapped`](#isStudlyCapped)
* [`isUpperCased`](#isUpperCased)
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

#### `containsLetters`

```javascript
luthier.containsLetters('your string');
// true
```

#### `containsLowerCasedLetters`

```javascript
luthier.containsLowerCasedLetters('your string');
// true
```

#### `containsNumbers`

```javascript
luthier.containsNumbers('your string');
// false
```

#### `containsOnlyLetters`

```javascript
luthier.containsLetters('your string');
// false
```

#### `containsOnlyLowerCasedLetters`

```javascript
luthier.containsOnlyLowerCasedLetters('your string');
// false
```

#### `containsOnlyNumbers`

```javascript
luthier.containsOnlyNumbers('your string');
// false
```

#### `containsOnlySpecialCharacters`

```javascript
luthier.containsOnlySpecialCharacters('your string');
// false
```

#### `containsOnlyUpperCasedLetters`

```javascript
luthier.containsOnlyUpperCasedLetters('your string');
// false
```

#### `containsSpecialCharacters`

```javascript
luthier.containsSpecialCharacters('your string');
// true
```

#### `containsUpperCasedLetters`

```javascript
luthier.containsUpperCasedLetters('your string');
// false
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

#### `customCase`

```javascript
luthier.customCase('+', 'your string');
// 'your+string'
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

#### `isCamelCased`

```javascript
luthier.isCamelCased('your string');
// false
```

#### `isCapitalized`

```javascript
luthier.isCapitalized('your string');
// false
```

#### `isConstantCased`

```javascript
luthier.isConstantCased('your string');
// false
```

#### `isDotCased`

```javascript
luthier.isDotCased('your string');
// false
```

#### `isKebabCased`

```javascript
luthier.isKebabCased('your string');
// false
```

#### `isLowerCased`

```javascript
luthier.isKebabCased('your string');
// true
```

#### `isPascalCased`

```javascript
luthier.isPascalCased('your string');
// false
```

#### `isSnakeCased`

```javascript
luthier.isSnakeCased('your string');
// false
```

#### `isStartCased`

```javascript
luthier.isStartCased('your string');
// false
```

#### `isStudlyCapped`

```javascript
luthier.isStudlyCapped('your string');
// false
```

#### `isUpperCased`

```javascript
luthier.isUpperCased('your string');
// false
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
luthier.reverse('your string');
// 'gnirts ruoy'
```

#### `rot13`

```javascript
luthier.rot13('your string');
// 'lbhe fgevat'
```

#### `shuffle`

```javascript
luthier.shuffle('your string');
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
