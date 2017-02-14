module.exports = {
    words: function(string){
      
        var words = string.replace(/[.]/g, '').split(/\s+/);
        var freqMap = {};
        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });

        return freqMap;
    }
}
