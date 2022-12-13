import drunkMary from '../images/drunk-mary.png';
import '../css/game.css';

function DrunkMary() {
    return (
        <p className="mary">
            <img src={drunkMary} alt="Drunk Mary Icon" /> A Drunk Mary
            Production
        </p>
    );
}

export default DrunkMary;