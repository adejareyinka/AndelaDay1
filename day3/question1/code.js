module.exports = {
    Array: function(){
        Array.prototype.oneToTwenty = function() {
            var a = [];
            for (var i = 1; i <= 20; i++) {
                a.push(i);
            }
            return  a;
        };

        Array.prototype.twoToForty = function() {
            var b = [];
            for (var i = 2; i <= 40; i += 2) {
                b.push(i);
            }
            return b;
        };

        Array.prototype.tenToOneThousand = function() {
            var c = [];
            for (var i = 10; i <= 1000; i+=10) {
                c.push(i);        
            }
            return c;
        };

        Array.prototype.search = function(number) {
            var length = this.length;
            var count = 1;
            var index =0;

            if (length === 0) {
                return false;
            } else {
                let m = Math.floor(length/2);
                let y = number[m];
                if (number === y) {
                    return true;
                } else if (number < y) {
                    return search(a.slice(0, m), number);
                } else {
                    return search(a.slice(m + 1), number);
                }
            }  
        };
    }
}