export class Grid {

    constructor(
        public xLength: number,
        public yLength: number,
        public xBoxLength: number,
        public yBoxLength: number,
        public gridlineColor: string,
        public gridlineOpacity: number,
        public gridBackgroundImageURL: string,
    ) {
        this.xLength = xLength;
        this.yLength = yLength;
        this.xBoxLength = xBoxLength;
        this.yBoxLength = yBoxLength;
        this.gridlineColor = gridlineColor;
        this.gridlineOpacity = gridlineOpacity;
        this.gridBackgroundImageURL = gridBackgroundImageURL;
    }
}
