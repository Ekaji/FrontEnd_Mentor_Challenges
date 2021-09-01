let questions = document.querySelectorAll(".question")
let answers = document.querySelectorAll(".content")
let tabs = document.querySelectorAll(".tabbutton");
let divs = document.querySelectorAll(".divs");
let hr = document.createElement("hr");
let hamburger = document.querySelector(".icon");
let hamburgerToggle = document.querySelector(".hamburgermenu");



hamburger.addEventListener('click', () => {
    if (hamburgerToggle.style.display == "flex") {
        hamburgerToggle.style.display = "none";
      } else {
        hamburgerToggle.style.display = "flex";
      }
})

window.onload = () => {
    tabs[0].insertAdjacentElement('beforeend', hr)
    divs[0].classList.remove("hide");
}

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
    tab.insertAdjacentElement('beforeend', hr)
        divs.forEach(div => {
            div.classList.add("hide")
        });  
        divs[i].classList.remove("hide");
    })
})
  
let allQuestions = [...questions];
allQuestions.forEach( (question, i) => {
    question.addEventListener('click', (e) => {
        let tget = allQuestions[i].querySelector('.content')
        let rotateImg = allQuestions[i].querySelector('.imgButton')
        if(tget.classList.contains('hide')){
            tget.classList.remove('hide')
            rotateImg.classList.remove('rotateDown')
            rotateImg.classList.add('rotateUp')
    }else {
            tget.classList.remove('show')
            tget.classList.add('hide')
            rotateImg.classList.remove('rotateUp')
            rotateImg.classList.add('rotateDown')
        }
    })
})


let emailbutton = document.getElementById('emailbutton')

validateEmail = (e) => {
    let email = document.getElementById('email');

    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}  ~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

   let bademail = email.value == "please enter a valid email";

expression.test(String(email.value).toLocaleLowerCase()) ?  alert("sent") : alert("invalid Email") ;
e.preventDefault();
}


emailbutton.addEventListener("click", validateEmail)

