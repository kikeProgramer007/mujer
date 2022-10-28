btnSi = document.getElementById('si'),
btnNo = document.getElementById('no');

document.addEventListener('click', e => {
    var baseurl = getAbsolutePath()
    if (e.target === btnSi) {
    Swal.fire({
            title: 'Gracias😍',
            confirmButtonText: 'Dale click 😊',
            imageUrl: baseurl+'img/shuba-shuba-transparent.gif',
            imageWidth: 151,
            imageHeight: 128,
            width: 280,
            padding: '1em',
            color: '#716add',
            background: 'linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("`+baseurl+`img/WS2k.gif")
              left top
              no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                let url = baseurl+'music.html';
                window.open(url, "Enviar");
            }
        })
    }else{
        if (e.target === btnNo) {
              Swal.fire({
                title: 'Nooooo...',
                width: 340,
                text: 'Bueno al menos tuve el valor de intentarlo.',
                color: '#fffff',
                imageUrl: baseurl+'img/calamardo.gif',
                background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
                imageWidth: 120,
                imageHeight: 120,
                imageAlt: 'Custom image',
              })
        }
    }
})

// Obtener ruta del proyecto
function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});

