let wind = document.querySelectorAll(".window");
     wind.forEach((element) =>{
        element.addEventListener("click", (e) => {
            e.target.parentElement.classList.toggle("active");
        })
     })
   
  