import { PlayerTokenStyle } from './player-token-style';

export class PlayerToken {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public xOffset: number,
        public yOffset: number,
        public style: PlayerTokenStyle
    ) { }
}
