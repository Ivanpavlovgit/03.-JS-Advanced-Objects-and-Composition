let myObj={
    name: 'Pesho',
    age: '23',
    'hair color' : 'brown',
bark(){
        return 'Wuf Wuf Wuf';
}
};
console.log(myObj.bark());
let x= myObj;
let y=x;
y.age=25;
for (const myObjKey in myObj) {
    console.log(`obj.${myObjKey}=${myObj[myObjKey]}`);
}
const keys=Object.keys(myObj);
let balues=Object.values(myObj);
balues[1]=55;
console.log(keys);
console.log(balues);
console.log(myObj.age);
console.log(x.age);
console.log(y.age);