import {useDispatch, useSelector} from "react-redux";
import {Crop} from "../Model/Crop.ts";
import {addCrop, deleteCrop} from "../Reducers/CropReducer.ts";
import {useState} from "react";

export function CropPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddField, setIsAddField] = useState(true);
    const[cropCode,setCropCode] = useState('');
    const[cropCommonName,setCropCommonName] = useState('');
    const[cropScientificName,setCropScientificName] = useState('');
    const[cropImage,setCropImage] = useState('');
    const[cropCategory,setCropCategory] = useState('');
    const[cropSeason,setCropSeason] = useState('');
    const[fieldCode,setFieldCode] = useState('');
    const crops:Crop[] = useSelector((state:any) => state.cropManager);
    const dispatch = useDispatch();

    // Function to open the modal
    const openModal = (process:string) => {
        // if (process === "ADD_FIELD") {
        //     setIsAddField(true);
        // }
        // if (process === "UPDATE_FIELD") {
        //     setIsAddField(false);
        // }
        setIsModalOpen(!isModalOpen);
    };


    function handleAddCropButton(e){
        e.stopPropagation();
        openModal("ADD_CROP");
        const newCrop = new Crop(
            cropCode,
            cropCommonName,
            cropScientificName,
            cropImage,
            cropCategory,
            cropSeason,
            fieldCode,
        ).toPlainObject()
        dispatch(addCrop(newCrop))
        resetForm()
    }
    function handleUpdateFieldButton(e){
        // e.stopPropagation();
        // openModal("")
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

    function handleUpdateFieldOpenForm(crop:Crop) {
        // openModal("UPDATE_FIELD");
        // setFieldDataForForm(field)
    }
    function setFieldDataForForm(relevantField:Crop){
        // setfieldCode(relevantField.fieldCode)
        // setfieldName(relevantField.fieldName)
        // setfieldLocation(relevantField.fieldLocation)
        // setfieldSize(relevantField.fieldSize)
        // setfieldImage1(relevantField.fieldImage1)
        // setfieldImage2(relevantField.fieldImage2)
    }

    function handleDeleteCropButton(cropCode: string) {
        dispatch(deleteCrop(cropCode));
    }

    return (
        <>
            <div className="HomePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
                {/* Add Data Button */}
                <div className=' w-[900px] '>
                    <button onClick={() => openModal("ADD_FIELD")
                    } className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                        Create Crop
                    </button>
                </div>
                <div className="pl-10 cartContent flex bg-white w-[900px] h-[535px] rounded-[6px] shadow-amber-700 overflow-y-auto  ">
                    {crops?.length > 0 ? (
                        <div className="relative mr-[35px] overflow-auto  border border-gray-300 rounded-md">
                            <table className="table-auto w-full border-collapse border border-gray-200">
                                {/* Table Header */}
                                <thead className="bg-gray-100">
                                <tr className="h-16"> {/* Fixed row height */}
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Crop Code</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Crop Common Name</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Crop Scientific Name</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Crop Image</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Crop Category</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Crop Season</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Field Code</th>
                                    <th className="border border-gray-300 px-4 text-lime-700 text-left">Edit</th>
                                </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                {crops.map((crop) => (
                                    <tr
                                        key={crop.cropCode}
                                        className="h-[90px] even:bg-gray-50 hover:bg-gray-100"
                                    >
                                        <td className="border border-gray-300 px-4">{crop.cropCode}</td>
                                        <td className="border border-gray-300 px-4">{crop.cropCommonName}</td>
                                        <td className="border border-gray-300 px-4">{crop.cropScientificName}</td>
                                        <td className="border border-gray-300 px-4 text-center">
                                            <img
                                                src={'src/assets/images/images.jpeg'}
                                                alt={crop.cropCommonName}
                                                className="w-12 h-12 object-cover mx-auto rounded-md"
                                            />

                                        </td>
                                        <td className="border border-gray-300 px-4">{crop.cropCategory}</td>
                                        <td className="border border-gray-300 px-4">{crop.cropSeason}</td>
                                        <td className="border border-gray-300 px-4">{crop.fieldCode}</td>
                                        <td className="border border-gray-300 px-4 text-center">
                                            <div className='flex flex-row w-[90px] gap-[10px]'>
                                                <button
                                                    className=" w-[50px] bg-blue-500 text-white  py-2 rounded hover:bg-blue-600 transition">
                                                    Edit
                                                </button>
                                                <button onClick={()=>handleDeleteCropButton(crop.cropCode)}
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
                        <p className="text-gray-500 text-center">No crops available.</p>
                    )}

                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-lg w-[800px] h-[375px]">
                            <div className="flex justify-between items-center border-b p-4">
                                <h3 className="text-lg font-semibold">Manage Crops</h3>
                                <button onClick={() => {
                                    openModal("CLOSE");
                                    // resetForm()
                                }} className="text-gray-500 hover:text-gray-700">
                                    ✖
                                </button>
                            </div>
                            <div className="p-[20px]">
                                <form action="#">
                                    <div className='grid grid-cols-2 gap-5'>

                                        <input value={cropCode} type="text" placeholder='Crop Code'
                                               className='basic-input-styles'
                                               onChange={(e) => setCropCode(e.target.value)}/>
                                        <input value={cropCommonName} type="text" placeholder='Crop Common Name'
                                               className='basic-input-styles'
                                               onChange={(e) => setCropCommonName(e.target.value)}/>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <input value={cropScientificName} type="text" placeholder='Crop Scientific Name'
                                               className='basic-input-styles'
                                               onChange={(e) => setCropScientificName(e.target.value)}/>
                                        <input value={cropImage} type="file" placeholder='Field size'
                                               className='basic-input-styles'
                                               onChange={(e) => setCropImage(String(e.target.value))}/>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        {/*<input value={cropCategory} type="text" placeholder='Crop Category'
                                               className='basic-input-styles'
                                               onChange={(e) => setCropCategory(e.target.value)}/>
                                        <input value={cropSeason} type="text" placeholder='Crop Season'
                                               className='basic-input-styles'
                                               onChange={(e) => setCropSeason(String(e.target.value))}/>*/}
                                        <select className='basic-input-styles'
                                                onChange={(e) => setCropCategory(e.target.value)}>
                                            <option>Select Category</option>
                                            <option>Vegetables</option>
                                            <option>Fruits</option>
                                            <option>Seeds</option>
                                        </select>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setCropSeason(e.target.value)}>
                                            <option>Select Season</option>
                                            <option>Winter</option>
                                            <option>Summer</option>
                                        </select>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 gap-5'>
                                        <select className='basic-input-styles'
                                                onChange={(e) => setFieldCode(e.target.value)}>
                                            <option>Select Field</option>
                                            <option>F001</option>
                                            <option>F002</option>
                                            <option>F003</option>
                                            <option>F004</option>
                                        </select>
                                    </div>

                                    <div className='mt-5 flex flex-row'>
                                        {isAddField && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleAddCropButton(e)}>Add Crop
                                            </button>
                                        )}
                                        {!isAddField && (
                                            <button
                                                className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                                onClick={(e) => handleUpdateFieldButton(e)}>Update Crop
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
        setCropCode('');
        setCropCommonName('');
        setCropScientificName('');
        setCropImage('');
        setCropCategory('');
        setCropSeason('');
        setFieldCode('');
    }

}