import './App.css'
import Conta from './criar-conta'
import Destaques from './destaques'
function App() {

  return (
    <div>
      <div className='painel'>
        <a><img src='../public/logo.svg' alt='logo'/></a>
        <a>Entregador</a>
        <a>Restaurante e Mercado</a>
        <a>Carreiras</a>
        <a>Ifood Card</a> 
        <Conta/> 
      </div>
      <div>
        <Destaques/>
      </div>
    </div>
    
    
  )
}

export default App 