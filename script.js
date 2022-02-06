function grade(){
    let score= 0;
    let Answer1= document.first.question1.value;
    let Answer2= document.first.question2.value;
    let Answer3= document.first.question3.value;
    let Answer4= document.first.question4.value;
    let Answer5=document.first.question5.value;
    let totalSum= document.getElementById("text");
    if (Answer1==="Float"){score+=20};
    if (Answer2==="Scripting"){score+=20};
    if (Answer3==="Methods/Functions"){score+=20};
    if (Answer4==="script") {score+=20};
    if (Answer5==="italics"){score+=20};
    if (score>=80){
        totalSum.textContent="Your score is 80%, you have excellently passed.";
    }
    else if (score>=50){
        totalSum.textContent="Your score is 50%, you have fairly passed.";
    }else{
        totalSum.textContent="You have performed poorly, retake the test."; 
    }
} 