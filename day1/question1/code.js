module.exports = {
	dataTypes: function(value){
		if (typeof value === typeof ''){
			return value.length;
		}else if(value === undefined || value === null){
			return 'no value';
		}else if(value === true || value === false){
			return value;
		}else if(typeof value === typeof 5){
			if(value <  100 ){ return 'less than 100';}
			else if (value == 100) {return 'equal to 100';}
			else{return 'more than 100';}
		}else if(typeof value === typeof []){
			return value[2];
		}else(typeof value === typeof 'function')
			 return 'called callback';
		var callback = function(arg) {
	        if(arg === true) {
	          return 'called callback';
	    	}
	    };     	
	}     
}