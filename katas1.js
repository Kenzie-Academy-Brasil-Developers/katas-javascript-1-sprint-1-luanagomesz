function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
   let resultado = []
    for (let num = 1; num <= 20; num++){
  resultado.push(num)
    } 
    return resultado;
} 
//call function oneThroughTwenty
console.log(oneThroughTwenty());
function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   let resultado2 = []
   for (let num = 2; num <= 20; num +=2){
 resultado2.push(num)
   } 
   return resultado2;
  
}
console.log(evensToTwenty())
//call function evensToTwentysd

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado3 = []
  for (let num = 1; num <= 20; num +=2){
resultado3.push(num)
  } 
  return resultado3;
 
   
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado4 = []
  for (let num = 5; num <= 100; num +=5){
resultado4.push(num)
  } 
  return resultado4;

}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado5 = []
  for (let num = 1; num <= 10; num++){
resultado5.push(num*num)
  } 
  return resultado5;
    
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado6 = []
  for (let num = 20; num >= 1; num--){
resultado6.push(num)
  } 
  return resultado6;
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado7 = []
  for (let num = 20; num >= 1; num -=2){
resultado7.push(num)
  } 
  return resultado7;
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado8 = []
  for (let num = 19; num >= 1; num -=2){
resultado8.push(num)
  } 
  return resultado8;
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let resultado9 = []
  for (let num = 100; num >= 1; num -=5){
resultado9.push(num)
  } 
  return resultado9;
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let numerosquadrados = []
  for (let num = 1; num <= 10; num++){
numerosquadrados.push(num*num)
  }
  let resultado10 = []
  for (let num = numerosquadrados.length-1; num > 0; num--){
resultado10.push(numerosquadrados[num])
  } 
  return resultado10;
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
