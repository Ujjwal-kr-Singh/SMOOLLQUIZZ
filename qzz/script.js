const qbd=[
    {
        question:"strongest hashira",
        a:"rengoku",
        b:"tengen",
        c:"gyu",
        d:"mitsuri",
        ans:"ans3",
    },
    {
        question:"strongest mc in anime verse",
        a:"luffy",
        b:"naruto",
        c:"ichigo",
        d:"saitama",
        ans:"ans4",
    },    {
        question:"best female character",
        a:"nico robin",
        b:"mitsuri",
        c:"nami",
        d:"orihime",
        ans:"ans1",
    },    {
        question:"best mincraft mob",
        a:"creeper",
        b:"cow",
        c:"pig",
        d:"ender man",
        ans:"ans1",
    },    {
        question:"best side character in anime verse",
        a:"master Roshi",
        b:"prev sage",
        c:"goku",
        d:"gintama",
        ans:"ans2",
    },    {
        question:"which GTA version is better",
        a:"GTA SA",
        b:"GTA VC",
        c:"GTA V",
        d:"GTA IV",
        ans:"ans1",
    },    {
        question:"",
        a:"",
        b:"",
        c:"",
        d:"",
        ans:"",
    },    {
        question:"",
        a:"",
        b:"",
        c:"",
        d:"",
        ans:"",
    },    {
        question:"",
        a:"",
        b:"",
        c:"",
        d:"",
        ans:"",
    },    {
        question:"",
        a:"",
        b:"",
        c:"",
        d:"",
        ans:"",
    },
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const shscore=document.querySelector('#showScore');
let qc=0;
let score=0;
const loadQuestion=() =>{
    const list=qbd[qc];
    question.innerHTML = list.question;
    option1.innerHTML=list.a;
    option2.innerHTML=list.b;
    option3.innerHTML=list.c;
    option4.innerHTML= list.d;
}
const deslect=() =>{
    answers.forEach((ele) => ele.checked=false);
}
loadQuestion();
const getCheckeAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem ) => {
        if (curAnsElem.checked) {
            answer=curAnsElem.id;
        }  
    });
    return answer;
} ;
submit.addEventListener('click', () =>{
    const checkedAnswer= getCheckeAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==qbd[qc].ans){
        score++;
    };
    qc++;
    deslect();
    if(qc<qbd.length){
        loadQuestion();
    }else{
        shscore.innerHTML=`
        <h3> your score ${score}/${qbd.length} </h3>
        <button class="btn" onclick="location.reload()"> retry</button>
        `;
        shscore.classList.remove('scoreArea');
        submit.classList.add('sub');
    }
});
