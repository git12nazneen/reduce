const student = {
    name:'karim',
    age:15,
    clas:'ten',
    marks:15
}
const marks = student.marks;
console.log(marks);

const students = {
    name:'karim',
    age:15,
    clas:'ten',
    marksd:{
        physics:34,
        biology:44,
        chemistry:56
    }
}
const biology = students.marksd.biology;
console.log(biology)
const physics = students['marksd']['physics'];
console.log(physics)



