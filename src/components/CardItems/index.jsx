import IconLocalizacao from '../../assets/images/Icon Localizacao.svg';
import './style.css';

function CardItems() {
    return (
        <div className='card-items'>
            <img 
                src="/images/image01.png" 
                alt="images"
                className='img-card' 
            />

            <div className='dados-card'>
                <h4 className='titulo'>Cheese Burguer</h4>

                <span className='lista-dados'>
                    <img src={IconLocalizacao} alt="icone localização" />
                    Burger Arena
                </span>

                <span className='preco'>$3.88</span>
            </div>

            <button 
                type="button"
                className='button-card'
            >Order Now</button>
        </div>
    );
}

export default CardItems;