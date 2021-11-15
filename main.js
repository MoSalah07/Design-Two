let iconToggle = document.querySelector( '.icon-toggle' );
iconToggle.addEventListener('click', _ => {
    document.querySelector( '.sidebar' ).classList.toggle( 'close' );
});

let toggleInfoCard = document.querySelector( '.toggle-info-card' );
toggleInfoCard.addEventListener('click', _ => {
    document.querySelector('.info-card').classList.toggle('hide-info');
});