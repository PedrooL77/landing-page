import MenuLogo from './components/MenuLogo';
import logo from './img/jordanvermelho.png';
import imagem from './img/airjordan.png';
import Sobre from './components/Sobre';
import foto from './img/animacaojordan.jpg';
import tenis from './img/Tenis.png';
import RodaPe from './components/RodaPe';

function App(props) {

  return (
    <>
    <MenuLogo logo={logo} imagem={imagem}></MenuLogo>
    <Sobre foto={foto} como="Como foi criado" 
    comoinf="Jordan estava disposto a assinar com a Adidas, já que a Nike, na época, era uma marca menor. Foi chamado o designer de calçados e lenda da Nike, Peter C. Moore." 
    inspiracao="Inspiração" 
    inspiracaoinf="O tênis foi inspirado na grande lenda do basquete, Michael Jordan" 
    tenis={tenis}
    nome="Tênis Air Jordan 1 Mid Masculino"
    preco="R$ 1199,99"
    SobreM="Sobre o Atleta" 
    resumo="Michael Jeffrey Jordan é um empresário e ex-basquetebolista estadunidense que atuava como ala-armador."></Sobre>
    <RodaPe termos="Termos"></RodaPe>
    </>
  )
}

export default App;
