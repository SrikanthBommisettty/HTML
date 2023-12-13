// ARRAYS
let arr=['srikanth', 'surya',2,3,5];
console.log(arr)
arr[1]=1;
console.log(arr);
arr.push(234)
arr.pop()
arr.splice(1,0,'22',33,44)
console.log(arr);

//objects
let user = {
    name:'srikanth',
    age:24,
    address:{
        city:'Nellore',
        state:'AP',
        pincode:524004
    },
    skills:['HTML','CSS','JS']

}
console.log(user);
console.log(user.address.state);

// loops
for(let i=0; i<=10; i++){
    console.log(i);
}

//functions
function add(a,b){

    console.log(a+b);
}
add(3,8)

//arrow function
sqr=(n)=>{
    console.log(n*n)
}
sqr(3)

//settimeout
setTimeout(()=>{
    console.log('Hello')
}, 3000);
