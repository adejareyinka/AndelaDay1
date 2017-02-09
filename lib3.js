
module.exports={
	aritGeo:function(arr){
		var arthCount=0;
		var geoCount=0;
		 for (var i=0;i<arr.length-2;i++){
             if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
                 arthCount++;
            }
            else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
                 geoCount++;
            }
            else return -1;
        }
         if(arthCount===arr.length-2)
             return "Arithmetic";
         else if(geocount===arr.length-2)
             return "Geometric";
	}
       

 }    