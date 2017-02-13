// function getPrime(n){
// 	j =[];

// 	if(n<2){
// 		return 'Cannot Calculate sum of prime for negative numbers.';
// 	}else if(n == undefined){

// 		return 'Invalid Input';

// 	}else if (typeof n == 'string' ){

// 		return 'Invalid Input';

// 	}else{
// 		for(i=2; i<n; i++){
// 			if(n%i ==1){
// 				j.push(i);
				
// 			}else return false;
			
// 		}
// 		console.log(j);
// 	}
// }
// getPrime(200);

module.exports ={
    getPrimes: function(number){
       var sieve = [], i, j, primes = [];
         if(number <  0){return 'Enter a positive number';}
         else if(number <= 1){return 'Enter a number greater than 1';}
         else if (typeof number === typeof ''){return 'it does not accept string';}
         else if (number === undefined || number === null) {return "enter a number";}
         else for (i = 2; i <= number; ++i)
           if (!sieve[i]) {
            // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= number; j += i){ sieve[j] = true;}
            }
         return primes;
    }    
}