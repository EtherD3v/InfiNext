import './styles/style.css'
import { setupPlayer } from './components/player.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id='thecube'>
      <div id='theplayer'></div>
    </div>
  </div>
`

// Let's go !

setupPlayer();


