const mathematicalOperations=prompt("Enter math operations +  -  *  /   " )
const a =prompt("Enter the first number a");
const b =prompt("Enter the second number b");
if (mathematicalOperations==="+") {
    alert(a+'+'+b+'='+(Number(a)+Number(b)))
}
else if (mathematicalOperations==="-") {
    alert(a+'-'+b+'='+(Number(a)-Number(b)))
}
else if (mathematicalOperations==="*") {
    alert(a+'*'+b+'='+(Number(a)*Number(b)))
}
else if (mathematicalOperations==="/") {
    alert(a+'/'+b+'='+(Number(a)/Number(b)))
}

