
const nome = document.getElementById('nome');
const cardnumber = document.getElementById('cardnumber');
const expirationdate = document.getElementById('expirationdate');
const securitycode = document.getElementById('securitycode');
const output = document.getElementById('output');
const ccicon = document.getElementById('ccicon');
const ccsingle = document.getElementById('ccsingle');
const generatecard = document.getElementById('generatecard');


let numeros

const svgname=document.getElementById('svgname');
const svgnumber=document.getElementById('svgnumber');
//tracking in live the data in the input 
nome.addEventListener('input',(e)=>{
    svgname.textContent=`${e.target.value}`
    svgname.textContent===``?svgname.textContent='JOHN DOE':'';
})

cardnumber.addEventListener('input',(e)=>{
    // isNaN(e.target.value)?alert():'' to see if the input is a number
    numeros=`${e.target.value}`
    svgnumber.textContent=`
    ${numeros.slice(0,4)} ${numeros.slice(4,8)} ${numeros.slice(8,12)} ${numeros.slice(12,16)}
    `;
    e.target.value===``?svgnumber.textContent='0123 4567 8910 1112':'';

})
//Generate random card number from list of known test numbers
const randomCard = function () {
    let testCards = [
        '4000056655665556',
        '5200828282828210',
        '371449635398431',
        '6011000990139424',
        '30569309025904',
        '3566002020360505',
        '6200000000000005',
        '6759649826438453',
    ];
    let randomNumber = Math.floor(Math.random() * testCards.length);
    cardnumber.value= testCards[randomNumber];
    numeros=cardnumber.value
    svgnumber.textContent=`
    ${numeros.slice(0,4)} ${numeros.slice(4,8)} ${numeros.slice(8,12)} ${numeros.slice(12,16)}
    `;
}
generatecard.addEventListener('click', function () {
    randomCard();
});