'use strict';

let mainContent = document.querySelector('.main-content');
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
  mainContent.classList.toggle('main-content--none');
});

//Аккардеон
const ready = $(document).ready(function () {
  $('.faq__question-item').click(function () {
    $(this).find('.faq__question-content').toggleClass('faq__question-content--show').slideToggle(400);
    $(this).toggleClass('faq__question-item--up')
      .siblings('.faq__question-item--up');
  });

//Слайдер блока Здоровые зубы
	$('.healthy-teeth__list-wrap').slick({
		arrows: true,
		centerMode: true,
		centerPadding: '75px',
		slidesToShow: 1,
		infinite: true,
		dots: true,
		speed: 600,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerPadding: '85px',
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				},
			},
		],
	});

	//Слайдер в блоке Наши врачи
	$('.our-doctors__list-mini-wrap').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '160px',
		asNavFor: '.our-doctors__list-big-wrap',
		focusOnSelect: true,
		vertical: false,
		infinite: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					vertical: true,
					verticalSwiping: true,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true
				},
			},
		],
	});
	$('.our-doctors__list-big-wrap').slick({
		arrows: true,
		asNavFor: '.our-doctors__list-mini-wrap',
	});

  $('.gift__img-wrap').beforeAfter();
});
