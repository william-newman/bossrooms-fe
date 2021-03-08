import { Injectable } from '@angular/core';
import { PlayerToken } from '../models/player-token';
import { PlayerTokenStyle } from '../models/player-token-style';

@Injectable({
  providedIn: 'root'
})
export class PlayerTokenDataService {
  tokens: PlayerToken[] = [];
  tokenStyle: PlayerTokenStyle = { backgroundColor: '', color: '' };
  tokenCapacity = 25;
  tokenIndex = 0;
  tokenDivStyle = {
    'z-index': 3,
    height: '50px',
    width: '50px',
  };
  tokenGraphicStyle = {
    height: this.tokenDivStyle.height,
    width: this.tokenDivStyle.width,
    stroke: '#b4d455',
    fill: 'black'
  };
  tokenLabel = {
    color: 'tomato'
  };
  lastDeletedToken: any;
  origin = 0;
  moveHistory: string[] = [];
  // Object layer for user authorization
  // currentDM = 'default-user';
  currentDM = 'Shelly';
  // Object layer for encounter authorization
  // currentEncounter = 'default-encounter';
  currentEncounter = 'enc1';
  fireDbTokenPath = 'main/' + this.currentDM + '/' + this.currentEncounter + '/tokens';

  constructor() {
    // const tokenList = fireRTDB.list(this.fireDbTokenPath);
    // tokenList.valueChanges().subscribe(tokenData => {
    //   this.tokenIndex = tokenData.length;
    // });
  }

  // Adds token by index, no data included
  addGenericToken(): void {
    if (this.tokens.length < this.tokenCapacity) {
      // Build default token
      const defToken = {
        id: this.tokenIndex,
        name: 'T' + this.tokenIndex,
        xOffset: this.origin,
        yOffset: this.origin,
        description: '',
        style: this.tokenStyle
      };
      // Add default token to tokens array
      this.tokens.push(defToken);

      // Tell Firebase about it
      // this.fireRTDB.database.ref(this.fireDbTokenPath + '/' + this.tokenIndex)
      //   .update(defToken);

      // Increment Token Id so no dupe generic tokens
      this.tokenIndex++;
    } else {
      console.log('max token error go here');
    }
  }

  addTokenWithData(tokenData: any): void {
    console.log(tokenData); // future impl
  }

  // Remove last added token and save it incase undo
  removeLastToken(): void {
    this.lastDeletedToken = this.tokens.pop();
    // this.fireRTDB.database.ref(this.fireDbTokenPath + '/' + (this.tokenIndex - 1)).remove();
  }

  removeTokenByData(tokenData: any): void {
    console.log(tokenData); // future impl
  }

  // coordEvent -> { x, y } coordinates for token
  // tokenId -> id of token
  onMoveEnd(coordEvent: any, tokenId: number): void {
    // Iterate through all tokens (._.) and find matching id
    // Add move data to service state token data
    this.tokens.forEach(token => {
      if (token.id === tokenId) {
        token.xOffset = coordEvent.x;
        token.yOffset = coordEvent.y;
      }
    });

    // Copy to Firebase
    // this.fireRTDB.database.ref(this.fireDbTokenPath + '/' + tokenId).update({
    //   xOffset: coordEvent.x,
    //   yOffset: coordEvent.y
    // });

    // Add move to move history array
    this.moveHistory.push('Token #' + tokenId + ' moved to ' + coordEvent.x + ', ' + coordEvent.y);
    console.log(this.moveHistory); // Later implementation
  }

  editTokenName(): void { }

  // pullTokenDataFromFirebase() {
  //   return this.fireRTDB.list(this.fireDbTokenPath);
  // }
}
