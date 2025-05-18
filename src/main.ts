import './styles/style.css'
import { setupPlayer } from './components/player.ts'

// Insertion de HTML dans le DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="thecube">
      <div id="theplayer"></div>
    </div>
  </div>
`

// Appel de la fonction setupPlayer pour attacher l'événement
const player = document.querySelector<HTMLDivElement>('#theplayer');
if (player) {
  setupPlayer(player);  // On passe l'élément #theplayer à la fonction setupPlayer
} else {
  console.error("L'élément #theplayer n'a pas été trouvé !");
}

