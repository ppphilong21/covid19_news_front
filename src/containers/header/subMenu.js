function subMenu(){
    const subMenu = document.querySelector('.header-sub--responsive');
    const iconClickShow = document.querySelector('.menu-bars');
    const iconClickClose = document.querySelector('.menu-close');
    const iconShow = document.querySelector('.search-icon')
    console.log(subMenu );
   /* iconShow.addEventListener('click', () => {
        subMenu.classList.add('show');
        iconClickShow.classList.add('hide');
        iconClickClose.classList.remove('hide');
    })*/

    iconClickShow.addEventListener('click', () => {
        subMenu.classList.add('show');
        iconClickShow.classList.add('hide');
        iconClickClose.classList.remove('hide');
    })

    iconClickClose.addEventListener('click', () => {
        subMenu.classList.remove('show');
        iconClickShow.classList.remove('hide');
        iconClickClose.classList.add('hide');
    })

}

export default subMenu;
