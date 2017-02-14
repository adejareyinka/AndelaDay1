module.exports = {
    reverseString: function(str){
        if(str === ''){
            return null;
        }else if (str === str.split('').reverse().join('')){
            return true;
        }else
           return str.split('').reverse().join('');        
    }
}