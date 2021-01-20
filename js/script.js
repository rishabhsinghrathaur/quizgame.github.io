let index = 0;
let attempt =0;
let score=0;
let wrong=0;
let questions = quiz.sort(function () {
     return 0.5 - Math.random();
});

let totalQuestions = questions.length;

$(function(){
  
   //time 
   let totaltime = 200;
   let min= 0;
   let sec=0;
    let counter=0;
   let timer= setInterval(function(){
       counter++;
       min= Math.floor((totaltime - counter)/60);
       sec= totaltime -(min*60) - counter;

       $(".timerBox span").text(min+"min:"+sec+"sec");
      // console.log("min="+min);
      // console.log(sec);
      if(counter==totaltime){
          alert("time's up.Press ok to show Result...")
          result();
          clearInterval(timer);

        }
    },1000);
    //ques
    printQuestion(index);

});

function printQuestion(i){
    //console.log(questions[0]);
    $(".qb").text(questions[i].question);
    $(".ob span").eq(0).text(questions[i].option[0]);
    $(".ob span").eq(1).text(questions[i].option[1]);
    $(".ob span").eq(2).text(questions[i].option[2]);
    $(".ob span").eq(3).text(questions[i].option[3]);
}

//ans
function checkAnswer(option) {
     attempt++;
    let optionClicked = $(option).data("opt");
    console.log(questions[index]);
     if(optionClicked == questions[index].answer){
      $(option).addClass("right"); 
      score++;

     }
     else{
         $(option).addClass("wrong");
         wrong++;

     }
     $(".scoreBox span").text(score);
         
     $(".ob span").attr("onclick","");


}
 
  //next
  function showNext(){
      if(index>=(questions.length - 1)){
          showResult(0);
          return;
      }
      index++;

      $(".ob span").removeClass();
      $(".ob span").attr("onclick", "checkAnswer(this)");

       printQuestion(index);
  }

//result

function showResult(j){
    if(j==1 && index < questions.length -1 &&  !confirm("Quiz has not yet finished. press ok to skip quiz...")){
      return;  

    }

    

 result();





}

//timeup
function result(){
$("#qscreen").hide();
$("#rscreen").show();

$("#totalquestions").text (totalQuestions);
$("#attemptquestion").text (attempt);
$("#correctAnswers").text (score);
$("#wronganswers").text (wrong);


}