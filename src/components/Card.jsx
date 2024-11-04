import "../assets/Card.css";

function Card({ onClick, picture, name }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={picture}></img>
            <h3>{name}</h3>
        </div>
    );
}

export default Card;
