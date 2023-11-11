//звук 
let audioClose = new Audio('/sounds/knopka-jeskaya-korotkii-suhoi.mp3');

const MAINBACKGROUNDGRAY = document.querySelector('.main_gray-background');
const SCROLLMAINMENU = document.querySelector('.scrollMainMenu-container');
const SCROLLMAINMENUARROW = document.querySelector('.icon-arrow');
const SCROLLMAINMENUCAKEICON = document.querySelector('.icon-cake');
const POPUPCONTAINERICONCAKE = document.querySelector('.pop-up-window__icon-cake');
const POPUPCROSSICONCAKE = document.querySelector('.pop-up-window__cross');
const MAINSETTINGSICON = document.querySelector('.main-header__settings-img');


//функция подбёма всплыв. меню...........................
let startY = 0;
let currentY = 0;
let distance = 0;

SCROLLMAINMENU.addEventListener('touchstart', function (e) {
   startY = e.touches[0].clientY;
});

SCROLLMAINMENU.addEventListener('touchmove', function (e) {
   e.preventDefault;
   currentY = e.touches[0].clientY;
   distance = startY - currentY;

   SCROLLMAINMENU.style.bottom = + distance + 'px';
   if (distance < -6) {
      SCROLLMAINMENU.style.bottom = -190 + 'px';
   } else if (distance > 6) {
      SCROLLMAINMENU.style.bottom = -0 + 'px';
   }

   //rotateArrow
   if (distance < -1) {
      SCROLLMAINMENUARROW.style = 'transform: rotate(180deg);';
   } else if (distance > 1) {
      SCROLLMAINMENUARROW.style = 'transform: rotate(0deg);';
   }
})

//активация кнопки Cake..................................
SCROLLMAINMENUCAKEICON.onclick = function () {
   POPUPCONTAINERICONCAKE.style = 'right: 10vw;';
   MAINBACKGROUNDGRAY.style = 'right: 0vw;';
   audioClose.play();
}

//закрытие кнопки Cake...................................
POPUPCROSSICONCAKE.onclick = function () {
   POPUPCONTAINERICONCAKE.style = 'right: -80vw;';
   MAINBACKGROUNDGRAY.style = 'right: -100vw;';
   audioClose.play();
}
//активация кнопки Settings..................................
MAINSETTINGSICON.onclick = function () {
   MAINSETTINGSICON.style = 'fill: #CDA412;';
   audioClose.play();
}
