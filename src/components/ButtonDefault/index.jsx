import './style.css';

function ButtonDefault({children, handleClick}) {
    return (
        <button
            type="button"
            className="btn-default"
            onClick={(event) => handleClick(event)}
        >
            {children}
        </button>
    );
}

export default ButtonDefault;