import { Component, OnInit } from '@angular/core';
import { PlayerToken } from 'src/app/models/player-token';
import { GridDataService } from 'src/app/services/grid-data.service';
import { PlayerTokenDataService } from 'src/app/services/player-token-data.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  dragHandle: any;
  tokenDiv = {
    'z-index': 3,
    height: '50px',
    width: '50px',
  };
  tokenGraphic = {
    height: this.tokenDiv.height,
    width: this.tokenDiv.width,
    stroke: '#b4d455',
    fill: 'black'
  };
  tokenLabel = {
    color: 'tomato'
  };
  tokenNumber = 1;
  tokens: PlayerToken[] = [];
  boundaryStyle = {
    width: '100%',
    height: '100%'
  };
  lastMove = {
    xPosition: 0,
    yPosition: 0,
    idOfMovedToken: 0
  };
  gridSize = 50;

  constructor(private playerTokenDataSvc: PlayerTokenDataService, private gridDataSvc: GridDataService) {
    // playerTokenDataSvc.pullTokenDataFromFirebase()
    //   .valueChanges()
    //   .subscribe((tokenList) => {
    //     this.tokens = tokenList;
    //     playerTokenDataSvc.tokens = this.tokens;
    //   });
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.adjustBoundary();
  }

  // Move bounds based on grid and gridbox size
  adjustBoundary(): void {
    this.boundaryStyle.width = (
      this.gridDataSvc.gridXArr.length * this.gridDataSvc.gridBoxDimensions.width * 1.5
    ) + 'px';
    this.boundaryStyle.height = (
      this.gridDataSvc.gridYArr.length * this.gridDataSvc.gridBoxDimensions.height * 1.5
    ) + 'px';
  }

  // Passes simple { x, y } coord object and token id to service after token moves
  // If token actually moved
  onMoveEnd(coordEvent: any, tokenId: number): void {
    if (
      this.lastMove.xPosition === coordEvent.x &&
      this.lastMove.yPosition === coordEvent.y &&
      this.lastMove.idOfMovedToken === tokenId
    ) {
      console.log('no move'); // show info when only clicked
    } else {
      this.playerTokenDataSvc.onMoveEnd(coordEvent, tokenId);
      this.lastMove = {
        xPosition: coordEvent.x,
        yPosition: coordEvent.y,
        idOfMovedToken: tokenId
      };
    }
  }
}
