var calculateWords = function () {
    var text = document.querySelector('#text-input').value;
    var wordCount = text.split(/[^\s]+/).length - 1;
    document.querySelector('.word-sum').innerHTML = wordCount;
};

var calculateSentences = function () {
    var text = document.querySelector('#text-input').value;
    var sentenceCount = text.split(/[.?!]+/).length - 1;
    document.querySelector('.sentence-sum').innerHTML = sentenceCount;
};

var calculateCharacters = function () {
    var text = document.querySelector('#text-input').value;
    var characterCount = text.replace(/\s+/g,'').length;

    document.querySelector('.character-sum').innerHTML = characterCount;
};


document.addEventListener('keyup', function (e) {
    calculateCharacters();
    calculateWords();
    calculateSentences();
});