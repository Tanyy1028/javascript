const GkQuiz = [
    {
      "question": "What is the capital of India? ",
      "options": ["surat", "AP", "New Delhi", "YelMPlow"]
    },
    {
      "question": "How many legs does a dog have?",
      "options": ["6", "4", "2", "10"]
    },
    {
      "question": "Which month comes after June?",
      "options": ["May", "July", "August", "September"]
    },
    {
      "question": "What is the capital of France?",
      "options": ["London", "Rome", "Paris", "Berlin"]
    },
    {
      "question": "What do bees make?",
      "options": ["Milk", "Cheese", "Honey", "Butter"]
    },
    {
      "question": "Which shape has three sides?",
      "options": ["Circle", "Square", "Triangle", "Rectangle"]
    },
    {
      "question": "How many days are there in a week?",
      "options": ["5", "6", "7", "8"]
    },
    {
      "question": "What do you use to brush your teeth?",
      "options": ["Comb", "Toothbrush", "Spoon", "Towel"]
    },
    {
      "question": "Which planet do we live on?",
      "options": ["Mars", "Venus", "Earth", "Jupiter"]
    },
    {
      "question": "What do you call a baby dog?",
      "options": ["Kitten", "Puppy", "Cub", "Calf"]
    }
  ]
  

  const answer = [
    "New Delhi",
    "4",
    "July",
    "Paris",
    "Honey",
    "Triangle",
    "7",
    "Toothbrush",
    "Earth",
    "Puppy"
  ]
  let ques = document.querySelector("#question");
  let option = document.querySelectorAll(".option")
  let btn = document.querySelector("#btn")
 let currentindex = 0;

  function Quiz(index){
    ques.textContent = "Q" + (index+1) + ". "  + GkQuiz[index].question
    option.forEach((option,i)=>{
        option.textContent = GkQuiz[index].options[i]
    })
  }

  btn.addEventListener('click',()=>{
    currentindex++;
   if(currentindex<GkQuiz.length){
    Quiz(currentindex)
   }else{
    currentindex = 0;
    Quiz(currentindex)
   }
  })

  Quiz(currentindex)