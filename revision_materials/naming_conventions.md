### Naming Conventions

* All variables names should start with a lowercase letter.

* When the variable contains two or more words, the variable should start with a lowercase letter and use a upper case letter of each new word in the variable. These words should not be seperated with a space or underscore. This style is called `camelCase`. 

```js
let myNewExcitingVariable = 'Wahoo!'
```

* Objects and their properties also use the same naming conventions as described above. 

```js
let myObject = {
  firstOne: 1,
  secondOne: 2,
  thirdOne: 3,
}
```

* Constants shold named with all capital letters.

```js
const SONG  = 'Moooonn Riiivveeerr!'
```

* When a constant has more than one word, it should use an underscore between words within the name as well as all capital letters. This style is called `SCREAMING_SNAKE_CASE`  

```js
const SONG_LYRICS  = 'Moooonn Riiivveeerr!'
```

* Functions should use the camelCase style convention when being named. This is the same whether the function is either a declaration, expression or arrow type. 

* All the naming rules and conventions that are mentioned above are called **idiomatic names**. This means they follow the same style convention. However, JavaScript will still process and interpret some variables that use names that do not follow the syle convention above. For example:

```js
_underScoreToStart = 'value'
using_underscores_for_non_constants = 'value'
usingCAPSinthemiddle = 'value'
ALLCAPS = 'value
```

* Avoid magic numbers in your code. If you make reference a specific number throughout your program, it can be difficult to identify why that particular number is being used in the context of the code. It is instead better to assign the number to a constant that accurately decribes the numbers function in the context of the program. 




