module.exports = function solveEquation(equation) {
  let minus=false
  if(equation[0]=="-"){
    minus=true
  }
  let array=[]
  let sign1
  let sign2
  let arr=equation.split(/[+-]/)
  if(arr[0]==""){
    arr.shift()
    sign1=equation[arr[0].length+1]
    sign2=equation[arr[0].length+arr[1].length+2]
  }
  else{
  sign1=equation[arr[0].length]
  sign2=equation[arr[0].length+arr[1].length+1]
  }
  let a = arr[0]
  let b = arr[1]
  let c = arr[2]
  if(sign2=="-"){
    c=c*(-1)
  }
  let A = a.split('')
  A.pop()
  A.pop()
  A.pop()
  A.pop()
  A.pop()
  A.pop()
  A.pop()
  A=A.join('')
  if(minus){A=A*(-1)}
  let B = b.split('')
  B.pop()
  B.pop()
  B.pop()
  B.pop()
  B.pop()
  B=B.join('')
  if(sign1=="-"){
    B=B*(-1)
  }
  let d = ((B*B)-4*A*c)
  let D = Math.pow(d,(1/2))
  let x1 = (-B+D)/(2*A)
  let x2 = (-B-D)/(2*A)
  if (x1<x2) {array.push(Math.round(x1),Math.round(x2))}
  else {array.push(Math.round(x2),Math.round(x1))}
  return array

  }
