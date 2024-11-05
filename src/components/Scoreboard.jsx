import "../assets/Scoreboard.css";

function ScoreBoard({ score, bestScore }) {
    return (
        <div className="right-header">
            <p>Score: {score}</p>
            <p>Best score: {bestScore}</p>
        </div>
    );
}

export default ScoreBoard;
