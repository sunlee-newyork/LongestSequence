var module = module || {};

module.longestConsecutiveSequence = (function() {
    function run(array) {

        var current = []
        var longest = []

        for (var i = 0; i < array.length; i++) {
            current = [array[i]];

            for (var j = i+1; j < array.length; j++) {
                if (array[j] == current[0]) {
                    current.push(array[j])
                } else {
                    break;
                }
            }

            if (current.length > longest.length) {
                longest = current;
                current = []
            }
        }

        return `Longest sequence is of value ${longest[0]} with ${longest.length} occurrences.`;
    }

    return {
        run: run
    }
})();


/*****************/
/* SAMPLE RUNNER */
/*****************/

var array = [5,1,2,3,3,4,2,14,4,4,4,5,];

module.longestConsecutiveSequence.run(array);