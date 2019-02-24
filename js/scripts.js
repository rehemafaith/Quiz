var question1 = $("input:radio[name:answer1]:checked").val();
var question2 = $("input:radio[name:answer2]:checked").val();
var question3 = $("input:radio[name:answer3]:checked").val();
var question4 = $("input:radio[name:answer4]:checked").val();
var question5 = $("input:radio[name:answer5]:checked").val();
var score = 0

if (question1 == "1995"){
  return score++
};
if (question2 == "parseInt"){
  return score++
};
if (question3 == "module"){
  return score++
};
if (question4 == "yes"){
  return score++
};
if (question == "Hyper"){
  return score++
}



// user interface logic
$(document).ready(function(event){
  $("#questions").submit(function(event){
    var result = score
  });
});
