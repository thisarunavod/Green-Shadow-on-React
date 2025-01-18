export class Field {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    fieldSize:number;
    fieldImage1:string;
    fieldImage2:string;

    constructor(fieldCode:string,fieldName:string,fieldLocation:string,fieldSize:number ,fieldImage1:string,fieldImage2:string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldSize = fieldSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }

    toPlainObject() {
        return {
            fieldCode: this.fieldCode,
            fieldName: this.fieldName,
            fieldLocation: this.fieldLocation,
            fieldSize: this.fieldSize,
            fieldImage1: this.fieldImage1,
            fieldImage2: this.fieldImage2,
        }
    };
}
