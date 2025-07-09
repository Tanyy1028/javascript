 const img = document.getElementById("img");
const next = document.getElementById("Next");
const prev = document.getElementById("Previous");
const auto = document.getElementById("Autoplay");
const stop = document.getElementById("Stopauto");

let arrImg = [
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661412706592-0d43f0b0b440?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRveXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1595550903979-1969e5adeb92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG95c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXN8ZW58MHx8MHx8fDA%3D",
];

let currIndex = 0;
let id;

function Images(index) {
  img.src = arrImg[index];
}

Images(currIndex);

function NextImg() {
  if (currIndex < arrImg.length - 1) {
    currIndex++;
    Images(currIndex);
  } else {
    currIndex = 0;
    Images(currIndex);
  }
}

next.addEventListener("click", () => {
  NextImg();
});

function PrevImg() {
  if (currIndex > 0) {
    // 4>4
    currIndex--;
    Images(currIndex);
  }
}

prev.addEventListener("click", () => {
  PrevImg();
});

function AutoPlay() {
 id= setInterval(() => {
    if (currIndex < arrImg.length - 1) {
      currIndex++;
      Images(currIndex);
    } else {
      currIndex = 0;
      Images(currIndex);
    }
  },1000);
}

auto.addEventListener('click',()=>{
    AutoPlay()
})

function StopPlay(){
   clearInterval(id)
}

stop.addEventListener('click',()=>{
    StopPlay()
})