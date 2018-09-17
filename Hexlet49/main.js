import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const a=(str)=>{
let b=str.length
let d=0
let result=''
while(d!==str.length){
  if(str[d-1]===undefined){result=result+str[0].toUpperCase()}
  else if(str[d-1]===' '){result=result+str[d].toUpperCase()}
  else if(str[d]===str[d]){result=result+str[d]}
  d=d+1
}


return  result
}; export default a
// END

