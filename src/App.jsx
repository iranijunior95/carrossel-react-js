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
        <div className='carousel-list'>
          <CardItems />
        </div>
      <br />
        <div className='carousel-arrows'>
          <ButtonDefault>
            <img src={ArrowRight} alt="arrow right" />
          </ButtonDefault>

          <ButtonDefault>
            <img src={ArrowLeft} alt="arrow left" />
          </ButtonDefault>
        </div>
      </div>
    </div>
  );
}

export default App;
