import ArrowLeft from './assets/images/Arrow Left.svg';
import ArrowRight from './assets/images/Arrow Right.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Popular items</h1>

      <div className='carousel'>
        <div className='carousel-list'>
          
        </div>

        <div className='carousel-arrows'>
          <button>
            <img src={ArrowLeft} alt="arrow left" />
          </button>
          
          <img src={ArrowRight} alt="arrow right" />
        </div>
      </div>
    </div>
  );
}

export default App;
