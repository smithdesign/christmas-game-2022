import React from 'react';
import { useAppSelector } from '../hooks';
import { numberFormat } from '../util/common_game';
import '../css/game.css';

function CurrentPlayerInfo() {
    const player = useAppSelector(
        (state) => state.game.players[state.game.turnIndex],
    );

    return (
        <div className="current-player-info">
            <p>
                {player.name}
                {' '}
                Pick a Box!
            </p>
            <p>
                {player.name}'s Current Cash:
                {' '}
                {numberFormat(player.score)}
            </p>
        </div>
    );
}

export default CurrentPlayerInfo;
