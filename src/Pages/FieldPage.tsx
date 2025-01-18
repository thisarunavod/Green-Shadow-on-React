
import '../assets/CSS/InputCSS.css'
import {useReducer, useState} from "react";
import {Field} from "../Model/Field.ts";
import {addField, deleteField, FieldReducer, getField, initialState, updateField} from "../Reducers/FieldReducer.tsx";
import {useDispatch, useSelector} from "react-redux";

export function FieldPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddField, setIsAddField] = useState(true);
    const[fieldCode,setfieldCode] = useState('');
    const[fieldName,setfieldName] = useState('');
    const[fieldLocation,setfieldLocation] = useState('');
    const[fieldSize,setfieldSize] = useState(0);
    const[fieldImage1,setfieldImage1] = useState('');
    const[fieldImage2,setfieldImage2] = useState('');

    // Function to open the modal
    const openModal = (process:string) => {
        if (process === "ADD_FIELD") {
            setIsAddField(true);
        }
        if (process === "UPDATE_FIELD") {
            setIsAddField(false);
        }

        setIsModalOpen(!isModalOpen);

    };
    const fields:Field[] = useSelector((state:any) => state.fieldManager);
    const dispatch = useDispatch();

    function handleAddFieldButton(e){
        e.stopPropagation();
        openModal("ADD_FIELD");
        const newField = new Field(
            fieldCode,
            fieldName,
            fieldLocation,
            fieldSize,
            fieldImage1,
            fieldImage2
        ).toPlainObject()
        dispatch(addField(newField))
        resetForm()
    }
    function handleUpdateFieldButton(e){
        e.stopPropagation();
        openModal("")
        const updatedField = new Field(
            fieldCode,
            fieldName,
            fieldLocation,
            fieldSize,
            fieldImage1,
            fieldImage2
        ).toPlainObject()
        dispatch(updateField(updatedField));
        resetForm()
    }
    function handleDeleteFieldButton(fieldCode:string){
        dispatch(deleteField(fieldCode));
    }

    function handleUpdateFieldOpenForm(field:Field){
        openModal("UPDATE_FIELD");
        setFieldDataForForm(field)
    }
    function setFieldDataForForm(relevantField:Field){
        setfieldCode(relevantField.fieldCode)
        setfieldName(relevantField.fieldName)
        setfieldLocation(relevantField.fieldLocation)
        setfieldSize(relevantField.fieldSize)
        setfieldImage1(relevantField.fieldImage1)
        setfieldImage2(relevantField.fieldImage2)
    }




    return (

        <div
            className="HomePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
            {/* Add Data Button */}
            <div className=' w-[900px] '>
                <button onClick={()=> openModal("ADD_FIELD")
                } className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                    Create FIELD
                </button>
            </div>
            <div className="pl-10 cartContent flex bg-white w-[900px] h-[535px] rounded-[6px] shadow-amber-700 overflow-y-auto">
                <div className="p-4 flex flex-wrap gap-[10px] justify-content-between"> {/* Added justify-content-between for even distribution */}
                    {fields?.length > 0 &&
                        fields.map((field, index) => (
                            <div key={index} className="p-4 flex flex-col  gap-10 justify-center items-center bg-green-100 rounded w-[250px] h-[515px] cursor-pointer">
                                <div className='w-[230px] h-[100px] bg-lime-100 rounded' ></div>
                                <div className='flex flex-col p-1 justify-start w-[230px]'>
                                    <ul className='flex flex-col gap-5'>
                                        {/*<li key={index}>field image:{field.fieldImage1}</li>*/}
                                        {/*<li key={index}>field image:{field.fieldImage2}</li>*/}
                                        <li key={index}>field code:{field.fieldCode}</li>
                                        <li key={index}>field name:{field.fieldName}</li>
                                        <li key={index}>field size:{field.fieldSize}</li>
                                        <li key={index}>field location:{field.fieldLocation}</li>
                                    </ul>
                                </div>
                                <div className='m-5 flex flex-row gap-[20px] justify-center items-center'>
                                    <button className='bg-lime-400  text-blue-800 p-2 rounded-2xl hover:bg-lime-500 hover:text-white'
                                        onClick={()=>handleUpdateFieldOpenForm(field)}
                                    >Update</button>
                                    <button className='bg-red-100 p-2 rounded-2xl text-blue-200 hover:bg-red-400'
                                        onClick={()=>handleDeleteFieldButton(field.fieldCode)}
                                    >🗑</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] h-[325px]">
                        <div className="flex justify-between items-center border-b p-4">
                            <h3 className="text-lg font-semibold">Manage Field</h3>
                            <button onClick={()=> {openModal("CLOSE");resetForm()}} className="text-gray-500 hover:text-gray-700">
                                ✖
                            </button>
                        </div>
                        <div className="p-[20px]">
                            <form action="#">
                                <div className='grid grid-cols-2 gap-5'>

                                    <input value={fieldCode} type="text" placeholder='Field Code' className='basic-input-styles'
                                           onChange={(e) => setfieldCode(e.target.value)}/>
                                    <input value={fieldName} type="text" placeholder='Field Name' className='basic-input-styles'
                                           onChange={(e) => setfieldName(e.target.value)}/>
                                </div>
                                <div className='mt-5 grid grid-cols-2 gap-5'>
                                    <input value={fieldLocation} type="text" placeholder='Field Location'
                                           className='basic-input-styles'
                                           onChange={(e) => setfieldLocation(e.target.value)}/>
                                    <input value={fieldSize} type="number" placeholder='Field size'
                                           className='basic-input-styles'
                                           onChange={(e) => setfieldSize(Number(e.target.value))}/>
                                </div>
                                <div className='mt-5 grid grid-cols-2 gap-5'>
                                    <input type="file" placeholder='Select field image1'
                                           className='basic-input-styles'
                                           onChange={(e) => setfieldImage1(String(e.target.value))}/>
                                    <input type="file" placeholder='Select field image2'
                                           className='basic-input-styles'
                                           onChange={(e) => setfieldImage2(String(e.target.value))}/>
                                </div>
                                <div className='mt-5 flex flex-row'>
                                    {isAddField &&  (
                                        <button
                                            className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                            onClick={(e) => handleAddFieldButton(e)}>Add Field
                                        </button>
                                    )}
                                    {!isAddField && (
                                        <button
                                            className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'
                                            onClick={(e)=>handleUpdateFieldButton(e)}>Update Field
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    function resetForm() {
        setfieldCode('')
        setfieldName('')
        setfieldLocation('')
        setfieldSize(0)
        setfieldImage1('')
        setfieldImage2('')
    }

}