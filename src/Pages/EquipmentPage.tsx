import {useState} from "react";
import {Staff} from "../Model/Staff.ts";
import {useDispatch, useSelector} from "react-redux";
import {Equipment} from "../Model/Equipment.ts";
import {Field} from "../Model/Field.ts";
import {Vehicle} from "../Model/Vehicle.ts";
import {addVehicle, deleteVehicle, updateVehicle} from "../Reducers/VehicleReducer.ts";
import {addEquipment, deleteEquipment, updateEquipment} from "../Reducers/EquipmentReducer.ts";

export function EquipmentPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddEquipment, setIsAddEquipment] = useState(true);
    const[equipmentId,setEquipmentId] = useState('');
    const[equipmentName,setEquipmentName] = useState('')
    const[equipmentType,setEquipmentType] = useState('')
    const[status,setEquipmentStatus] = useState('')
    const[staffId,setStaffId] = useState('')
    const[fieldCode,setFieldCode] = useState('')

    const staffMembers : Staff[] = useSelector((state:any) => state.staffManager);
    const equipments : Equipment[] = useSelector((state:any) => state.equipmentManager);
    const fields : Field[] = useSelector((state:any) => state.fieldManager);
    const dispatch = useDispatch();
    const openModal = (process:string) => {
        if (process === "ADD_EQUIPMENT") {
            setIsAddEquipment(true);
        }
        if (process === "UPDATE_EQUIPMENT") {
            setIsAddEquipment(false);
        }
        setIsModalOpen(!isModalOpen);
    };
    function handleAddEquipmentButton(e){
        e.stopPropagation();
        openModal("ADD_EQUIPMENT");
        const newEquipment = new Equipment(
            equipmentId,
            equipmentName,
            equipmentType,
            status,
            staffId,
            fieldCode,
        ).toPlainObject()
        dispatch(addEquipment(newEquipment))
        resetForm()
    }
    function handleUpdateEquipmentButton(e){
        e.stopPropagation();
        openModal("")
        const updatedEquipment = new Equipment(
            equipmentId,
            equipmentName,
            equipmentType,
            status,
            staffId,
            fieldCode,
        ).toPlainObject()
        dispatch(updateEquipment(updatedEquipment));
        resetForm()
    }
    function handleUpdateEquipmentOpenForm(equipment:Equipment) {
        openModal("UPDATE_EQUIPMENT");
        setEquipmentDataForForm(equipment)
    }
    function setEquipmentDataForForm(relevantEquipment:Equipment){
        setEquipmentId(relevantEquipment.equipmentId)
        setEquipmentName(relevantEquipment.equipmentName)
        setEquipmentType(relevantEquipment.equipmentType)
        setEquipmentStatus(relevantEquipment.status)
        setStaffId(relevantEquipment.staffId)
        setFieldCode(relevantEquipment.fieldCode)
    }

    function handleDeleteEquipmentButton(equipmentId: string) {
        dispatch(deleteEquipment(equipmentId));
    }
    return (
        <>
            <div className="VehiclePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
                {/* Add Data Button */}
                <div className=' w-[900px] '>
                    <button onClick={() => {
                        openModal("ADD_EQUIPMENT")
                        resetForm()
                    }} className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                        Add to Equipment
                    </button>
                </div>
                <div className="pl-10 cartContent flex bg-white w-[900px] h-[535px] rounded-[6px] shadow-amber-700 overflow-y-auto  ">
                    {equipments?.length > 0 ? (
                        <div className="relative mr-[35px] overflow-auto  border border-gray-300 rounded-md">
                            <table className="table-auto w-full border-collapse border border-gray-200">
                                {/* Table Header */}
                                <thead className="bg-gray-100">
                                <tr className="h-16"> {/* Fixed row height */}
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Code</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">License Number </th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Category </th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">fuelType</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">status</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">staffId</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">ACTION</th>
                                </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                {equipments.map((equipment, index) => (
                                    <tr
                                        key={index}
                                        className="h-[90px] even:bg-gray-50 hover:bg-gray-100"
                                    >
                                        <td className="border border-gray-300 px-4">{equipment.equipmentId}</td>
                                        <td className="border border-gray-300 px-4">{equipment.equipmentName}</td>
                                        <td className="border border-gray-300 px-4">{equipment.equipmentType}</td>
                                        <td className="border border-gray-300 px-4">{equipment.status}</td>
                                        <td className="border border-gray-300 px-4">{equipment.staffId}</td>
                                        <td className="border border-gray-300 px-4">{equipment.fieldCode}</td>

                                        <td className="border border-gray-300 px-4 text-center">
                                            <div className='flex flex-row w-[90px] gap-[10px]'>
                                                <button onClick={()=>handleUpdateEquipmentOpenForm(equipment)}
                                                        className=" w-[50px] bg-blue-500 text-white  py-2 rounded hover:bg-blue-600 transition">
                                                    Edit
                                                </button>
                                                <button onClick={()=>handleDeleteEquipmentButton(equipment.equipmentId)}
                                                        className=" w-[50px] bg-red-400 text-white  py-2 rounded hover:bg-red-500 transition">
                                                    Del
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center">No Equipment Save.</p>
                    )}

                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-lg w-[800px] h-[375px]">
                            <div className="flex justify-between items-center border-b p-4">
                                <h3 className="text-lg font-semibold">Manage Crops</h3>
                                <button onClick={() => {openModal("CLOSE");resetForm()}} className="text-gray-500 hover:text-gray-700">
                                    ✖
                                </button>
                            </div>
                            <div className="p-[20px]">
                                <form action="#">
                                    <div className='grid grid-cols-2 gap-5'>

                                        <input value={equipmentId} type="text" placeholder='Equipment Id'
                                               className='basic-input-styles'
                                               onChange={(e) => setEquipmentId(e.target.value)}/>
                                        <input value={equipmentName} type="text" placeholder='Equipment Name'
                                               className='basic-input-styles'
                                               onChange={(e) => setEquipmentName(e.target.value)}/>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setEquipmentType(e.target.value)}>
                                            <option>{equipmentType}</option>
                                            <option>ELECTRICAL</option>
                                            <option>MECHANICAL</option>

                                        </select>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setEquipmentStatus(e.target.value)}>
                                            <option>{status}</option>
                                            <option>NOT AVAILABLE</option>
                                            <option>AVAILABLE</option>
                                            <option>REPAIR</option>
                                        </select>

                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setStaffId(e.target.value)}>
                                            <option>{staffId}</option>
                                            {staffMembers?.length > 0 && staffMembers.map((member) =>
                                                <option key={member.staffId}>{member.staffId}</option>
                                            )}
                                        </select>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setFieldCode(e.target.value)}>
                                            <option>{fieldCode}</option>
                                            {fields?.length > 0 && fields.map((field) =>
                                                <option key={field.fieldCode}>{field.fieldCode}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mt-5 flex flex-row'>
                                        {isAddEquipment && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleAddEquipmentButton(e)}>Add Equipment
                                            </button>
                                        )}
                                        {!isAddEquipment&& (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleUpdateEquipmentButton(e)}>Update Equipment
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
        setEquipmentId('')
        setEquipmentName('')
        setEquipmentType('')
        setEquipmentStatus('')
        setStaffId('')
        setFieldCode('')

    }
}