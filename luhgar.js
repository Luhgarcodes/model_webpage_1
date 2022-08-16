let quotes = document.getElementById("quotes");

let quote = ["accerlerate the decarbonization <br> of the rail industry","advancing the industry world wide",
            "supporting the digital transformation<br> of customers","5 reasons to work with <br>with RR Technlogies"];

setInterval(display, 5000);

function display(){
    const ran = Math.floor(Math.random()*3);
    quotes.innerHTML = quote[ran];
    console.log(quote[ran]);
}