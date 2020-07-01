//J2 2018

function findTotal() {
    //set the variables
    var parkingSpaces = document.getElementById("numParkingSpaces").value;
    
    var yesterdaySpaces = document.getElementById("yesterdayParkingSpaces").value;
    
    var todaySpaces = document.getElementById("todayParkingSpaces").value;
    
    var yesterdayTotal = yesterdayRecord.split("");
    
    var todayTotal = todayRecordecord.split("");
    
    var numOccupiedSpaces = 0;
    
    for (i=0; i<=parkingSpaces; i++){
        
        if (yesterdayRecord[i] == "C" && todayRecord[i] == "C"){
            numOccupiedSpaces += 1;
        }
    }
    //result display
    document.getElementById("total").innerHTML = numOccupiedSpaces ;
}







































    
