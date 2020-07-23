//Function 1
function getMaxDigit(number){
    return number = String(number).split('').sort().reverse();
}

//Function 2
const getCounterNumber = function(base,exponent) {
    let result = base;
    const posExponent = Math.abs(exponent);
    if(posExponent === 0){
        result = 1;
    } else if(posExponent > 0){
        for (let i = 1; i < exponent; i++){
            result *= base;
          }
    
          }
    return result
  };
  
//Function 3
function getCapitalLetter(name) {
    if(!name) {
        return name;
    } else {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    }
}
//Function 4
function getSumWithoutTaxes(sum,tax){
     if(isNaN(sum) || isNaN(tax)){
        return 'Введіть вірне значення'
    }
    else{
        return sum - ((sum*tax)/100)
    }
}

//Function 5
function getRandomNumber(N, M) {
    N = Math.ceil(N);
    M = Math.floor(M);
    return Math.floor(Math.random() * (M - N + 1)) + N; 
  }
  
//Function 6
str = 'Асталавіста';
function getNumberRepetitions(str, a){
    return (str.toLowerCase()).split(a).length - 1;
}

// Function 7
function getConvertMoney(money) {
    if(String(money).split('').reverse()[0] === '$') {
        money = (parseInt(money) * 27) + "UAH";
        return money;
    } else if (String(money).split('').reverse()[0] === "UAH") {
        money= (parseInt(money) / 27) + "$";
        return money;
    } else {
        return "Ви ввели невірні дані";
    }
}
//Function 8
function getRandomPassword(){
    var x = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    return x
}

 //Function 9
function getDeleteLetters(letter, word) {
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
        word = word.replace(letter, '');
    }
    return word;
}
//Function 10
    function isPalyndrom(str){
        var re = /[\W_]/g;
        var lowRegStr = str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
}
    

//Function 11
function unique_letters(str) {
    var str = str.toLowerCase().split('');
    var res = str.filter(function(val, i, str) {
    return str.lastIndexOf(val) === str.indexOf(val);
       
    });
    return res;
  }
  
  

document.writeln(`<p> №1:  ${getMaxDigit(867357909755)[0]}</p>`);
document.writeln(`<p> №2:  ${getCounterNumber(2,4)}</p>`);
document.writeln(`<p> №3:  ${getCapitalLetter('irYnA')}</p>`);
document.writeln(`<p> №4:  ${getSumWithoutTaxes(1000,19.5)}</p>`);
document.writeln(`<p> №5:  ${getRandomNumber(1, 10)}</p>`);
document.writeln(`<p> №6:  ${getNumberRepetitions(str, 'а')}</p>`)
document.writeln(`<p> №7:  ${getConvertMoney('35$')}</p>`)
document.writeln(`<p> №8:  ${getRandomPassword()}</p>`)
document.writeln(`<p> №9:  ${getDeleteLetters('a', 'blablabla')}</p>`)
document.writeln(`<p> №10: ${isPalyndrom('Я несу гусеня')}</p>`)
document.writeln(`<p> №11: ${unique_letters('Бісквіт був дуже ніжним')}</p>`);

