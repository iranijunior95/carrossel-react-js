import { useRef } from 'react';
import ArrowLeft from './assets/images/Arrow Left.svg';
import ArrowRight from './assets/images/Arrow Right.svg';
import CardItems from './components/CardItems';
import ButtonDefault from './components/ButtonDefault';
import './App.css';

function App() {
  const listaCards = [
    {
      id: 1,
      image: '/images/image01.png',
      nome: 'Cheese Burger',
      localizacao: 'Burger Arena',
      preco: '$3.88'
    },

    {
      id: 2,
      image: '/images/image02.png',
      nome: 'Toffe’s Cake',
      localizacao: 'Top Sticks',
      preco: '$4.00'
    },

    {
      id: 3,
      image: '/images/image03.png',
      nome: 'Dancake',
      localizacao: 'Cake World',
      preco: '$1.99'
    },

    {
      id: 4,
      image: '/images/image04.png',
      nome: 'Crispy Sandwitch',
      localizacao: 'Fastfood Dine',
      preco: '$3.00'
    },

    {
      id: 5,
      image: '/images/image05.png',
      nome: 'Thai  Soup',
      localizacao: 'Foody man',
      preco: '$2.79'
    }
  ];
  
  const carrosel = useRef(null);

  function handleClick(e) {
    e.preventDefault();

    const direcao = e.target.children[0] === undefined ? e.target.alt : e.target.children[0].alt;
    
    if(direcao === 'arrow right') {
      carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    }else {
      carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }
  }

  return (
    <div className='container'>
      <h1>Popular items</h1>

      <div className='carousel'>
        <ButtonDefault
          handleClick={handleClick}
        >
          <img src={ArrowRight} alt="arrow right" />
        </ButtonDefault>

        <div 
          className='carousel-list'
          ref={carrosel}
        >
          {listaCards.map((card) => (
            <CardItems 
              key={card.id}
              image={card.image}
              nome={card.nome}
              localizacao={card.localizacao}
              preco={card.preco}
            />
          ))}
        </div>

        <ButtonDefault
          handleClick={handleClick}
        >
            <img src={ArrowLeft} alt="arrow left" />
        </ButtonDefault>
      </div>
    </div>
  );
}

export default App;
