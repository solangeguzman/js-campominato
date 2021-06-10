function numCasual (min, max){
    return Math.floor(Math.random()*(max - min +1)) + min;
}

computerNumber=[];
userNumber=[];

while(computerNumber.length < 16){
   var randomNum=numCasual (1,100);
   if(!computerNumber.includes(randomNum)){
       computerNumber.push(randomNum)
   }
}
console.log(computerNumber)

while(userNumber.length<86){
    var numUser=parseInt(prompt('Per favore scrivi un numero!'));
    if (!userNumber.includes(numUser)){
        if(!computerNumber.includes(numUser)){
            userNumber.push(numUser);
        }
        else{
             alert('Ops provaci di nuovo!');
             break;
        }
    } else{
       alert('inserisci il numero');
   
   
    }

}
console.log(userNumber)
document.getElementById('output').innerHTML='Are' +userNumber+ 'number'