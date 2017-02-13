module.exports={
	aritGeo:function(arr){
        var arith, geom;
        if (arr.length==0){return 0;}
        for (i = 0; i< (arr.length - 2); i++)  
            if(!(arith = arr[i+1] - arr[i] == arr[i+2] - arr[i+1])) break; 

                if(arith) return 'Arithmetic';

        for (i = 0; i< (arr.length - 2); i++)  
            if(!(geom = arr[i+1] / arr[i] == arr[i+2] / arr[i+1])) break;

                if(geom) return 'Geometric';

        return -1;    
       
    }
}