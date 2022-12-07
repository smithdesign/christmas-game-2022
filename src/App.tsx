import { useAppSelector, useAppDispatch } from './hooks';
import Board from './components/board';
import GameStart from './components/game-start';
import GameEnd from './components/game-end';
import { changeStage, ezEnd, newGame } from './reducers/gameSlice';
import './css/game.css';
import drunkMary from './images/drunk-mary.png';

function App() {
    const dispatch = useAppDispatch();
    const gameStage = useAppSelector((state) => state.game.stage);
    const squares = useAppSelector((state) => state.game.squares);

    const determineWinner = () => {
        if (squares.every((square) => square.isChosen)) {
            // End game
            dispatch(changeStage('end'));
        }
    };

    const onChangeStage = (stage: string) => {
        dispatch(changeStage(stage));
    };

    const onEzEnd = () => {
        const output = squares.map((square) => ({
            ...square,
            isChosen: true,
        }));

        dispatch(ezEnd(output));
    };

    const onNewGame = () => {
        dispatch(newGame());
    };

    determineWinner();

    return (
        <div className="stage">
            {(gameStage === 'play' || gameStage === 'end') && (
                <div className="play-controls">
                    <button type="button" onClick={onNewGame}>New Game</button>
                    <button type="button" onClick={onEzEnd}>End Game</button>
                </div>
            )}

            {gameStage === 'start' && (
                <div className="title">
                    <div className="title-content">
                        <h1>Santa&apos;s Big Fat Ass Bonus Game</h1>
                        <button
                            type="button"
                            data-test="start-game-button"
                            onClick={() => {
                                onChangeStage('addPlayers');
                            }}
                        >
                            Start Game
                        </button>
                    </div>
                </div>
            )}
            {gameStage === 'addPlayers' && <GameStart />}
            {gameStage === 'play' && <Board />}
            {gameStage === 'end' && <GameEnd />}
            {gameStage === 'start' && (
                <p className="mary">
                    <img src={drunkMary} alt="A drunk Mary production" /> A Drunk Mary Production
                </p>
            )}
        </div>
    );
}

export default App;
