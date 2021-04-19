var app = new Vue(
    {
        el: '#root',
        data: {
            h1Class: 'red',
            bottone: 'cambia con il colore blu',
            bottoneImg: 'Comparire immagine',
            image: ''
        },
        methods: {
            changeTitleColor() {
                if( this.h1Class == 'blue') {
                    this.h1Class = 'red'
                    this.bottone = 'cambia con il colore blu'
                } else {
                    this.h1Class = 'blue'
                    this.bottone = 'cambia con il colore rosso'
                }
            },
            appearImage() {
                if( this.image == 'img/logo.png' ) {
                    this.image = ''
                    this.bottoneImg = 'Comparire immagine'
                } else {
                    this.image = 'img/logo.png'
                    this.bottoneImg = 'Togliere immagine'
                }
            } 
        }
    }
);