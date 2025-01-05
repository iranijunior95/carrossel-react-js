import ArrowLeft from './assets/images/Arrow Left.svg';
import ArrowRight from './assets/images/Arrow Right.svg';
import CardItems from './components/CardItems';
import ButtonDefault from './components/ButtonDefault';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Popular items</h1>

      <div className='carousel'>
        <ButtonDefault>
          <img src={ArrowRight} alt="arrow right" />
        </ButtonDefault>

        <div className='carousel-list'>
          <CardItems />

          <CardItems />

          <CardItems />

          <CardItems />

          <CardItems />

          <CardItems />

          <CardItems />

          <CardItems />
        </div>
        
        <ButtonDefault>
            <img src={ArrowLeft} alt="arrow left" />
        </ButtonDefault>
      </div>
    </div>
  );
}

export default App;
