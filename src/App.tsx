import { useAppSelector } from './hooks';
import AddPlayers from './components/add-players';
import Board from './components/board';
import GameEnd from './components/game-end';
import PlayerControls from './components/player-controls';
import TitleScreen from './components/title-screen';

import './css/game.css';
import DrunkMary from './components/drunk-mary';

function App() {
    const gameStage = useAppSelector((state) => state.game.stage);

    return (
        <div className="stage">
            {gameStage === 'start' && <TitleScreen />}
            {gameStage === 'addPlayers' && <AddPlayers />}
            {gameStage === 'play' && <Board />}
            {gameStage === 'end' && <GameEnd />}
            {(gameStage === 'play' || gameStage === 'end') && (
                <PlayerControls />
            )}
            {gameStage === 'start' && <DrunkMary />}
        </div>
    );
}

export default App;
