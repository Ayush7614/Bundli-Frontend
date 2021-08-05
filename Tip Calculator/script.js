function calculateTip() {
    
    var billAmt = document.getElementById("billAmt").value;
    
    var servicequality = document.getElementById("servicequality").value;
    
    var tipTotal = document.getElementById("tipTotal").value;
    
    var billTotal = document.getElementById("billTotal").value;

    
    var total = billAmt * servicequality;                        
    
    var Total = parseFloat(billAmt) + parseFloat(total);    
    
    document.getElementById("tipTotal").innerHTML = total;
    
    document.getElementById("billTotal").innerHTML = Total;
    
    }
    
    document.getElementById("calculate").onclick = function()
    
    {
    
    calculateTip();
    
    };