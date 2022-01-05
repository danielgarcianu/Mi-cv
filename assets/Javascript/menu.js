const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

    iconoMenu.addEventListener('click', (e) => {

        //alteramos estilos para el menu y body
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');
    });