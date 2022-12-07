declare global {
    interface Player {
        id: string,
        name: string,
        score: number,
      }
      
    interface Square {
        id: string,
        name: number,
        amount: number,
        isChosen: boolean,
        icon: string
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
}

export {}
