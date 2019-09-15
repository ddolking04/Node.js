//  JSON
//  JavaScipt Object Notation
//  Key - Value (Paired)
//  Object: {}
//  Array: []

let user_info = {
    name: "이승환",
    language: [
        "C언어",
        "JavaScript"
    ] 
}

console.log(user_info.name)
console.log(user_info['name'])
console.log("---------------------")

console.log(user_info.language[0]);
console.log(user_info.language[1]);
console.log("---------------------")

console.log(user_info['language'][0]);
console.log(user_info['language'][1]);
console.log("---------------------")

user_info.homework = "JavaScript 복습";
// let user_info = {
//     name: "이승환",
//     language: [
//         "C언어",
//         "JavaScript"
//     ],
//     homework: "JavaScript 복습"
// }
console.log(user_info.homework);
console.log(user_info['homework']);
