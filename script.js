document.addEventListener("DOMContentLoaded", function(){

    const input = document.querySelector("textarea");
    const characterCount = document.querySelector("#characterCount");
    const wordCount = document.getElementById("wordCount");
    const sentenseCount = document.getElementById("sentenceCount");


    input.addEventListener("input", function(){

        const text = input.value.trim();

        characterCount.textContent = text.length;

        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;

        const sentenses = text.split(/[.!?]+/).filter(sentense => sentense.length > 0);
        sentenseCount.textContent = sentenses.length;

    })

})