// Плавный скролл
$(document).ready(function () {
  $(".menu a, .go-top").on("click", function (event) {
     //отменяем стандартную обработку нажатия по ссылке
     event.preventDefault();

     //забираем идентификатор блока с атрибута href
     var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

     //анимируем переход на расстояние - top за 1500 мс
     $('body,html').animate({ scrollTop: top }, 1500);
  });
});
// Плавный скролл



"use strict"

// FORM
// document.addEventListener('DOMContentLoaded' , function () {
//    const form = document.getElementById('form');
//    form.addEventListener('submit', formSend);

//    async function formSend(e) {
//      e.preventDefault();

//      let error = formValidate(form);

//      let formData = new FormData(form);
//      formData.append('image', formImage.files[0]);

//      if (error === 0) {
//        form.classList.add('_sending');

//        let response = await fetch('sendmail.php', {
//          method: 'POST',
//          body: formData
//        });
//        if (response.ok) {
//         let resuld = await response.json();
//         alert(resuld.message);
//         formPreview.innerHTML = '';
//         form.reset();
//         form.classList.remove('_sending');
//        } else {
//          alert("Ошибка");
//          form.classList.remove('_sending');
//        }

//      } else {
//         alert('Заполните обязательные поля');
//      }
//    }


//    function formValidate(form) {
//      let error = 0;
//      let formReq = document.querySelectorAll('._req');

//      for (let index = 0; index < formReq.length; index++) {
//        const input = formReq[index];
//        formRemoveError(input);

//        if (input.classList.contains('_email')){
//          if (emailTest(input)){
//             formAddError(input);
//             error++;
//          }
//        } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//          formAddError(input);
//          error++;

//        } else {
//          if (input.value === '') {
//            formAddError(input);
//            error++;
//          }
//        }

//      }
//      return error;

//    }
   
//    function formAddError(input) {
//      input.parentElement.classList.add('_error');
//      input.classList.add('_error');
//    }
//    function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//   }

//   // Функция теста email
//    function emailTest(input) {
//       return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//    }

// });

// $(document).ready(function() {

	//E-mail Ajax Send
	$(".form__body").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

// });
// FORM









   $('.heroes-__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
       asNavFor: '.heroes__slider-text',
       prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
       nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
       responsive: [
         {
           breakpoint: 769,
           settings: {
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots',
           }
         }
      ]  
    });
    $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes-__slider-img',
      fade: true,
      arrows: false
    });








 


//  $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		autoScrolling:true,
// 		scrollHorizontally: true,
//     sectionSelector: '.page-section',
// 	});
// });


/* БУРГЕР */

$(function(){
  $('.menu__btn').on('click', function (click) {
   $('.menu__btn').toggleClass('menu__btn--active');
   $('.menu').toggleClass('menu--active')
  });

   $('.menu__list-link').on('click', function (){
     $('.menu__btn').removeClass('menu__btn--active');
     $('.menu__list').removeClass('menu__list--active');
     $('.menu').removeClass('menu--active');
   });



});

/* БУРГЕР */