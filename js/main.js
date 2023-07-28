
var arrIdx;
var oldIdx;
const generateQuote = function() {
    const quotes = [
    {
        quote: "'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.'",
        writer: "― Bernard M. Baruch"
     },
     {
        quote: "'You only live once, but if you do it right, once is enough.'",
        writer: "― Mae West"
     },
      {
        quote: "'Be the change that you wish to see in the world.'",
        writer: "― Mahatma Gandhi"
     },
     {
        quote: "'I believe in one thing only, the power of human will.'",
        writer: "-Joseph Stalin"
     },
     {
      quote: "'If you tell the truth, you don't have to remember anything.'",
        writer: "― Mark Twain"
     },
     {
        quote: "'I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'",
        writer: "― Maya Angelou"
    },
      {
        quote: "'It is our choices, Harry, that show what we truly are, far more than our abilities.'",
        writer: "― J.K. Rowling, Harry Potter and the Chamber of Secrets"
     },
    {
        quote: "'Life is what happens to us while we are making other plans.'",
        writer: "― Allen Saunders"
    },
    {
        quote: "'A woman is like a tea bag; you never know how strong it is until it's in hot water.'",
        writer: "― Eleanor Roosevelt"
    },
    {
        quote: "'Never put off till tomorrow what may be done day after tomorrow just as well.'",
        writer: "― Mark Twain"
    },
    
];
     oldIdx = arrIdx;
     arrIdx = Math.floor(Math.random() * quotes.length);
     while(arrIdx == oldIdx){
        arrIdx = Math.floor(Math.random() * quotes.length);

     }
    document.getElementById("quotes").innerHTML = quotes[arrIdx].quote;
    document.getElementById("writer").innerHTML = quotes[arrIdx].writer;
}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}