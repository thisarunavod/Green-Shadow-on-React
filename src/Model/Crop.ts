
export class Crop {
    cropCode: string;
    cropCommonName: string;
    cropScientificName: string;
    cropImage:string;
    cropCategory:string;
    cropSeason:string;
    fieldCode:string;

    constructor(cropCode:string,cropCommonName:string,cropScientificName:string,cropImage:string ,cropCategory:string,cropSeason:string,fieldCode:string) {
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropImage= cropImage
        this.cropCategory = cropCategory;
        this.cropSeason = cropSeason;
        this.fieldCode = fieldCode;
    }

    toPlainObject() {
        return {
            cropCode:this.cropCode,
            cropCommonName:this.cropCommonName,
            cropScientificName:this.cropScientificName,
            cropImage:this.cropImage,
            cropCategory:this.cropCategory,
            cropSeason:this.cropSeason,
            fieldCode:this.fieldCode,
        }
    };
}
