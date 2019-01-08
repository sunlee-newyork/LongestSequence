var module = module || {};

module.longestConsecutiveSequence = (function() {
    /* O(n^2) */
    function run1(array) {
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

    /* O(n) */
    function run2(arr) {
        var current = arr[0];
        var winner = arr[0];
        var occurrence = 1;
        var longestLength = 1;

        function checkWinner(num, length) {
            if (occurrence > longestLength) {
                winner = num;
                longestLength = length;
            }
        }

        for (var i = 1; i <= arr.length; i++) {
            if (arr[i] == current) {
                occurrence++;
            } else {
                checkWinner(current, occurrence);

                current = arr[i];
                occurrence = 1;
            }

            if (i === arr.length) {
                checkWinner(current, occurrence);
            }
        }

        return `Longest consecutive sequence number is ${winner} with ${longestLength} occurrences`;
    }

    return {
        run1: run1,
        run2: run2
    };
})();


/*****************/
/* SAMPLE RUNNER */
/*****************/

var array = [5,1,2,3,3,4,2,14,4,4,4,5,];

module.longestConsecutiveSequence.run1(array);
module.longestConsecutiveSequence.run2(array);