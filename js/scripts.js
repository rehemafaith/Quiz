// Business logic
var add=function(question1,question2,question3,question4,question5){
 return question1+question2+question3+question4+question5
}
// UI logic
$(document).ready(function(){
 $("button#submit").click(function(){
 var question1=parseInt($("input:radio[name=answer1]:checked").val());
 var question2=parseInt($("input:radio[name=answer2]:checked").val());
 var question3=parseInt($("input:radio[name=answer3]:checked").val());
 var question4=parseInt($("input:radio[name=answer4]:checked").val());
 var question5=parseInt($("input:radio[name=answer5]:checked").val());
 var score=add(question1,question2,question3,question4,question5)
 $(".output").show();
 $(".card").hide();
 $("#gifer").show();
 $(".output").append("Your score is:" + score );
 event.preventDefault();


 })
});
