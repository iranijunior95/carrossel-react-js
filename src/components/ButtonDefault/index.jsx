import './style.css';

function ButtonDefault({children}) {
    return (
        <button
            type="button"
            className="btn-default"
        >
            {children}
        </button>
    );
}

export default ButtonDefault;