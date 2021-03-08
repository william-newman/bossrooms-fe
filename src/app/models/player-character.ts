export class PlayerCharacter {
    firstName: string;
    lastName: string;
    description: string;
    moveSpeed: number;
    healthPoints: number;
    playerConditions: string[];
    initiative: number;

    constructor(
        firstName: string,
        lastName: string,
        description: string,
        moveSpeed: number,
        healthPoints: number,
        playerConditions: string[],
        initiative: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.moveSpeed = moveSpeed;
        this.healthPoints = healthPoints;
        this.playerConditions = playerConditions;
        this.initiative = initiative;
    }
}
