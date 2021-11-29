var answers = ["Yes","No","Maybe","Absolutely","For sure","Not likely","NO WAY"];
let input_ = document.createElement('input');
input_.className = "input_";
document.body.append(input_);
input_.value='';
let ball = document.createElement('div');
ball.className = "ball";
ball.innerHTML = "Tap on the ball";
document.body.append(ball);
ball.addEventListener('click',()=>{
    if(input_.value==' '||input_.value=='')
    {
        ball.innerHTML="Tap on the ball";
        alert("Enter a question, dummy!");
    }
    else
    {
        ball.innerHTML=answers[Math.floor(Math.random()*answers.length)];
        input_.value = '';
	}
});
