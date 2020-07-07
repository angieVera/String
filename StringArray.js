/*

String.prototype.charAt()
String.prototype.concat()
String.prototype.indexOf()
String.prototype.search()
String.prototype.split()
String.prototype.toLowerCase()
String.prototype.endsWith()
String.prototype.slice()


Array.prototype.forEach()
Array.prototype.push()
Array.prototype.toString()
Array.prototype.reverse()
Array.prototype.includes()
*/


var str= 'STEFANY';
var conc ='mi nombre es angie vera';
var conc2=' y ';
var conc3='soy feliz programando';
const myString='programacion el idioma de todo';
const vector=['soy','un', 'arreglo'];
const vector2=['Excelente','javascrip',',','html','y','css'];


console.log(str.charAt(3));
console.log(str.concat(' ',conc));
console.log(',',conc2,conc);
console.log('la palabra feliz en la variable conc3 se encuentra en la posicion: '+conc3.indexOf("feliz"));

result=myString.search("un");
if(result==-1){
console.log('este no aparece en el string sugerido');

}else{
    console.log(result);
}

var spl=conc.split(" ");
console.log(spl);
console.log(str.toLowerCase());
console.log(myString.endsWith('todo'));
console.log(conc3.slice(10));


console.log(spl.forEach(element => console.log(element))) ;

push=vector.push('tipo','string');
console.log(vector);
console.log(vector.toString());

const reversed =vector.reverse();
console.log('vector:',reversed);

console.log(vector2.includes('Excelente'));

