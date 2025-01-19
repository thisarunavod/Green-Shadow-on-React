import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Staff} from "../Model/Staff.ts";
import {addStaff} from "../Reducers/StaffReducer.ts";
import {Field} from "../Model/Field.ts";

export function StaffPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddStaff, setIsAddStaff] = useState(true);
    const[staffId, setStaffId] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[designation, setDesignation] = useState('Select Designation');
    const[gender, setGender] = useState('Select Gender');
    const[joinDate, setJoinDate] = useState('');
    const[dob, setDob] = useState('');
    const[address,setAddress] = useState('');
    const[contactNumber,setContactNumber] = useState('');
    const[email,setEmail] = useState('');
    const[role,setRole] = useState('Select Role');
    const[fieldCode,setField] = useState('Select Field');
    const[vehicleCode,setVehicle] = useState('Select Vehicle');


    const openModal = (process:string) => {
        if (process === "ADD_STAFF") {
            setIsAddStaff(true);
        }
        if (process === "UPDATE_STAFF") {
            setIsAddStaff(false);
        }
        setIsModalOpen(!isModalOpen);
    };
    const fields:Field[] = useSelector((state:any) => state.fieldManager);
    const staffMembers:Staff[] = useSelector((state:any) => state.staffManager);
    const dispatch = useDispatch();

    function handleAddStaffButton(e){
        e.stopPropagation();
        openModal("ADD_STAFF");
        const newStaffMember = new Staff(
            staffId,
            firstName,
            lastName,
            designation,
            gender,
            joinDate,
            dob,
            address,
            contactNumber,
            email,
            role,
            fieldCode,
            vehicleCode,
        ).toPlainObject()
        dispatch(addStaff(newStaffMember))
        resetForm()
    }
    function handleUpdateStaffButton(e){
        e.stopPropagation();
        openModal("")
        // const updatedField = new Field(
        //     fieldCode,
        //     fieldName,
        //     fieldLocation,
        //     fieldSize,
        //     fieldImage1,
        //     fieldImage2
        // ).toPlainObject()
        // dispatch(updateField(updatedField));
        // resetForm()
    }
    function handleDeleteStaffButton(fieldCode:string){
        // dispatch(deleteField(fieldCode));
    }

    function handleUpdateStaffOpenForm(member:Staff){

        setStaffDataForForm(member)
        openModal("UPDATE_STAFF");

    }

    function setStaffDataForForm(relevantStaff:Staff){
        console.log(relevantStaff.email);
        setStaffId(relevantStaff.staffId);
        setFirstName(relevantStaff.firstName);
        setLastName(relevantStaff.lastName);
        setDesignation(relevantStaff.designation);
        setGender(relevantStaff.gender);
        setJoinDate(relevantStaff.joinDate);
        setDob(relevantStaff.dob);
        setAddress(relevantStaff.address);
        setContactNumber(relevantStaff.contactNumber);
        setEmail(relevantStaff.email);
        setRole(relevantStaff.role);
        setField(relevantStaff.fieldCode);
        setVehicle(relevantStaff.vehicleCode);
    }

    function stringToDate(date:string){
        return new Date(date)
    }
    return (
        <>

            <div
                className="StaffPage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
                {/* Add Data Button */}
                <div className=' w-[900px] '>
                    <button onClick={() => {openModal("ADD_STAFF"); resetForm()}
                    } className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                        Save to Staff
                    </button>
                </div>
                <div
                    className="pl-10 cartContent flex bg-white w-[900px] h-[535px] rounded-[6px] shadow-amber-700 overflow-y-auto">
                    <div
                        className="p-4 flex flex-wrap gap-[10px] justify-content-between"> {/* Added justify-content-between for even distribution */}
                        {staffMembers?.length > 0 &&
                            staffMembers.map((member, index) => (
                                <div key={index}
                                     className="p-4 flex flex-col  gap-10 justify-center items-center bg-green-100 rounded w-[250px] h-[515px] cursor-pointer">
                                    {/*<div className='w-[230px] h-[230px] bg-lime-100 rounded'></div>*/}
                                    <div className='flex flex-col p-1 justify-start w-[230px]'>
                                        <ul className='flex flex-col gap-2'>
                                            <li key={index}>Staff ID:{member.staffId}</li>
                                            <li key={index}>Full Name:{member.firstName + ' ' + member.lastName}</li>
                                            <li key={index}>Designation:{member.designation}</li>
                                            <li key={index}>gender:{member.gender}</li>
                                            <li key={index}>joinDate:{member.joinDate}</li>
                                            <li key={index}>DOB:{member.dob}</li>
                                            <li key={index}>Address:{member.address}</li>
                                            <li key={index}>Con.NO:{member.contactNumber}</li>
                                            <li key={index}>Email:{member.email}</li>
                                            <li key={index}>Role:{member.role}</li>
                                            <li key={index}>Filed Code:{member.fieldCode}</li>
                                            <li key={index}>Vehicle:{member.vehicleCode}</li>
                                        </ul>
                                    </div>
                                    <div className='m-5 flex flex-row gap-[20px] justify-center items-center'>
                                        <button
                                            className='bg-lime-400  text-blue-800 p-2 rounded-2xl hover:bg-lime-500 hover:text-white'
                                            onClick={() => handleUpdateStaffOpenForm(member)}
                                        >Update
                                        </button>
                                        <button className='bg-red-100 p-2 rounded-2xl text-blue-200 hover:bg-red-400'
                                                onClick={() => handleDeleteStaffButton(member.staffId)}
                                        >🗑
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-lg w-[800px] h-[550px]">
                            <div className="flex justify-between items-center border-b p-4">
                                <h3 className="text-lg font-semibold">Manage Staff Details</h3>
                                <button onClick={() => {
                                    openModal("CLOSE");
                                    resetForm()
                                }} className="text-gray-500 hover:text-gray-700">
                                    ✖
                                </button>
                            </div>
                            <div className="p-[20px]">
                                <form action="#">
                                    <div className='grid grid-cols-2 gap-5'>

                                        <input value={staffId} type="text" placeholder='staff Id'
                                               className='basic-input-styles'
                                               onChange={(e) => setStaffId(e.target.value)}/>
                                        <input value={firstName} type="text" placeholder='First Name'
                                               className='basic-input-styles'
                                               onChange={(e) => setFirstName(e.target.value)}/>
                                    </div>

                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <input value={lastName} type="text" placeholder='Last Name'
                                               className='basic-input-styles'
                                               onChange={(e) => setLastName(e.target.value)}/>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setDesignation(e.target.value)}>
                                            <option>{designation}</option>
                                            <option>MANAGER</option>
                                            <option>ASSISTANT MANAGER</option>
                                            <option>AGRONOMICS</option>
                                            <option>TECHNICAL OFFICER</option>
                                            <option>SUPERVISORS</option>
                                            <option>DRIVER</option>
                                            <option>MACHINE OPERATORS</option>
                                            <option>LABORS</option>
                                        </select>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setGender(e.target.value)}>
                                            <option>{gender}</option>
                                            <option>MALE</option>
                                            <option>FEMALE</option>
                                        </select>
                                        <input  value={joinDate} type="date" placeholder='Select join date'
                                               className='basic-input-styles'
                                               onChange={(e) => setJoinDate(e.target.value)}/>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <input value={dob} type="date" placeholder='Select DOB'
                                               className='basic-input-styles'
                                               onChange={(e) => setDob(e.target.value)}/>
                                        <input value={address} type="text" placeholder='Address'
                                               className='basic-input-styles'
                                               onChange={(e) => setAddress(e.target.value)}/>
                                    </div>
                                    <div  className='mt-5 grid grid-cols-2 gap-5'>
                                        <input value={contactNumber} type="text" placeholder='Contact NO'
                                               className='basic-input-styles'
                                               onChange={(e) => setContactNumber(e.target.value)}/>
                                        <input value={email} type="text" placeholder='Email'
                                               className='basic-input-styles'
                                               onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setRole(e.target.value)}>
                                            <option>{role}</option>
                                            <option>MANAGER</option>
                                            <option>ADMINISTRATIVE</option>
                                            <option>SCIENTIST</option>
                                            <option>OTHER</option>
                                        </select>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setField(e.target.value)}>
                                            <option>{fieldCode}</option>
                                            {fields?.length > 0 && fields.map((field) =>
                                                <option key={field.fieldCode}>{field.fieldCode}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setVehicle(e.target.value)}>
                                            <option>{vehicleCode}</option>
                                            {/*{fields?.length > 0 && fields.map((field) =>*/}
                                            {/*    <option key={field.fieldCode}>{field.fieldCode}</option>*/}
                                            {/*)}*/}
                                        </select>

                                    </div>

                                    <div className='mt-5 flex flex-row'>
                                        {isAddStaff && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleAddStaffButton(e)}>Add Staff
                                            </button>
                                        )}
                                        {!isAddStaff && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleUpdateStaffButton(e)}>Update Field
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );

    function resetForm() {
        setStaffId('');
        setFirstName('');
        setLastName('');
        setDesignation('Select Designation');
        setGender('Select Gender');
        setJoinDate('');
        setDob('');
        setAddress('');
        setContactNumber('');
        setEmail('');
        setRole('Select Role');
        setField('Select Field');
        setVehicle('Select Vehicle');
    }
}
