# Object-Arithmetic
Arithmetic Capabilities to Javascript Objects

# How to use
```js
import {add} from "ObjArith"
let a={
    name:"Harsh",
    age: 19
}

let b = {
    name: "Harsh",
    school: "SOCS",
    branch: "OSS"
}
let c = add(a,b)
console.log(c)
```
# Supported methods
* add (obj1, obj2)
* addUsingKey(obj1, obj2)
* intersection(obj1, obj2)
* leftJoin(obj1, obj2)
* rightJoin(obj1, obj2)
* distintJoin(obj1, obj2)
* attributeMerge(obj1, obj2)
* distinctAttributeMerge(obj1, obj2)


#### More coming soon