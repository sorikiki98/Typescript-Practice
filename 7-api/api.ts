interface Animal {

}

class Dog implements Animal {
    isDog: boolean = true;
}

class Cat implements Animal {
    isCat: boolean = false;
}

const animals: Animal[] = [new Dog(), new Dog(), new Dog()];

// 🤔 type predicates
// Type predicates are a special return type that signals to the Typescript compiler what type a particular value is.
// Type predicates are always attached to a function that takes a single argument and returns a boolean. 
// Type predicates are expressed as argumentName is Type .

const isDog = function(animal: Animal): animal is Dog {
    return (animal as Dog).isDog !== undefined;
}

// 이전에 Javascript에서 배운 배열의 every api 참고. (오버로딩)
const result = animals.every(isDog);
console.log(result);