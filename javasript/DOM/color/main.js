let btn = document.getElementById("submit-btn");
        btn.addEventListener('click', () => {
            let randomNumber = Math.random() * 16777216;
            let random = Math.floor(randomNumber);
            let color = "#"+ random.toString(16);
            document.body.style.backgroundColor=color;
            btn.textContent=color;
 });