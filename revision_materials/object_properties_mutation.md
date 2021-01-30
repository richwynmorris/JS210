### Objects, Properties and Mutation 

* Objects are data stores for key-value pairs. An object contains a key and an associated value.

* A key in an object is always a string. However, the value can be any datatype. 

* These are known as the object's properties. However, the key within a object may also be referenced as an property.

* To create an object, you need to use the **object literal** syntax.

```js
let person = {
  name:    'Richard',
  age:     30,
  hobbies: ['coding', 'warhammer'],
};
```

* An object's values can be accessed by referencing the key using either dot notation or bracket notation.

```js
person.name
person['age']
```

* You can add key-value pairs to the object using dot and bracket notation aswell.

```js
person.location = 'England'
person.sports = ['running']
```

* To delete a key-value pair from an object you can prepend either dot or bracket notation with the `delete` statement. 

```js
delete person.location
```

* If an object is the value of a constant declared variable, then the constant must always reference the same object and cannot be reassigned a different value. However, you can still reassign and add properties to the constant object through the use of dot or bracket notation. You just cannot alter the object itself that the constant variable is referencing. 

* Objects can be cateogrised as; simple objects, array, dates, functions. 

* Objects are complex structures and often contain many types of primitives aswell as other objects. 

* Objects, unlike primitives, are usually mutable and can have their values changed or modified. 

* When it comes to objects and where they are stored in the memory, variables that are assigned objects, as their values, do not directly reference the object itself in the memory. Instead, the variable is assigned a pointer which references the location of the object which is stored in the memory's heap. This means that when two variables point to the same pointer, they both end up pointing to the same object stored in the heap. Therefore, if the object that is mutated by one of the variables referencing the pointer, any other variables also referencing that pointer will be mutated. 

* When two objects refers to that same pointer in the memory, this is reffered to as aliasing. 

* Its important to note that when an element is reassigned a new value in an object, such an an array, this is mutating the array object aswell as reassigning the element.