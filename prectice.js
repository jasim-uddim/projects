// 01.declear variable let and const;
const fatherName='sultan ahammed';
let age=52;
age=55;
// 02.condetion;
// condetion operator:>,<,==,===,<=,>=,!==,&&,||;
if(fatherName=='Sultan ahammed'){
    // console.log('I am a lucky person')
}else if(fatherName=='sultan ahammed'){
    // console.log('I am a lucky person')
}else{
    // console.log('so sad')
}
// 03.1:declear array;
const number =[50,60,55,45,41,24,51,43,80];
// 03.2:array total index;
console.log(number.length)
// // 03.3:fixed index number;
console.log(number.indexOf(45));
// // 03.4:accesses propertry index number;
number[5]=100;
console.log(number)
// // 03.05:property add and pop;
number.push(200);
console.log(number)
number.pop()
console.log(number)
// // 03.06:first element add and delet;
number.shift()
number.unshift(12)
console.log(number)
// 04:loop;
// 04.1:while loop;

let i=1;
while(i<number.length){
    i++;
    console.log(i)
}
// for loop;

const numbers=[50,10,20,30,40,51,55];
for (let i=0;i<numbers.length;i++){
    const number=numbers[i];
    console.log(number)
}
// 05:function declaration;
function doSum(num1,num2=50){
    const result=num1+num2;
    return result;
}
const result=doSum(55)
console.log(result);
//06.1: object declaration;
const student={id:01,name:'monir', address:'dawgon'}
const studentAddress=student.address;
// 06.2: object accesess;
console.log(student.id)
console.log(student['name'])
console.log([studentAddress])







