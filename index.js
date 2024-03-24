function writeCards(names){
    let thankYouMessages = [];
    for(let i = 0; i < names.length; i++){
        thankYouMessages.push(`Thank You, ${names[i]}!`);
    }
    return thankYouMessages;
}
function countdown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}


