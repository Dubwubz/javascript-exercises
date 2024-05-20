const reverseString = function(words) {
    let string = "";
    for (let i = words.length - 1; i >= 0; i--) {
        string += words[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
