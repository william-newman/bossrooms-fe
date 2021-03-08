import { Injectable } from '@angular/core';
import { Grid } from '../models/grid';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  gridX = 10;
  gridY = 10;
  gridXArr: number[] = [];
  gridYArr: number[] = [];
  gridImagePath = '';
  // Height and width to use for drawing box unit
  gridBoxDimensions = {
    height: 50,
    width: 50
  };
  // Opacity of grid's lines
  gridlineOpacity = 0.2;
  // Text color of token
  gridlineColor = '';
  // Template images
  basicImage = 'url("../../assets/Cabin.png")';
  // Object layer for user authorization
  currentDM = 'default-user';
  // currentDM = 'Shelly';
  // Object layer for encounter authorization
  currentEncounter = 'default-encounter';
  // currentEncounter = 'enc1';
  // Where all data from this component goes
  fireDbGridDataPath =
    'main/' + this.currentDM + '/' + this.currentEncounter + '/grid-data';
  // Where the image data goes
  fireStorePath = 'main/' + this.currentDM + '/' + this.currentEncounter + '/images/';

  // Init and call defSize
  constructor() {
    this.defaultSize();
  }

  // Call assignGrid with def values
  defaultSize(): void {
    this.assignGridCoordinates(this.gridX, this.gridY);
  }

  // Hold onto current grid numbers
  assignGridCoordinates(xCoord: number, yCoord: number): void {
    this.gridX = xCoord;
    this.gridY = yCoord;
    this.createGridArrays(xCoord, yCoord);
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

  // Return default placeholder image for background
  pullDefaultImage(): string {
    return this.gridImagePath = this.basicImage;
  }

  // Return current held image reference
  pullCurrentImage(): string {
    return this.gridImagePath;
  }

  adjustArrays(gridXArray: number[], gridYArray: number[]): void {
    this.gridXArr = gridXArray;
    this.gridYArr = gridYArray;
  }

  // Change size of grid boxes (in pixels)
  // xAxis -> width of box, yAxis -> height of box
  changeGridBoxDimensions(xAxis: number, yAxis: number): void {
    this.gridBoxDimensions = {
      height: yAxis,
      width: xAxis
    };
  }

  // Change transparency of gridboxes' borders
  changeGridlineOpacity(gridlineOpacity: number): void {
    this.gridlineOpacity = gridlineOpacity;
  }

  // Do all above and send to Firebase DB
  adjustGrid(
    gridXValue: number, gridYValue: number,
    gridboxWidthValue: number, gridboxHeightValue: number,
    gridlineColorValue: string, gridlineOpacityValue: number,
    gridImagePathValue: string
  ): void {
    // Set local values first
    this.gridX = gridXValue;
    this.gridY = gridYValue;
    this.gridBoxDimensions = {
      width: gridboxWidthValue,
      height: gridboxHeightValue
    };
    this.gridlineOpacity = gridlineOpacityValue;
    this.gridlineColor = gridlineColorValue;
    this.gridImagePath = gridImagePathValue;

    // what's up
    const gridObject = new Grid(
      gridXValue, gridYValue,
      gridboxWidthValue, gridboxHeightValue,
      gridlineColorValue, gridlineOpacityValue, this.gridImagePath
    );
  }

  // pullGridDataFromFireRTDB() {
  //   return this.fireRTDB.object(this.fireDbGridDataPath);
  // }

  // pullBackgroundImageFromFireStorage(imagePath) {
  //   return this.fireStorage.ref(this.fireStorePath + imagePath);
  // }

  // uploadImageToFireStorage(imageData) {
  //   this.fireStorage.ref(this.fireStorePath + imageData.name).put(imageData);
  // }
}
