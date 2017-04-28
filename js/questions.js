//pos is position of where the user in the test or which question they're up to, this sets the variables
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

//Here there are the questions multidimensional array with 4 inner array elements with 5 elements inside them

var questions= [
  ["What is the biggest lake in Ireland?", "Lough Derg", "Lough Neagh", "Lough Corrib", "B"],
  ["Which of these political parties is the oldest?", "Labour Party", "Finna Fail", "Fine Gael", "A"],
  ["Which of these counties has the biggest population?", "Limerick", "Galway", "Cork", "C"],
  ["Which province has the fewest counties?", "Ulster", "Connacht","Munster", "B"],
  ["If carpets in the Dáil chamber are blue, what colour are the carpets in the Seanad?", "Green","Blue", "Red", "B"],
  ["In what year did George Bernard Shaw die?", "1950", "1995", "1945", "A"],
  ["Which county has won more All-Irelands? Kilkenny in hurling, or Kerry in football?", "Kilkenny", "Same amount","Kerry","C"],
  ["To which county can Barack Obama trace his Irish roots to?", "Westmeath", "Offaly", "Tipperary", "B"],
  ["Which county is nicknamed The Treaty County?", "Waterford", "Laois", "Limerick", "C"],
  ["Which canal is situated at Croke Park’s Canal End?", "There is no canal, it’s all a conspiracy", "Royal Canal", "Grand Canal", "B"],
  ["What is the second smallest county in Ireland?", "Carlow", "Louth", "Laois", "A"],
  ["The Book of Kells is written in what language?", "Irish", "English", "Latin", "C"],
  ["What is the county town of Donegal?", "Letterkenny", "Lifford", "Donegal town", "B"],
  ["What is the second longest river in Ireland?", "River Suir", "River Barrow", "River Shannon", "B"],
  ["What does GAA stand for?", "Gaelic Athletic Association", "Gealtach Athletic Association", "Gealtach Athletic Academy", "A"],
  ["Who duetted with Westlife on Against All Odds?", "Robbie Williams", "Olly Murs", "Mariah Carey", "C"],
  ["In the Irish broadcasting company RTE, what does the R stands for?", "Reconnect", "Radio", "Report", "B"],
  ["What was the Irish Examiner previously called?", "The Irish News", "The Irish Press", "The Cork Examiner", "C"],
  ["What does the circle in the centre of the celtic cross represent?", "The Sun", "Wisdom", "Unity", "A"],
  ["What are the Twelve Bens?", "A pub", "Mountains", "A landmark", "B"],
  ];

// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
//Setting underscore equal to document.getElementById (handy shortcut)
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}
//Insert Javascript functions renderQuestion() & checkAnswer() here
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Thank you for completing the quiz";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  
  	var bar=document.getElementById("progressBar");//Progress bar value
  
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  bar.value = (pos+1)//Progress bar increments as we go trhough questions, starts at 1
  
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);
