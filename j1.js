//J1 2020

function processForm(){
    
    var smallSize = document.getElementById("smallTreat").value;
    
    var mediumSize = document.getElementById("mediumTreat").value;
    
    var largeSize = document.getElementById("largeTreat").value;
    
    var totalTreats = ((1*smallSize) + (2*mediumSize) + (3*largeSize));
    console.log(totalTreats);
    
    if(totalTreats < 10){
        
        document.getElementById("mood").innerHTML = "sad";
    }else{
        document.getElementById("mood").innerHTML = "happy";
    }
}
    
