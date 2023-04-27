function sing(){
    let lyrics ="";
    for (let i=0;i<11;i++){
        if (i<4){
            lyrics = lyrics + "let it be, ";
        }
        else if(i==4){
            lyrics = lyrics + "whisper words of wisdom, ";
        }
        else if(i<10){
            lyrics = lyrics + "let it be, ";    
        }
        else {lyrics = lyrics + "there will be an answer, let it be";
        }
    }
    return lyrics
}

//Your code above ^^^

console.log(sing());