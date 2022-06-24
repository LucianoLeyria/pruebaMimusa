import { BannerChica } from './components/BannerChica/BannerChica';
import { BannerGrande } from './components/BannerGrande/BannerGrande';
import { Buttons } from './components/Buttons/Buttons';
import { Lanzamientos } from './components/Lanzamientos/Lanzamientos';
import { Logos } from './components/Logos/Logos';
import { Header } from './components/Menu/Header/Header';
import jugador2 from './images/jugador2.png';
import fondojugador2 from './images/fondojugador2.png';
import styles from './App.module.css';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext/GlobalContext';
import { CardNoticias } from './components/CardNoticias/CardNoticias';
import { Noticias } from './components/Noticias/Noticias';
import { Artistas } from './components/Artistas/Artistas';
import { BannerFooter } from './components/BannerFooter/BannerFooter';
import { Footer } from './components/Footer/Footer';

function App() {
  const { mode } = useContext(GlobalContext);

  return (
    <div
      className={`${styles.app} ${
        mode.mode === 'light' ? styles.light : styles.dark
      }`}
    >
      <Header />
      <Lanzamientos />
      <Buttons />
      <BannerChica />
      <Logos />
      <BannerGrande
        h1='ACERCA DE'
        h1resaltado='NOSOTROS'
        p='StadioPlus es una empresa web3 que tiende un puente entre el mundo del deporte y los NFTs, democratizaremos el acceso a los aficionados al deporte permitiendo que todos descubran, recopilen, compren y vendan NFT de deporte. '
        imgjugador={jugador2}
        imgfondojugador={fondojugador2}
        dadovuelta
        parrafito='CONÓCENOS'
      />
      <Noticias />
      <Artistas />
      <BannerFooter />
      <Footer />
    </div>
  );
}

export default App;
