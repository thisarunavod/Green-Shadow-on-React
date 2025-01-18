export class Equipment {
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    status:string;
    staffId:string;
    fieldCode:string;


    constructor(equipmentId:string,equipmentName:string,equipmentType:string,status:string,staffId:string,fieldCode:string) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.status = status;
        this.staffId = staffId;
        this.fieldCode = fieldCode;
    }

    toPlainObject() {
        return {
            equipmentId:this.equipmentId,
            equipmentName:this.equipmentName,
            equipmentType:this.equipmentType,
            status:this.status,
            staffId:this.staffId,
            fieldCode:this.fieldCode,
        }
    };
}
