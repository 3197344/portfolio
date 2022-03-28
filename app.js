const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");


function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i += 1){
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }


    // Section Active
    allSections.addEventListener('click', (evt) => {
        const id = evt.target.dataset.id;

        if (id) {
            // remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            evt.target.classList.add('active');

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
};

pageTransitions();

