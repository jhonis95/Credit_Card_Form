
const nome = document.getElementById('nome');
const cardnumber = document.getElementById('cardnumber');
const expirationdate = document.getElementById('expirationdate');
const securitycode = document.getElementById('securitycode');
const output = document.getElementById('output');
const ccicon = document.getElementById('ccicon');
const ccsingle = document.getElementById('ccsingle');
const generatecard = document.getElementById('generatecard');

const creditCard={
    nome:'',
    number:0000000000000000,
    expiration:0000,
    cvc:000
}

const svgname=document.getElementById('svgname');
const svgnumber=document.getElementById('svgnumber');
//tracking in live the data in the input 
nome.addEventListener('input',(e)=>{
    svgname.textContent=`${e.target.value}`
    svgname.textContent===``?svgname.textContent='JOHN DOE':'';
})
let arrNum=[]
cardnumber.addEventListener('input',(e)=>{
    let arrlength=arrNum.length;
    arrNum=e.target.value
    
    switch(arrlength){
        case 3:
            arrNum=arrNum.slice(3,0)
            console.log(arrNum)
            break;
        default:
            arrlength>3?arrNum=arrNum:arrNum=e.target.value
            // arrNum=e.target.value
            console.log(`length: ${arrlength}`)
    }
   console.log(arrNum)
})