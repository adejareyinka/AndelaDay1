module.exports = {

	findMinMax:function(arr){
		function sortNumber(a,b) {
    	return a - b;
		}

		min=arr.sort(sortNumber)[0];	//minimum array sort
		max=arr.sort(sortNumber).slice(-1)[0]; //maximum array sort
		
		if (min==max) {

			return [max]; //returns the maximum value and stores in an array

		}else{

			return [min,max]; //returns both the minimum and maximum value and stores it in an array
		}
	}
 }