Array.prototype.toTwenty = function(){
    for(var i = 1; i <= 20; i ++){
        this.push(i);
    }
   return this;
}

Array.prototype.toForty = function(){
    for(var i = 2; i <= 40; i += 2){
        this.push(i);
    }
   return this;
}

Array.prototype.toOneThousand = function(){
    for(var i = 10; i <= 1000; i += 10){
        this.push(i);
    }
   return this;
}


Array.prototype.search = function(number){
  
  minValue = 0;   //the first index of the array
  maxValue = this.length-1;   //the maximum index of the array
  var n = this.length;        //the parameter passed array-length
  var output = {count:0, index:-1, length:n}; //an object that consist the number of count, index and length
          
  while(minValue<=maxValue){  //the base condition 
              
    var midValue = Math.floor((minValue+maxValue)/2); //gives the rounded middle index of the array
           
    if(this[minValue] == number){ //checks if the first number in the current array is equal to the number passed as a parameter
      output.index = minValue;
      return output;

    }else if(this[maxValue] == number){ //checks if the last number in the current array is equal to the number passed as a parameter
      output.index = maxValue;
      return output

    }else if(this[midValue] == number){ //checks if the middle number in the current array is equal
                                        // to the number passed as a parameter and return the object output
      output.index = midValue;
      return output;
                  
    }else if(this[midValue] < number){  //checks if the middle number in the current array is less than the number passed as a parameter
                  
      minValue = midValue + 1;
      maxValue -=1;
                  
    }else{

      maxValue = midValue -1;
      minValue +=1;
    }
                
    output.count ++;
                
  }
              
  return output;
};