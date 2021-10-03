let easyBtn = document.querySelector(".easy-btn");
      let easyLink = document.querySelector(".easy");
      let hardBtn = document.querySelector(".hard-btn");
      let hardLink = document.querySelector(".hard");


      easyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("difficulty", "easy");
        console.log(localStorage.getItem("difficulty"));
        window.location = easyLink.href;
      });
      hardBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("difficulty", "hard");
        console.log(localStorage.getItem("difficulty"));
        window.location = hardLink.href;
      });