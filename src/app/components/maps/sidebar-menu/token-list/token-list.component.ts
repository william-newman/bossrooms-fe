import { Component, OnInit } from '@angular/core';
import { PlayerTokenDataService } from 'src/app/services/player-token-data.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent implements OnInit {

  constructor(private playerTokenDataSvc: PlayerTokenDataService) { }

  ngOnInit(): void {
  }

  openTokenList(): void {
    console.log('not token list yet');
  }

  addToken(tokenData: any): void {
    if (tokenData === null) {
      this.playerTokenDataSvc.addGenericToken();
    } else {
      this.playerTokenDataSvc.addTokenWithData(tokenData);
    }
  }

  // If given data, remove specific token
  removeToken(tokenData: any): void {
    if (this.playerTokenDataSvc.tokens.length > 0) {
      if (tokenData === null) {
        this.playerTokenDataSvc.removeLastToken();
      } else {
        this.playerTokenDataSvc.removeTokenByData(tokenData);
      }
    } else {
      console.log('No tokens');
    }
  }
}
