// function findMinMax(arr){
// 	max=arr.sort().slice(-1)[0]; //max
// 	min=arr.sort()[0]
// 	if (max==min) {
// 		console.log(max);
// 		return max;
		
// 	}else{
// 		console.log(min,max);
// 		return (min,max);
		
// 	//}
// 	}
// }

// findMinMax([3,3,7,0]);
module.exports = {
	findMinMax:function(arr){
		min=arr.sort()[0];
		max=arr.sort().slice(-1)[0]; //max
		
		if (min==max) {

			return [max];

		}else{

			return [min,max];	
		}
	}
 }