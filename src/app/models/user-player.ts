import { PlayerCharacter } from './player-character';

export class UserPlayer {
    uid: string;
    email: string;
    username: string;
    password: string;
    role: string;
    status: string;
    playerCharacter: PlayerCharacter[];

    constructor(uid: string,
                email: string,
                username: string,
                password: string,
                role: string,
                status: string,
                playerCharacter: PlayerCharacter[]) {
        this.uid = uid;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
        this.status = status;
        this.playerCharacter = playerCharacter;
    }
}
