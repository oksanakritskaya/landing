'use strict';

let cruises = [
    {
        name: 'Морской круиз в Анапу',
        route: 'Сочи-Лазаревское-Геленджик-Анапа',
        duration: '10 ч. 0 мин.',
        price: 49000
    },{
        name: 'Обзорная морская прогулка с экскурсией',
        route: 'Сочи-Адлер-Сочи (без высадки)',
        duration: '1 ч. 0 мин.',
        price: 5000
    },{
        name: 'Морская прогулка в Геленджик',
        route: 'Сочи-Туапсе-Геленджик',
        duration: '12 ч. 30 мин.',
        price: 7000
    },{
        name: 'Морской круиз в Новороссийск',
        route: 'Сочи-Геленджик-Новороссийск-Геленджик-Сочи',
        duration: '13 ч. 0 мин.',
        price: 14800
    },{
        name: 'Морская прогулка в Абрау-Дюрсо',
        route: 'Сочи-Абрау-Дюрсо',
        duration: '11 ч. 0 мин.',
        price: 14800
    }
];
/*window.addEventListener('click', (event) => {
    console.log('window click');
    if (!event.target.matches('.drop-dawn__menu--open')) {
        let elem = document.querySelector('.drop-dawn__menu--open').classList.remove('drop-dawn__menu--show');
    } else {
        window.removeEventListener('click', ()=> {});
    }
});*/

document.querySelector('.drop-dawn__button').addEventListener('click', () => {
    //console.log('dropdawn click');
    document.querySelector('.drop-dawn__menu--open').classList.toggle('drop-dawn__menu--show');
    if(document.querySelector('.drop-dawn__menu--open').classList.contains('drop-dawn__menu--show')) {
        document.querySelector('.drop-dawn__button').classList.add('drop-dawn__cross');
    } else {
        document.querySelector('.drop-dawn__button').classList.remove('drop-dawn__cross');
    }
    /*window.removeEventListener('click', ()=> {

});*/
});

function openPopup(num) {
    document.querySelector('.popup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.querySelector('.popup__title').innerHTML = cruises[num-1].name;
    document.querySelector('.popup__descr--route').innerHTML = cruises[num-1].route;
    document.querySelector('.popup__descr--duration').innerHTML = cruises[num-1].duration;
    document.querySelector('.popup__main-price').innerHTML = cruises[num-1].price+' руб.';

    /*window.addEventListener('click', (event) => {
        if(document.querySelector('.popup').style.display === 'inline') {
            console.log('popup inline');
            if (!event.target.matches('.popup__content')) {
                console.log('click into popup');
                document.querySelector('.popup').style.display = 'none';
            }
        } else {
            console.log('popup none');
        }
    });*/
}

document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
    document.body.style.overflow = 'auto';
});

var cardTemplate = document.getElementById('card-template').content.cloneNode(true);
var card = cardTemplate.querySelector('.card');

/*window.addEventListener('resize', function(event){
    if(window.innerWidth <= 1300) {
        let cards = document.getElementsByClassName('catalog__item');
        for(let i=0; i<cards.length; i++) {
            cards[i].classList.remove('catalog__main-item');
            cards[i].classList.remove('catalog__small-item');
        }

    }
});*/