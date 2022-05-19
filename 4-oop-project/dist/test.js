var person = {
    name: 'dasol',
    age: '25'
};
var pet = {
    name: 'bbibbi',
    age: 1
};
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(person, "name"));
