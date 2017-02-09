module.exports = {

	findMinMax:function(arr){
		function sortNumber(a,b) {
    	return a - b;
		}

		min=arr.sort(sortNumber)[0];
		max=arr.sort(sortNumber).slice(-1)[0]; //max
		
		if (min==max) {

			return [max];

		}else{

			return [min,max];	
		}
	}
 }