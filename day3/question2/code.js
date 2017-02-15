module.exports={
    findMissing: function(array1, array2){
        var currentSize = array1.length;
        var previousSize = array2.length;

   // loop through previous array
    for(var i = 0; i < previousSize; i++) {

      // looking through the new array
      if (array1.indexOf(array2[i]) == -1)
         return array2[i];
    }

    return 0;  
    }
}