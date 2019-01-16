function anagram (array) {
    var organized = {};
    for (var i = 0; i < array.length; i++) {
        var word = array[i].split('').sort().join('');
        console.log(word)
        if (!organized.hasOwnProperty(word)) {
            organized[word] = [];
        }
        organized[word].push(array[i]);
    }    
    return organized;
}


var obj = anagram(['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko','omkn'])
console.log(obj)
