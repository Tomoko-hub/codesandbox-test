/*const numArr = [ 1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num)=>{
  return num % 2 !== 0
})

console.log(newNumArr)*/

/*const nameArr = ['Tomoko', 'Taavi', 'Topi', 'Naoko', 'Mika'];
nameArr.map((name, index)=>console.log(`No.${index+1} is ${name}`));

const newNameArr = nameArr.map((name)=>{
  if (name === 'Tomoko'){
    return name;
  }
  else {
    return `Hello ${name}.`
  }
})

console.log(newNameArr);*/

/*const val1 = 1 < 0 ? 'This is true' : 'This is false';
console.log(val1)*/

/*const num = '1300';
/*console.log(num.toLocaleString());

const formattedNum = typeof num === 'number' ? num.toLocaleString(): 'Please put a number'
console.log(formattedNum);*/

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "your number is too big" : "ok";
};

console.log(checkSum(1000, 20));
