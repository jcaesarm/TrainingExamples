// //Client side - sending data (json format) to backend
// let employee = {
//     name: 'Steve',
//     age: 23,
//     code: 'EMP0023',
//     departaments: ['Admin', 'HR']
// };

// let json = JSON.stringify(employee);
// console.log(json);

// //Client side - processing data (json format) received from backend
// let backendjson = '{"name": "Tom", "age": 31, "code": "EMP0023", "depertaments": ["Admin", "HR"] }';

// let backendemployee = JSON.parse(backendjson);
// console.log(backendemployee);


//Adding another example 
let student = {
    name: 'Julio',
    lastname: 'Martinez',
    age: 23,
    code: 'ST4',
    subject: 'Full Stack Developer Training',
    adress: 'CDMX',
};

let json = JSON.stringify(student);
console.log(json);

//Client side - processing data (json format) received from backend
let backendjson = '{"name": "Julio", "lastname": "Martinez", "age": 23, "code": "ST4", "subject": "Full Stack Developer Training", "adress": "CDMX"}';

let backendstudent = JSON.parse(backendjson);
console.log(backendstudent);