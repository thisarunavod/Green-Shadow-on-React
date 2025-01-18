import {useDispatch, useSelector} from "react-redux";
import {Crop} from "../Model/Crop.ts";
import {addCrop} from "../Reducers/CropReducer.ts";
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
    function handleDeleteFieldButton(fieldCode:string){
        // dispatch(deleteField(fieldCode));
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
                <div className="pl-10 cartContent flex bg-white w-[900px] h-[535px] rounded-[6px] shadow-amber-700 overflow-y-auto">
                    {crops?.length > 0 && (
                        <table>
                            {/* Table header row */}
                            <thead>
                            <tr>
                                <th>Crop Code</th>
                                <th>Crop Common Name</th>
                                <th>Crop Scientific Name</th>
                                <th>Crop Image</th>
                                <th>Crop Category</th>
                                <th>Crop Season</th>
                                <th>Field Code</th>
                                <th>Edit</th>
                            </tr>
                            </thead>
                            {/* Table body rows */}
                            <tbody>
                            {crops.map((crop, index) => (
                                <tr key={index}>
                                    <td>{crop.cropCode}</td>
                                    <td>{crop.cropCommonName}</td>
                                    <td>{crop.cropScientificName}</td>
                                    <td>{crop.cropImage}</td>  {/* Assuming cropImage is a URL or path */}
                                    <td>{crop.cropCategory}</td>
                                    <td>{crop.cropSeason}</td>
                                    <td>{crop.fieldCode}</td>
                                    <td><button>Edit</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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