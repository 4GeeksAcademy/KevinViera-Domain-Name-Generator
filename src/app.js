import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the','our','a']
  let adj = ['huge','smart','strong']
  let noun = ['giant','guitar','dragon']
  let ext = ['.com','.net','.dev']

  for (let elm of pronoun) {
    for (let elm2 of adj) {
      for (let elm3 of noun) {
        for (let elm4 of ext) {
          let result = elm + elm2 + elm3 + elm4;
            console.log(result);
              document.querySelector('#name').innerHTML += "<ul>" + result + "</ul>"
        }
      }
    }
  }
}