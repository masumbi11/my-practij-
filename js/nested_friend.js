
 const iGetScore = 80;
 const friendScore =80;

    if( iGetScore >=80) {
        console.log('inside your friend score.')
        if(friendScore >=80){
            console.log('then go for a lunch.')
        }
        else if(friendScore >=60 && friendScore < 80){
            console.log('tell your friend, good luck next time.')
        }
        else if(friendScore >=40 && friendScore < 60){
            console.log('keep your friend s message unseen.')
        }
        else{
            console.log('block your friend')
        }
    }
    else  {
    console.log('go to home and sleep and act sad')
    }   