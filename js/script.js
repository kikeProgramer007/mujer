 btnSi = document.getElementById('si'),
    btnNo = document.getElementById('no');

document.addEventListener('click', e => {
    var baseurl = getAbsolutePath()
    if (e.target === btnSi) {
    Swal.fire({
            title: 'Gracias😍',
            confirmButtonText: 'Dale click 😊',
             imageUrl: baseurl+'img/shuba-shuba-transparent.gif',
            // imageUrl: baseurl+'img/artificial.gif',
            imageWidth: 151,
            imageHeight: 128,
            width: 280,
            padding: '1em',
            color: '#716add',
            // background: 'linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)',
            background: 'linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)',
            // background: 'rgb(10, 11, 11)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("`+baseurl+`img/WS2k.gif")
              left top
              no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                // let url = "https://api.whatsapp.com/send?phone=593992039435&text=" + "Si acepto mi amor 🥰" + "%0A";
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
                // background: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)',
                imageWidth: 120,
                imageHeight: 120,
                imageAlt: 'Custom image',
              })
        }
    }
})

// Obtener ruta del proyecto
//opcion 1
/*function getRealPath(){
    var localObj = window.location;
    var contextPath = localObj.pathname.split("/")[1];
    var basePath = localObj.protocol + "//" + localObj.host + "/"+ contextPath;
    return basePath ;
}*/

//OPCION 2
function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

document.addEventListener('mouseover', e => {
    if (e.target == btnNo) {
        btnNo.style.left = `${numeroRandon(left1, left2, 'left')}%`;
        btnNo.style.top = `${numeroRandon(top1, top2, 'top')}%`;
    }
})

let left1 = 0, left2 = 0, top1 = 0, top2 = 0;

let numeroRandon = (x1, x2, direccion) => {
    let nRamdom = Math.floor(Math.random() * (+92 + 1 - +0)) + +0;
    x1 = nRamdom;

    if ((x1 - x2) <= 10 && (x1 - x2) >= 0) {
        if ((x1 + 10) > 92) {
            x1 -= 8;
        } else {
            x1 += 8;
        }
    }
    if ((x1 - x2) >= -10 && (x1 - x2) <= 0) {
        if ((x1 + 20) > 92) {
            x1 -= 20;
        } else {
            x1 += 20;
        }
    }
    if (direccion === "left") {
        left1 = x1;
        left2 = x1;
        console.log('l: ', left1, left2)
        return left1;
    }
    if (direccion === "top") {
        top1 = x1;
        top2 = x1;
        console.log('t: ', top1, top2)
        return top1;
    }
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