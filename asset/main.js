// Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
// Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
// Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.
// BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Cosa conterrà il campo che rappresenta la foto in ciascun oggetto? Come possiamo fare per trasformarla in effettiva immagine visibile nell'html ?

let personale = [

  wayne = {
    'nome': 'Wayne Barnett',
    'posizione': 'Founder & CEO',
    'img': 'wayne-barnett-founder-ceo.jpg'
  },
  angela = {
    'nome': 'Angela Caroll',
    'posizione': 'Chief Editor',
    'img': 'angela-caroll-chief-editor.jpg'
  },
  walter = {
    'nome': 'Walter Gordon',
    'posizione': 'Office Manager',
    'img': 'walter-gordon-office-manager.jpg'

  },

  scott = {
    'nome': 'Scott Estrada',
    'posizione': 'Developer',
    'img': 'scott-estrada-developer.jpg'
  },
  barbara = {
    'nome': 'Barbara Ramos',
    'posizione': 'Graphic Designer',
    'img': 'barbara-ramos-graphic-designer.jpg'
  },

  angelal = {
    'nome': 'Angela Lopez',
    'posizione': 'Social Media Manager',
    'img': 'angela-lopez-social-media-manager.jpg'

  }
]

var empty = {};


for (var key in wayne) {
  console.log(wayne[key]);
}

for (let i = 0; i < personale.length; i++) {

  document.getElementById("cards").innerHTML += `   
  <div class="card p-2 my-2">
              <img src="./asset/img/${personale[i]["img"]}" class="card-img-top" alt="...">
              <div class="card-body">
                 <p class="card-">${personale[i]["nome"]}</p>
                 <p class="card-">${personale[i]["posizione"]}</p>
              </div>
            </div>        
         `
}