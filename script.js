const quizData = [
{
    question:"How old is Abhinav",
    a:'10',
    b:'20',
    c:'23',
    d:'32',
    correct:'c'
},
{
    question:"Who is Virat kohli",
    a:'Cricketer',
    b:'Footballer',
    c:'NBA Player',
    d:'None',
    correct:'a'
},
{   
    question:"Which of these is a bird",
    a:'Cow',
    b:'Eagle',
    c:'Cat',
    d:'Dog',
    correct:'b'

},
{
    question:"Which of these is a fruit",
    a:'Orange',
    b:'Apple',
    c:'Banana',
    d:'All of the above',
    correct:'d'

}

];
let currentQuestion=0;
const QuestionEl=document.getElementById('Question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const a_ans=document.getElementById('a')
const b_ans=document.getElementById('b')
const c_ans=document.getElementById('c')
const d_ans=document.getElementById('d')


    
const Question=[]

loadQuiz();
function loadQuiz()
{   
    if(currentQuestion<quizData.length)
    {const currentQ=quizData[currentQuestion]
    QuestionEl.innerText=currentQ.question
    a_text.innerText=currentQ.a
    b_text.innerText=currentQ.b
    c_text.innerText=currentQ.c
    d_text.innerText=currentQ.d
    }
   



}
function uncheckAll()
{
    var ele = document.getElementsByName("answer");
    for(var i=0;i<ele.length;i++)
       ele[i].checked = false;
}
let score=0;
function onSubmit()
{ const a_check=document.getElementById('a').checked
const b_check=document.getElementById('b').checked
    const c_check=document.getElementById('c').checked
    const d_check=document.getElementById('d').checked   
      
       
       if(currentQuestion<quizData.length)
       {const currentQ=quizData[currentQuestion]
           if(a_check)
       {   
           if(a_ans.id==currentQ.correct)
           {score++;
            }
       }
       else if(b_check)
       {
           if(b_ans.id==currentQ.correct)
           {score++;
            }
       }
       else if(c_check)
       {
        
           if(c_ans.id==currentQ.correct)
           {score++;
               
            }
       }
       else{
           if(d_ans.id==currentQ.correct)
           {score++;
            }
       }
       
            currentQuestion++;
        loadQuiz()
        uncheckAll()       
    }
    else{
        alert(score)
    }
    
}