import {useState} from "react";
import {Crop} from "../Model/Crop.ts";
import {addCrop, deleteCrop, updateCrop} from "../Reducers/CropReducer.ts";
import {Vehicle} from "../Model/Vehicle.ts";
import {addVehicle, deleteVehicle, updateVehicle} from "../Reducers/VehicleReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {Staff} from "../Model/Staff.ts";

export function VehiclePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddVehicle, setIsAddVehicle] = useState(true);
    const [vehicleCode, setVehicleCode] = useState('');
    const [licensePlateNumber , setlicensePlateNumber ] = useState('');
    const [vehicleCategory , setVehicleCategory ] = useState('');
    const [fuelType , setFuelType ] = useState('');
    const [status , setStatus ] = useState('');
    const [staffId , setStaffId ] = useState('');
    const [remarks , setRemarks ] = useState('');

    const vehicles : Vehicle[] = useSelector((state:any) => state.vehicleManager);
    const staffMembers : Staff[] = useSelector((state:any) => state.staffManager);
    const dispatch = useDispatch();

    const openModal = (process:string) => {
        if (process === "ADD_VEHICLE") {
            setIsAddVehicle(true);
        }
        if (process === "UPDATE_VEHICLE") {
            setIsAddVehicle(false);
        }
        setIsModalOpen(!isModalOpen);
    };


    function handleAddVehicleButton(e){
        e.stopPropagation();
        openModal("ADD_VEHICLE");
        const newVehicle = new Vehicle(
            vehicleCode,
            licensePlateNumber,
            vehicleCategory,
            fuelType,
            status,
            staffId,
            remarks,
        ).toPlainObject()
        dispatch(addVehicle(newVehicle))
        resetForm()
    }
    function handleUpdateVehicleButton(e){
        e.stopPropagation();
        openModal("")
        const updatedVehicle = new Vehicle(
            vehicleCode,
            licensePlateNumber,
            vehicleCategory,
            fuelType,
            status,
            staffId,
            remarks,
        ).toPlainObject()
        dispatch(updateVehicle(updatedVehicle));
        resetForm()
    }

    function handleUpdateVehicleOpenForm(vehicle:Vehicle) {
        openModal("UPDATE_VEHICLE");
        setVehicleDataForForm(vehicle)
    }
    function setVehicleDataForForm(relevantVehicle:Vehicle){
        setVehicleCode(relevantVehicle.vehicleCode)
        setlicensePlateNumber(relevantVehicle.licensePlateNumber)
        setVehicleCategory(relevantVehicle.vehicleCategory)
        setFuelType(relevantVehicle.fuelType)
        setStatus(relevantVehicle.status)
        setStaffId(relevantVehicle.staffId)
        setRemarks(relevantVehicle.remarks)
    }

    function handleDeleteVehicleButton(vehicleCode: string) {
        dispatch(deleteVehicle(vehicleCode));
    }

    return (
        <>
            <div className="VehiclePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
                {/* Add Data Button */}
                <div className=' w-[900px] '>
                    <button onClick={() => {
                        openModal("ADD_VEHICLE")
                        resetForm()
                    }} className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                        Add to Vehicle
                    </button>
                </div>
                <div className="pl-10 cartContent flex bg-white w-[900px] h-[535px] rounded-[6px] shadow-amber-700 overflow-y-auto  ">
                    {vehicles?.length > 0 ? (
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
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">remarks</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">ACTION</th>
                                </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                {vehicles.map((vehicle, index) => (
                                    <tr
                                        key={index}
                                        className="h-[90px] even:bg-gray-50 hover:bg-gray-100"
                                    >
                                        <td className="border border-gray-300 px-4">{vehicle.vehicleCode}</td>
                                        <td className="border border-gray-300 px-4">{vehicle.licensePlateNumber}</td>
                                        <td className="border border-gray-300 px-4">{vehicle.vehicleCategory}</td>
                                        <td className="border border-gray-300 px-4">{vehicle.fuelType}</td>
                                        <td className="border border-gray-300 px-4">{vehicle.status}</td>
                                        <td className="border border-gray-300 px-4">{vehicle.staffId}</td>
                                        <td className="border border-gray-300 px-4">{vehicle.remarks}</td>
                                        <td className="border border-gray-300 px-4 text-center">
                                            <div className='flex flex-row w-[90px] gap-[10px]'>
                                                <button onClick={()=>handleUpdateVehicleOpenForm(vehicle)}
                                                        className=" w-[50px] bg-blue-500 text-white  py-2 rounded hover:bg-blue-600 transition">
                                                    Edit
                                                </button>
                                                <button onClick={()=>handleDeleteVehicleButton(vehicle.vehicleCode)}
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
                        <p className="text-gray-500 text-center">No Vehicles Save.</p>
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

                                        <input value={vehicleCode} type="text" placeholder='Vehicle Code'
                                               className='basic-input-styles'
                                               onChange={(e) => setVehicleCode(e.target.value)}/>
                                        <input value={licensePlateNumber} type="text" placeholder='License NUmber'
                                               className='basic-input-styles'
                                               onChange={(e) => setlicensePlateNumber(e.target.value)}/>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setVehicleCategory(e.target.value)}>
                                            <option>{vehicleCategory}</option>
                                            <option>TRACTOR</option>
                                            <option>LORRY</option>
                                            <option>CAR</option>
                                            <option>VAN</option>
                                        </select>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setFuelType(e.target.value)}>
                                            <option>{fuelType}</option>
                                            <option>DIESEL</option>
                                            <option>PETROL</option>
                                        </select>

                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setStatus(e.target.value)}>
                                            <option>{status}</option>
                                            <option>AVAILABLE</option>
                                            <option>NOT AVAILABLE</option>
                                            <option>REPAIR</option>
                                        </select>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setStaffId(e.target.value)}>
                                            <option>{staffId}</option>
                                            {staffMembers?.length > 0 && staffMembers.map((member) =>
                                                <option key={member.staffId}>{member.staffId}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <input value={remarks} type="text" placeholder='Remarks'
                                               className='basic-input-styles'
                                               onChange={(e) => setRemarks(e.target.value)}/>
                                    </div>

                                    <div className='mt-5 flex flex-row'>
                                        {isAddVehicle && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleAddVehicleButton(e)}>Add Vehicle
                                            </button>
                                        )}
                                        {!isAddVehicle && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleUpdateVehicleButton(e)}>Update Vehicle
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
        setVehicleCode('')
        setlicensePlateNumber('')
        setVehicleCategory('')
        setFuelType('')
        setStatus('')
        setStaffId('')
        setRemarks('')
    }
}