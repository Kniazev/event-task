window.addEventListener('load',function(){
    const button = document.querySelector('.request');
    const popup = document.querySelector('.popup');
    const closePopup = document.querySelector('.closePopup');
    const openMenu = document.querySelector('.openMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const menu = document.querySelector('.menu');

    button.addEventListener('click', () =>
    {
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });

    openMenu.addEventListener('click', ()=>{
        menu.style.left = 0;
    });

    closeMenu.addEventListener('click', ()=>{
        menu.style.left = '-50vw';
    });
});
