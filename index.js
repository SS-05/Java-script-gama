function begin(){
    setInterval(timer, 1000);
    reset();
}
var colors = ["Orange", "Green", "Blue", "Yellow"];
var right = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var correctInt = 0
function checkColor(color, correctAnswer){
    if(color===correctAnswer){
        correctInt++;
        correct.classList.add("fadeAway");
    }else{
        wrong.classList.add("fadeAway");
    }
    setTimeout(function(){
    correct.classList.remove("fadeAway");
    wrong.classList.remove("fadeAway");
    },500);
    reset();
    }
    function reset(){
    var clr = document.getElementById("clr");
     document.getElementById("start").style.display = "none";
    var random = Math.floor(Math.random() * 4);
    var correctAnswer = colors[random];
    clr.innerHTML = correctAnswer;
    
    
    if(random==1){
        clr.style.color = colors[random-1];
    }
    else
    {
        clr.style.color = colors[random+1];
    }
    

    clr.style.display = "block";
    addClick("Orange", correctAnswer);
    addClick("Green", correctAnswer);
    addClick("Blue", correctAnswer);
    addClick("Yellow", correctAnswer);
    
    
}
function addClick(color, correctAnswer){
    var colorIdentify = document.getElementById(color);
    let onclick = "checkColor('".concat(color,"','",correctAnswer,"')");
    colorIdentify.setAttribute("onclick", onclick);
}

var countdown = 10;
function timer(){
    document.getElementById("time").innerHTML = countdown;
    if(countdown==0){
        clearInterval(timer);
        alert("You're the best! Score: " + correctInt);
        location.reload();
    }
    countdown--;
}
