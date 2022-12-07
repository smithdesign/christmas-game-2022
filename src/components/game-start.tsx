import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { changeStage } from '../reducers/gameSlice';
import PlayerList from './player-list';
import NewPlayerForm from './new-player-form';
import '../css/game.css';

function GameStart() {
    const dispatch = useAppDispatch();
    const players = useAppSelector((state) => state.game.players);
    const onChangeStage = (stage: string) => {
        dispatch(changeStage(stage));
    };

    return (
        <div className="game-start">
            <header className="game-start-header">
                <h1>Let&apos;s Add Some Players</h1>
            </header>
            <NewPlayerForm />
            <PlayerList />
            {players.length > 0
            && (
                <button className="no-radius candy-stripe" type="button" onClick={() => { onChangeStage('play'); }}>
                    START GAME
                </button>
            )}
        </div>
    );
}

export default GameStart;
