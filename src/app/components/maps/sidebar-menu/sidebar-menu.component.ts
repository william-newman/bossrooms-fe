import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Grid } from 'src/app/models/grid';
import { GridDataService } from 'src/app/services/grid-data.service';
import { PlayerTokenDataService } from 'src/app/services/player-token-data.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  expanded = false;
  localGridData: Grid | undefined;
  gridX = new FormControl(10); // Number of boxes wide the grid will be
  gridY = new FormControl(10); // Number of boxes tall the grid will be
  gridBoxHeight = new FormControl(50); // Y-Axis length for drawn box
  gridBoxWidth = new FormControl(50); // X-Axis length for drawn box
  gridlineOpacity = new FormControl(0.8); // Opacity of boxes' borders
  gridlineColor = new FormControl('#333333');
  selectedImage: File | null | undefined;
  errMsg = '';
  image: any;

  tokens = [0, 1, 2]; // pull from service

  constructor(private gridDataSvc: GridDataService, private playerTokenDataSvc: PlayerTokenDataService) {
    // this.pullGridDataFromFirebase();
  }

  ngOnInit(): void {
  }

  toggleRightBar(): void {
    this.expanded = !this.expanded;
  }

  // Send collected data to service on button click
  adjustGrid(): void {
    let imageName;
    if (this.selectedImage === undefined) {
      // imageName = this.localGridData.gridBackgroundImageURL;
    } else {
      // imageName = this.selectedImage.name;
    }
    // this.gridDataSvc.adjustGrid(
    //   this.gridX.value, this.gridY.value,
    //   this.gridBoxWidth.value, this.gridBoxHeight.value,
    //   this.gridlineColor.value, this.gridlineOpacity.value,
    // imageName
    // );
  }

  onFileSelect(event: any): void {
    this.selectedImage = null;

    const imageFile = event.target.files[0] as File;
    const imageRegex = /^image\//; // File type = image

    if (imageFile.type.match(imageRegex)) {

      const sizeFormatted = Math.round(imageFile.size * 0.001);
    } else {
      this.errMsg =
        'One or more files were omitted due to unsupported format. Image files only.';
    }
    this.selectedImage = imageFile;
  }

  applyImage(): void {
    if (this.selectedImage) {
      // this.gridDataSvc.uploadImageToFireStorage(this.selectedImage);
    } else {
      // err no image selected
    }
  }

  closeSidebar(): void {
    this.expanded = false;
  }

  // pullGridDataFromFirebase() {
  // this.gridDataSvc.pullGridDataFromFireRTDB()
  //   .valueChanges().subscribe((gridData: Grid) => {
  //     this.localGridData = gridData;
  //   });
  // }
}
