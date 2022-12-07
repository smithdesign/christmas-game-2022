import Confetti from 'react-confetti'
import { useAppSelector } from '../hooks';
import { useWindowSize } from 'usehooks-ts';
import { numberFormat } from '../util/common_game';
import '../css/game.css';
import winnerImage from '../images/AdobeStock_167138412.477a64cf.webp';

function GameEnd() {
    const players = useAppSelector((state) => state.game.players);
    const { width, height } = useWindowSize();

    const sortScore = () => {
        return [...players].sort((a, b) => b.score - a.score);
    };

    const winner = players.reduce(function(prev, current) {
        return (prev.score > current.score) ? prev : current
    })

    const playersList = sortScore()
        .map((player, i) => (
            <tr key={player.id}>
                <td>
                    { i + 1 }
                </td>
                <td>
                    {player.name}
                </td>
                <td>{numberFormat(player.score)}</td>
            </tr>
        ));

    return (
        <div className="end-game">
            <div className="winner">
                <div className="winner-image">
                    <img src={winnerImage} alt="We Have a Winner!" width="500" />
                    <Confetti
                        width={width}
                        height={height}
                    />
                    <p id="confetti-target" className="winner-name">
                        {winner.name}
                    </p>
                    <p className="winner-score">
                        {numberFormat(winner.score)}
                    </p>
                </div>
            </div>
            <div className="results">
                <h2>Bonus Prize Pick Order</h2>
                <table className="results-table">
                    <thead>
                        <tr>
                            <th scope="col">Place</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount Won</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersList}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GameEnd;
