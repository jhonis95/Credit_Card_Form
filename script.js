
const nome = document.getElementById('nome');
const cardnumber = document.getElementById('cardnumber');
const expirationdate = document.getElementById('expirationdate');
const securitycode = document.getElementById('securitycode');
const output = document.getElementById('output');
const ccicon = document.getElementById('ccicon');
const ccsingle = document.getElementById('ccsingle');
const generatecard = document.getElementById('generatecard');

const svgname=document.getElementById('svgname');
const svgnumber=document.getElementById('svgnumber');
const svgexpire=document.getElementById('svgexpire');
const svgsecurity=document.getElementById('svgsecurity');
//tracking in live the data in the input 
// const regex=/^[0-9]+$/;
const regex=[0-9,'/',',','+']
nome.addEventListener('input',(e)=>{
    // if(e.target.value.length>0){
    // }
    // if(nome.checkValidity()){
    //     // prevVal = this.value;
    //     console.log("intupt is a letter")
    //   } else {
    //     // this.value = prevVal;
    //     console.log("intupt is a letter")
    //   }
    if(regex.includes(e.target.vale)){
        console.log("input include number")
    }
    svgname.textContent=`${e.target.value}`
    svgname.textContent===``?svgname.textContent='JOHN DOE':'';
    // if(isNaN(e.target.value)){
    //     console.log("intupt is a letter")
    // }else{
    //     console.log("intupt is not a letter")
    // }
})

cardnumber.addEventListener('input',(e)=>{
    // isNaN(e.target.value)?alert():'' to see if the input is a number
    svgnumber.textContent=`
    ${e.target.value.slice(0,4)} 
    ${e.target.value.slice(4,8)} 
    ${e.target.value.slice(8,12)} 
    ${e.target.value.slice(12,16)}
    `;
    e.target.value===``?svgnumber.textContent='0123 4567 8910 1112':'';

})
let testMes;
let testDia;
const dias=[
    '01','02','03','04',
    '05','06','07','08',
    '09','10','11','12',
    '13','14','15','16',
    '17','18','19','20',
    '21','22','23','24',
    '25','26','27','28',
    '29','30','31',
];
const messes=[
    '01','02','03','04',
    '05','06','07','08',
    '09','10','11','12',
];
expirationdate.addEventListener('input',(e)=>{
    svgexpire.textContent=`
    ${e.target.value.slice(0,2)}/${e.target.value.slice(2,4)}
    `;
    if(e.target.value.length===4){
        testMes=messes.includes(e.target.value.slice(0,2))
        testDia=dias.includes(e.target.value.slice(2,4))
        testMes?'':console.log('mes invalido')
        testDia?'':console.log('dia invalido')
    }
    e.target.value===``?svgexpire.textContent='01/23':'';
});

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
};
generatecard.addEventListener('click', function () {
    randomCard();
});
// CREDIT CARD IMAGE JS
document.querySelector('.preload').classList.remove('preload');
document.querySelector('.creditcard').addEventListener('click', function () {
    if (this.classList.contains('flipped')) {
        this.classList.remove('flipped');
    } else {
        this.classList.add('flipped');
    }
})


//On Focus Events
nome.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

cardnumber.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

expirationdate.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

securitycode.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.add('flipped');
});