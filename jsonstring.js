//convert  JSON string to object

// const jsonString = '{"name":"mansi", "age":21, "city":"surat"}';
// const jsonobject = JSON.parse(jsonString);
// console.log(jsonobject.name);

//convert JSON onject to string
const objecttoconvert = {name:"mansi",age: 21};
const json = JSON.stringify(objecttoconvert);
console.log(json);

console.log(typeof json);