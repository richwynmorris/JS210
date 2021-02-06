### Variables As Pointers 

* When it comes to primitives, declared variables are provided with space in the memory to hold a specific value. As primitives are largely simple and small data structures, the allocated memory space that is provided for the variable is directly set as the primitive value. 

* This process is called adding to the `stack`. The stack is a space in the memory which holds all the primitive values which each declared variable directly references. When a local variable is reassigned a new value, it points to another position in the stack/memory where the new value it stored. This explains why primitives are immutable. Their value in the stack cannot be altered. Only the value/memory slot that the variable is referencing can be changed to point to another value. 

* This also explains why if two variable are pointing at same value allocated in the memory, and the first of the two variables is reassigned to the point to another variable, the second will still continue to reference the original memory allocation spot.

```js
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5
```

* Even if two independently declared variables are assigned the same value, both of these values are different allocated spaces in the memory. They just contain the same values. 

* However, the process is different when we start looking at variables that reference objects. 

* As objects are largely more complicated in larger in nature than primitives, JavaScript uses a different system for managing references to objects. When an object is assigned to a declared variable is allocates a space in the memory which is assigned a pointer. This pointer then points the object which is stored in the heap. 

variable => val:pointer  =>  val: object
var myVar => mem loc:4561 =>  {a:'1'}          

* This means that when two variables are assigned the same value, they are infact both referencing the same pointer which references the same object in the memory.  

* Therefore is the object is mutated in someway, for example, an element in an array is reassigned a new value or a mutative method is used, both variables will reference this new change in the object. This is because both variables are referencing the same pointer in the allocated memory space. 

```js
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
```

### Variable declarations 

* When variables are declared with either `let` or `const` they are left in a unset condition after being hoisted. If those variables are not assigned values at any point in the program, they reference the value `undefined` if passed to a function in the program. If they are assigned a value later in the program's execution, Javascript recognises this and raises an error if the variable is used before it is initialized a value. 