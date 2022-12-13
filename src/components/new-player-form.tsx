import React from 'react';
import uuid from 'react-uuid';
import { useAppDispatch } from '../hooks';
import { addPlayer } from '../reducers/gameSlice';
import '../css/game.css';

function NewPlayerForm() {
    const dispatch = useAppDispatch();
    const ref = React.useRef<HTMLInputElement>(null);

    const onAddPlayer = (e: React.FormEvent) => {
        e.preventDefault();
        
        // eslint-disable-next-line no-undef
        const data = new FormData(e.target as HTMLFormElement);
        const name = data.get('name') as string;

        if(name) {
            const player = {
                id: uuid(),
                name,
                score: 0,
            };
            
            if(ref.current) {
               ref.current.value = ''; 
            }

            dispatch(addPlayer(player));
        }
        
    };

    return (
        <div className="player-form">
            <div className="player-stage">
                <form onSubmit={onAddPlayer} className="form-new-player">
                    <input ref={ref} type="text" name="name" id="new-player-name" data-test="new-player-name" autoFocus />
                    <button type="submit" className="no-left-radius" id="new-player-button" data-test="new-player-button">Add Player</button>
                </form>
            </div>
        </div>
    );
}

export default NewPlayerForm;
