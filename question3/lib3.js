module.exports={
	aritGeo:function(arr){
        var ap, gp;
        if (arr.length==0){return 0;}
        for (i = 0; i< (arr.length - 2); i++)  
            if(!(ap = arr[i+1] - arr[i] == arr[i+2] - arr[i+1])) break; 

        if(ap) return "Arithmetic";

        for (i = 0; i< (arr.length - 2); i++)  
            if(!(gp = arr[i+1] / arr[i] == arr[i+2] / arr[i+1])) break;

        if(gp) return "Geometric";

        return -1;    
       
    }
}