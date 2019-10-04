//Creo la constante express para llamar al servidor
const express = require(`express`);
const app = express();

//Le indico que permita el uso de los contenidos de la carpeta client
app.use(express.static(__dirname + `/client`));

//Y le indico que me devuelva el archivo html y el JSON de la lista, pasado a string previamente
app.get(`/`, (require, response) => {
    response.sendFile(__dirname + `/client/index.html`);
});

app.get(`/discos`, (require,response) => {
    response.send(JSON.stringify(listaDiscos));
});

//Y llamo a mi local host con el numero 8379
app.listen(8379,()=> {
    console.log("Esto esta corriendo en puerto 8379!!!");
});

//El JSON + agregados
const listaDiscos =[
    {
      "artista": "The Beatles",
      "titulo": "Abbey Road",
      "lanzamiento": 1968,
      "tapa": "https://www.udiscovermusic.com/wp-content/uploads/2017/08/Abbey-Road.jpg",
      "video" : "https://www.youtube.com/watch?v=45cYwDMibGo"
    },
    {
      "artista": "The Rolling Stones",
      "titulo": "Flashpoint",
      "lanzamiento": 1991,
      "tapa": "https://stonesplanetbrazil.com/wp-content/uploads/2017/01/flash.jpg",
      "video" :"https://www.youtube.com/watch?v=k6dIdur9LsA"
    },
    {
      "artista": "Collective Soul",
      "titulo": "Live",
      "lanzamiento": 2017,
      "tapa": "https://direct.rhapsody.com/imageserver/images/alb.281495204/500x500.jpg",
      "video" : "https://www.youtube.com/watch?v=0mmCeRHFzjs"
    },
    {
      "artista": "Pearl Jam",
      "titulo": "Ten",
      "lanzamiento": 1991,
      "tapa": "https://img.cdandlp.com/2017/10/imgL/118972369.jpg",
      "video" : "https://www.youtube.com/watch?v=MS91knuzoOA"
    },
    {
      "artista": "Queen",
      "titulo": "A Night at the Opera",
      "lanzamiento": 1975,
      "tapa": "https://www.elquintobeatle.com/wp-content/uploads/2015/12/queen-a-night-at-the-opera-1.jpg",
      "video" : "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    },
    {
      "artista": "Arcade Fire",
      "titulo": "Everything Now",
      "lanzamiento": 2017,
      "tapa": "http://images.coveralia.com/audio/a/Arcade_Fire-Everything_Now-Frontal.jpg",
      "video" : "https://www.youtube.com/watch?v=zC30BYR3CUk"
    },
    {
       "artista": "Keane",
       "titulo": "Cause And Effect",
       "lanzamiento": 2019,
       "tapa": "http://www.theconcertinconcert.com/wp-content/uploads/2019/06/keane-1-2.jpg",
       "video" : "https://www.youtube.com/watch?v=VM5_w4hNlbs"
    },
    {
        "artista":"Twice",
        "titulo": "Fancy",
        "lanzamiento": 2019,
        "tapa": "https://gd.image-gmkt.com/li/923/048/1263048923.g_400-w-st_g.jpg",
        "video" : "https://www.youtube.com/watch?v=kOHB85vDuow"
    }
] 

    