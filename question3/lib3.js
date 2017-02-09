
module.exports={
	aritGeo:function(arr){
		var arthCount=0;
		var geoCount=0;
        if (arr.length==0) {return 0;}
		 for (var i=0;i<arr.length-2;i++){
             if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
                if (true) {return "Arithmetic";}
            }
            else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
                if (true) {return "Geometric";}
            }
            else {return -1;}
        }
	}
       

 }    