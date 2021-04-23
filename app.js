/*window.scroll = () => {
    gsap.fromTo('.couple', { x: '+15%', ease: 'sine'}, {duration: 2.5, x: '150%', ease: 'sine'});
}

gsap.fromTo('.couple', { x: '+15%', ease: 'sine'}, {duration: 2.5, x: '150%', ease: 'sine'});

gsap.fromTo('.truck', { x: '-100%', ease: 'sine'}, {duration: 2.6, x: '1%', ease: 'sine', delay: .7});

gsap.fromTo('.man', { x: '+15%', ease: 'sine'}, {duration: 2.5, x: '0%', ease: 'sine'});
gsap.fromTo('.woman', { x: '-100%', ease: 'sine'}, {duration: 2.6, x: '1%', ease: 'sine', delay: .7});

gsap.fromTo('#question', { opacity: 0, ease: 'sine'}, {duration: 2.6, opacity: 1, ease: 'sine', delay: 1.9});
gsap.fromTo('#faq_man', { x: '+15%', ease: 'sine'}, {duration: 1.8, x: '55%', ease: 'sine'});

gsap.fromTo('.footer_images', { x: '-100%', ease: 'sine'}, {duration: 1.6, x: '0%', ease: 'sine', delay: .7}); */

let hamburger = document.querySelector('#hamburger');
let mobileMenu = document.querySelector('#mobile_menu');

hamburger.addEventListener('click', function(e) {
    mobileMenu.classList.toggle('show_mobileNav');
    console.log('click')
})

class Show_Answer {
    show(target, element, hide_plus) {
        target.addEventListener('click', () => {
            element.classList.toggle('answer_show');
            hide_plus.classList.toggle('plus_hide');
        })
    }

    loadmore(target, elements, hide_plus) {
        target.addEventListener('click', () => {
            elements.forEach(item => item.classList.toggle('hidden_reveal'));
            hide_plus.classList.toggle('plus_hide');
        })
    }
}

/* SHOW ANSWERS FOR VISIBLE QUESTIONS */
const question1 = new Show_Answer;
question1.show(document.querySelector('#que1'), document.querySelector('#answer1'), document.querySelector('#hide1')); 

const question2 = new Show_Answer;
question2.show(document.querySelector('#que2'), document.querySelector('#answer2'), document.querySelector('#hide2')); 

const question3 = new Show_Answer;
question3.show(document.querySelector('#que3'), document.querySelector('#answer3'), document.querySelector('#hide3')); 

const question4 = new Show_Answer;
question4.show(document.querySelector('#que4'), document.querySelector('#answer4'), document.querySelector('#hide4')); 

const question5 = new Show_Answer;
question5.show(document.querySelector('#que5'), document.querySelector('#answer5'), document.querySelector('#hide5')); 

const question6 = new Show_Answer;
question6.show(document.querySelector('#que6'), document.querySelector('#answer6'), document.querySelector('#hide6')); 

const question7 = new Show_Answer;
question7.show(document.querySelector('#que7'), document.querySelector('#answer7'), document.querySelector('#hide7')); 

const question8 = new Show_Answer;
question8.show(document.querySelector('#que8'), document.querySelector('#answer8'), document.querySelector('#hide8')); 

const question9 = new Show_Answer;
question9.show(document.querySelector('#que9'), document.querySelector('#answer9'), document.querySelector('#hide9')); 

const question10 = new Show_Answer;
question10.show(document.querySelector('#que10'), document.querySelector('#answer10'), document.querySelector('#hide10'));

const question11 = new Show_Answer;
question11.show(document.querySelector('#que11'), document.querySelector('#answer11'), document.querySelector('#hide11')); 

const question12 = new Show_Answer;
question12.show(document.querySelector('#que12'), document.querySelector('#answer12'), document.querySelector('#hide12')); 


/* LOAD MORE QUESTIONS */
const loadQuestions = new Show_Answer;
loadQuestions.loadmore(document.querySelector('#load'), document.querySelectorAll('.hidden'), document.querySelector('#hide13'));


/* SHOW ANSWERS FOR ADDITIONAL (HIDDEN) QUESTIONS */
const additionalQue1 = new Show_Answer;
additionalQue1.show(document.querySelector('#extraQue1'), document.querySelector('#extraAnsw1'), document.querySelector('#extraHide1')); 

const additionalQue2 = new Show_Answer;
additionalQue2.show(document.querySelector('#extraQue2'), document.querySelector('#extraAnsw2'), document.querySelector('#extraHide2')); 

const additionalQue3 = new Show_Answer;
additionalQue3.show(document.querySelector('#extraQue3'), document.querySelector('#extraAnsw3'), document.querySelector('#extraHide3')); 

const additionalQue4 = new Show_Answer;
additionalQue4.show(document.querySelector('#extraQue4'), document.querySelector('#extraAnsw4'), document.querySelector('#extraHide4')); 

const additionalQue5 = new Show_Answer;
additionalQue5.show(document.querySelector('#extraQue5'), document.querySelector('#extraAnsw5'), document.querySelector('#extraHide5')); 

const additionalQue6 = new Show_Answer;
additionalQue6.show(document.querySelector('#extraQue6'), document.querySelector('#extraAnsw6'), document.querySelector('#extraHide6')); 
