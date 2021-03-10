import { Component, DoCheck, OnInit } from '@angular/core';
import { GridDataService } from 'src/app/services/grid-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, DoCheck {
  gridXArr: number[] = []; // Grid row size
  gridYArr: number[] = []; // Grid column size
  // Values for grid-table styling, height will be overwritten
  gridStyle = {
    'background-repeat': 'none',
    'background-size': '100% 100%',
    'background-image': '',
    height: '500px',
    width: '500px'
  };
  // Base size of grid box, will be pixels
  gridBoxSize = {
    height: 0,
    width: 0
  };
  // Separate string value since calculations are hard when things are strings
  gridBoxSizePixels = {
    height: this.gridBoxSize.height + 'px',
    width: this.gridBoxSize.width + 'px'
  };
  // SVG box styling
  gridBoxStyle = {
    height: this.gridBoxSizePixels.height,
    width: this.gridBoxSizePixels.width,
    fill: 'rgba(83, 83, 83, 0.1)',
    'stroke-width': 2,
    stroke: 'rgb(0, 0, 0, 0.3)'
  };
  gridlineOpacity = 0.2;
  gridlineColorHex = '#666666';
  currentBackground =
    'url(https://firebasestorage.googleapis.com/v0/b/boss-rooms.appspot.com/o' +
    '/main%2Fdefault-user%2Fdefault-encounter%2Fimages%2FCabin.png?alt=media&' +
    'token=83bf4d61-d8c6-4843-8f31-3c65bbb08cca)';

  constructor(private gridDataSvc: GridDataService) {
    // gridDataSvc.pullGridDataFromFireRTDB()
    //   .valueChanges().subscribe((gridData: Grid) => {
    //     this.gridBoxSize.height = gridData.yBoxLength;
    //     this.gridBoxSize.width = gridData.xBoxLength;
    //     this.gridlineOpacity = gridData.gridlineOpacity;
    //     this.gridlineColorHex = gridData.gridlineColor;
    //     this.pullBackgroundImage(gridData.gridBackgroundImageURL);
    //     this.createGridArrays(gridData.xLength, gridData.yLength);
    //   });
  }

  // Initialize and set background image as default placeholder
  ngOnInit(): void {
  }

  // Check for change, call createGrid
  ngDoCheck(): void {
    this.gridDataSvc.adjustArrays(this.gridXArr, this.gridYArr);
    this.createGrid();
  }

  // Make grid by data in service, call adjustBackground
  createGrid(): void {
    this.gridBoxSize = this.gridDataSvc.gridBoxDimensions;
    this.gridBoxSizePixels = {
      height: this.gridBoxSize.height + 'px',
      width: this.gridBoxSize.width + 'px'
    };
    this.adjustBackground();
  }

  // Fix the background picture to stretch to the grid level
  // Adjust gridbox size to current numbers
  adjustBackground(): void {
    this.gridBoxStyle.height = this.gridBoxSize.height + 'px';
    this.gridBoxStyle.width = this.gridBoxSize.width + 'px';
    this.gridStyle.height = (this.gridYArr.length * this.gridBoxSize.height) + 'px';
    this.gridStyle.width = (this.gridXArr.length * this.gridBoxSize.width) + 'px';
    this.adjustGridlineColor();
  }

  convertHexToRgb(): object | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.gridlineColorHex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Update gridline color
  adjustGridlineColor(): void {
    const rgb = this.convertHexToRgb();
    // this.gridBoxStyle.stroke = 'rgb(' +
    //   rgb.r + ', ' +
    //   rgb.g + ', ' +
    //   rgb.b + ', ' +
    //   this.gridlineOpacity + ')';
  }

  // Make arrays for both axes, define grid space by this. Each value in array -> one box
  createGridArrays(xCoord: number, yCoord: number): void {
    this.gridXArr = [];
    this.gridYArr = [];
    for (let i = 0; i < xCoord; i++) {
      this.gridXArr.push(i);
    }

    for (let j = 0; j < yCoord; j++) {
      this.gridYArr.push(j);
    }
  }

  pullBackgroundImage(imagePath: string): void {
    // this.gridDataSvc.pullBackgroundImageFromFireStorage(imagePath)
    //   .getDownloadURL()
    //   .subscribe(imgData => {
    //     const imageUrl = 'url(' + imgData + ')';
    //     this.gridStyle['background-image'] = imageUrl;
    //     this.currentBackground = imageUrl;
    //   });
  }
}
