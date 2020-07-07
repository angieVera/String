const array = [1,2,3,4,5];
const array1 = ["Angie","vera","medina"];


const odd = (element) => element %2!=0;
console.log(array.some(odd));


const resultado= array1.map((x)=>{
    return x.split('').reverse().join('');
});

console.log(array1);
console.log(resultado);