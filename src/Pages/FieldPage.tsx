
import '../assets/CSS/InputCSS.css'
import {useReducer, useState} from "react";
import {Field} from "../Model/Field.ts";
import {addField, FieldReducer, initialState} from "../Reducers/FieldReducer.tsx";
import {useDispatch, useSelector} from "react-redux";

export function FieldPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[fieldCode,setfieldCode] = useState('');
    const[fieldName,setfieldName] = useState('');
    const[fieldLocation,setfieldLocation] = useState('');
    const[fieldSize,setfieldSize] = useState(0);
    const[fieldImage1,setfieldImage1] = useState('');
    const[fieldImage2,setfieldImage2] = useState('');

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const fields:Field[] = useSelector((state:any) => state.fieldManager);
    const dispatch = useDispatch();

    function handleAddFieldButton(e){
        e.stopPropagation();
        openModal();
        const newField = new Field(
            fieldCode,
            fieldName,
            fieldLocation,
            fieldSize,
            fieldImage1,
            fieldImage2
        ).toPlainObject()
        dispatch(addField(newField))
        console.log(fields)
    }

    return (

        <div className="HomePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
            {/* Add Data Button */}
            <div className=' w-[900px] '>
                <button onClick={openModal} className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                    Create FIELD
                </button>
            </div>
            <div className='bg-white w-[900px] h-[500px] rounded-[6px] shadow-amber-700'>
                <ul>
                    {fields?.length > 0 && (
                        <ul className=' p-4 flex flex-row gap-[10px]'>
                            {fields.map((field, index) => (
                                <div className=' p-4 flex flex-col bg-slate-200 rounded w-[250px] h-[250px] cursor-pointer'>
                                    <li key={index}> {field.fieldCode}</li>
                                    <li key={index}> {field.fieldName}</li>
                                    <li key={index}> {field.fieldSize}</li>
                                    <li key={index}>{field.fieldLocation}</li>
                                    <li key={index}>{field.fieldImage1}</li>
                                    <li key={index}>{field.fieldImage2}</li>

                                </div>
                            ))}
                        </ul>
                    )}
                </ul>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] h-[325px]">
                        <div className="flex justify-between items-center border-b p-4">
                            <h3 className="text-lg font-semibold">Manage Field</h3>
                            <button onClick={openModal} className="text-gray-500 hover:text-gray-700">
                                ✖
                            </button>
                        </div>
                        <div className="p-[20px]">
                            <form action="#">
                                <div className='grid grid-cols-2 gap-5'>

                                    <input type="text" placeholder='Field Code' className='basic-input-styles' onChange={(e)=>setfieldCode(e.target.value)}/>
                                    <input type="text" placeholder='Field Name' className='basic-input-styles' onChange={(e)=>setfieldName(e.target.value)}/>
                                </div>
                                <div className='mt-5 grid grid-cols-2 gap-5'>
                                    <input type="text" placeholder='Field Location'
                                           className='basic-input-styles' onChange={(e)=>setfieldLocation(e.target.value)}/>
                                    <input type="number" placeholder='Field size'
                                           className='basic-input-styles' onChange={(e)=>setfieldSize(e.target.value)}/>
                                </div>
                                <div className='mt-5 grid grid-cols-2 gap-5' >
                                    <input type="file" placeholder='Select field image1'
                                           className='basic-input-styles' onChange={(e)=>setfieldImage1(String(e.target.value))}/>
                                    <input type="file" placeholder='Select field image2'
                                           className='basic-input-styles' onChange={(e)=>setfieldImage2(String(e.target.value))}/>
                                </div>
                                <div className='mt-5'>
                                    <button className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600' onClick={(e)=>handleAddFieldButton(e)}>Add Field</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}