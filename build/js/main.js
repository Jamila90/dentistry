'use strict';

let mainHeader = document.querySelector('.main-header');
let mainNav = document.querySelector('.main-header__nav');
let toggleBtn = document.querySelector('.main-header__toggle');
let introBtn = document.querySelector('.intro__btn');
let modalForm = document.querySelector('.modal-form');
let modalReception = document.querySelector('.modal-form-reception');
let toggleFormBtn = document.querySelector('.modal-form__toggle');
// let formBtn = document.querySelector('.form__btn');
let toggleCallBtn = document.querySelector('.modal-form-call__toggle');
let navLink = document.querySelector('.nav__link-form');
let modalCall = document.querySelector('.modal-form-call');
let addressBtn = document.querySelector('.address__btn');
let addressToggle = document.querySelector('.modal-form-reception__toggle');


introBtn.addEventListener('click', function () {
  modalForm.classList.add('modal-form--show');
});

addressBtn.addEventListener('click', function () {
  modalReception.classList.add('modal-form-reception--show');
});

navLink.addEventListener('click', function () {
  modalCall.classList.add('modal-form-call--show');
});

toggleFormBtn.addEventListener('click', function () {
  modalForm.classList.remove('modal-form--show');
});

toggleCallBtn.addEventListener('click', function () {
  modalCall.classList.remove('modal-form-call--show');
});

addressToggle.addEventListener('click', function () {
  modalReception.classList.remove('modal-form-reception--show');
});

mainHeader.classList.remove('main-header__nav--nojs');

toggleBtn.addEventListener('click', function () {
  mainNav.classList.toggle('nav--closed');
  toggleBtn.classList.toggle('main-header__toggle--closed');
});


$(document).ready(function () {
  $('.faq__question-trigger').click(function () {
    $(this).next('.faq__question-content').slideToggle(200);
  });

  $('.healthy-teeth__list-wrap').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '65px',
    slidesToShow: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '85px'
        }
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '105px'
        }
      }
    ]
  });

  $('.our-doctors__list-mini-wrap').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '15px',
    asNavFor: '.our-doctors__list-big-wrap'
  });
  $('.our-doctors__list-big-wrap').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.our-doctors__list-mini-wrap'
  });
});
