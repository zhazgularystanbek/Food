import tabs from './modules/tabs';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import modal from './modules/modal';
import slides from './modules/slides';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 955000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    calc();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slides({
        container : '.offer__slider',
        nextArrow : '.offer__slider-next',
        prevArrow : '.offer__slider-prev',
        totalCounter : '#total',
        currentCounter : '#current',
        wrapper : '.offer__slider-wrapper',
        field : '.offer__slider-inner',
        slide : '.offer__slide'
    });
    timer('.timer', '2023-04-17');



    // Forms
    //slider
    //calc
    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this._age = age;
    //     }

    //     #surname = 'Arstanbek';

    //     get sur() {
    //         return this.#surname;
    //     }

    //     set sur(surname) {
    //         this.#surname = surname;
    //     }

    //     info() {
    //         console.log(`${this.name}, ${this.#surname}, ${this._age}`);
    //     }
    // }

    // const us = new Person('Zhaz', 26);
    // us.info();
    // console.log(us.sur);

});