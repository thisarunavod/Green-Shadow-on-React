export class Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joinDate: Date;
    dob:Date;
    address: string;
    contactNumber: string;
    email: string;
    role: string;
    fieldCodes:string[];
    vehicleList:string[];

    constructor(staffId:string,firstName:string,lastName:string,designation:string,gender:string,joinDate:Date,dob:Date,address:string,contactNumber:string,email:string,role:string,fieldCodes:string[],vehicleList:string[]) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinDate = joinDate;
        this.dob = dob;
        this.address = address;
        this.contactNumber = contactNumber;
        this.email = email;
        this.role = role;
        this.fieldCodes = fieldCodes;
        this.vehicleList = vehicleList;
    }

    toPlainObject() {
        return {
            staffId:this.staffId,
            firstName:this.firstName,
            lastName:this.lastName,
            designation:this.designation,
            gender:this.gender,
            joinDate:this.joinDate,
            dob:this.dob,
            address:this.address,
            contactNumber:this.contactNumber,
            email:this.email,
            role:this.role,
            fieldCodes:this.fieldCodes,
            vehicleList:this.vehicleList,
        }
    };



}