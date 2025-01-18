export class Vehicle {
    vehicleCode: string;
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType:string;
    status:string;
    staffId:string;
    remarks:string;

    constructor(vehicleCode:string,licensePlateNumber:string,vehicleCategory:string,fuelType:string,status:string,staffId:string,remarks:string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.staffId = staffId;
        this.remarks = remarks;
    }

    toPlainObject() {
        return {
            vehicleCode:this.vehicleCode,
            licensePlateNumber:this.licensePlateNumber,
            vehicleCategory:this.vehicleCategory,
            fuelType:this.fuelType,
            status:this.status,
            staffId:this.staffId,
            remarks:this.remarks,
        }
    };
}
