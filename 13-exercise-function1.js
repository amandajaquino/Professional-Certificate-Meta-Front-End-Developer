/* function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        console.log(i, word[i])
    }
}
var word = "amanda";
letterFinder(word); */

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) { if (word[i] == match) {
        console.log('Found the', match, 'at', i)
    } else {
        console.log('---No match found at', i)
    }
 }
}

letterFinder("test", "t");


