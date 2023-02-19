// Challenge 1: Beatiful NUmbers

function beautifulDays(i, j, k) {
let arr=[];
for(let a=i; a<=j;a++)
{
    arr.push(a);
}
let reverse =[];
for(let a=0;a<arr.length;a++)
{
reverse[a] = Number(String(arr[a]).split('').reverse().join(''));
}

let number=0;
let beatiful=0;
for(let a=0;a<arr.length;a++)
{
number=Math.abs(arr[a]-reverse[a])/k;
if(Number.isInteger(number)===true)
  {beatiful++;}  
}
return beatiful;
}
let result=0;
result=beautifulDays(20,23,6);
console.log(result);

