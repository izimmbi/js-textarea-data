// 

document.getElementById("myButton").addEventListener("click", function() {
 
    var mText = document.getElementById("userMessage").value;
    var spaces = 0;
    var sentences = 0;
    var words = 0;
    var avg = 0;
    
    for (var i = 0; i <= mText.length; i++) {
        // Check spaces condition
        if (mText[i] == " ") {
            spaces = spaces + 1;
        }
        // Check for Sentences and use || for each type of punctuation
        if (mText[i] == "." || mText[i] == "?" || mText[i] == "!") {
            sentences = sentences + 1;
        }
    }
    words = spaces + 1;
    avg = (words / sentences);
    
    document.getElementById("words").innerHTML = words;
    document.getElementById("sentences").innerHTML = sentences;
    document.getElementById("spaces").innerHTML = spaces;
    document.getElementById("avg").innerHTML = avg;
});
