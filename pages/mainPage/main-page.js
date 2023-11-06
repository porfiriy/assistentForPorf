const SCROLLMAINMENU = document.querySelector('.scrollMainMenu-container');
const SCROLLMAINMENUARROW = document.querySelector('.icon-arrow');
const SCROLLMAINMENUCAKEICON = document.querySelector('.icon-cake');


//функция подбёма всплыв. меню.............................
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
   if (distance < -40) {
      SCROLLMAINMENU.style.bottom = -270 + 'px';
   } else if (distance > 60) {
      SCROLLMAINMENU.style.bottom = 0;
   }

   //rotateArrow
   if (distance < -1) {
      SCROLLMAINMENUARROW.style = 'transform: rotate(180deg);';
   } else if (distance > 1) {
      SCROLLMAINMENUARROW.style = 'transform: rotate(0deg);';
   }
})
//the end ..............................................................

//активация кнопки Cake..................................
function buttonActivation() {
   console.log('lop');
}
SCROLLMAINMENUCAKEICON.onclick = function () {
   console.log('lop');
}