import IconLocalizacao from '../../assets/images/Icon Localizacao.svg';
import './style.css';

function CardItems({image, nome, localizacao, preco}) {
    return (
        <div className='card-items'>
            <img 
                src={image} 
                alt="images"
                className='img-card' 
            />

            <div className='dados-card'>
                <h4 className='titulo'>{nome}</h4>

                <span className='lista-dados'>
                    <img src={IconLocalizacao} alt="icone localização" />
                    {localizacao}
                </span>

                <span className='preco'>{preco}</span>
            </div>

            <button 
                type="button"
                className='button-card'
            >Order Now</button>
        </div>
    );
}

export default CardItems;