function decToBinaryConvert() {
	     
		 var binary = "";
		 var bitvalue = document.getElementById("bit").value;
		 var decimal_number = document.getElementById("decimal").value;
		 
		 for(i=0;i<bitvalue;i++)
		 { 
		 
		    
		     var remainder = decimal_number % 2;
			 
			 if(remainder == 0)
			 { 
			     binary = binary + "0";
				 
		     }
			 else 
			 {
			     binary = binary + "1";
				 
			 }
			
			decimal_number = Math.trunc(decimal_number/2);
			
	    }
		
		var binaryStr1 = binary.split("");
		var binaryStr2 = binaryStr1.reverse();
		var binaryStrFinal = binaryStr2.join("");
	      document.getElementById("bin").value = binaryStrFinal;
	 
	 }
	 function decToBinaryReset() {
	 
	 document.getElementById("decimal").value = "";
	  document.getElementById("bit").value = "";
	   document.getElementById("bin").value = "";
	 }
