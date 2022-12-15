declare global {
    interface Player {
        id: string,
        name: string,
        score: number,
        icon: string
      }
      
    interface Square {
        id: string,
        name: number,
        amount: number,
        isChosen: boolean,
        icon: string,
        iconAlt?: string
    }

    interface SquareUpdate {
        id: string,
        icon: string,
        iconAlt: string,
        isChosen: boolean,
    }

    interface PlayerScore {
        id: string,
        score: number
    }
    
    interface GameState {
        stage: string,
        turnIndex: number,
        players: Array<Player>,
        squares: Array<Square>
    }

    interface ModalHeaderBlurbs {
        bad: string[],
        meh: string[],
        good: string[],
        great: string[]
    }

    interface Icon {
        icon: string,
        size?: number,
        description?: string
    }
}

export {}
