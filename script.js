function randomNumberRGBA() {
    let first = 0 + Math.random() * (2 + 1 - 0);
    let second = 0 + Math.random() * (1 + 1 - 0);
    let third = 0 + Math.random() * (1 + 1 - 0);
    let four = function(){
        let numberChange = [0,1]
        return numberChange[Math.round(Math.random())];
    }
    return `${Math.floor(first)},${Math.floor(second)},${Math.floor(third)},${four()}`;
}
//!first===============================================
document.getElementById("first-btn").addEventListener("click", colorChanger)
function colorChanger() {
    document.getElementById("first-p").style.color = `rgba(${randomNumberRGBA()})`;
}
//?second============================================
document.getElementById("second-btn").addEventListener("click", secondP)
function secondP(){
    let a = randomNumberRGBA();
    let b  =randomNumberRGBA();
    function reverseStar (x){
        let b = x.split(',');
        let m = b.reverse();
        console.log(m)
        if(m[0] == 0){
            return true;
        }else{
            return false;
        }
    }
   let arrayOfTrue = [reverseStar(b),reverseStar(a)]
    if((arrayOfTrue[0] && arrayOfTrue[1]) == false && (a !== b)==true ){
        console.log('abobus')
        document.getElementById("second-p").style.color = `rgba(${a})`;
        document.getElementById("third-p").style.color = `rgba(${b})`;
    }else{
        console.log('aboba')
        while(arrayOfTrue[0] == arrayOfTrue[1] || a == b){
        a = randomNumberRGBA();
        b = randomNumberRGBA();
        }
        document.getElementById("second-p").style.color = `rgba(${a})`;
        document.getElementById("third-p").style.color = `rgba(${b})`;
    }
}

