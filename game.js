player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 1;
player2_score = 1;

function names(){
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
}

function score(){
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
}

function qa(){
document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answerer").innerHTML = "Answer Turn - " + player2_name;
}

function send(){
number1 = document.getElementById("number_1").value;
number2 = document.getElementById("number_2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br> Answer : <input type='text' id='answer'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}