
import '../assets/CSS/InputCSS.css'
import {useState} from "react";

export function FieldPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (

        <div className="HomePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[10px] justify-center items-center shadow-lg">
            {/* Add Data Button */}
            <div className=' w-[900px] '>
                <button onClick={openModal} className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-400">
                    Create FIELD
                </button>
            </div>
            <div className='bg-white w-[900px] h-[500px] rounded-[6px] shadow-amber-700'>

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

                                    <input type="text" placeholder='Field Code' className='basic-input-styles'/>
                                    <input type="text" placeholder='Field Name' className='basic-input-styles'/>
                                </div>
                                <div className='mt-5 grid grid-cols-2 gap-5'>
                                    <input type="text" placeholder='Field Location'
                                           className='basic-input-styles'/>
                                    <input type="number" placeholder='Field size'
                                           className='basic-input-styles'/>
                                </div>
                                <div className='mt-5 grid grid-cols-2 gap-5' >
                                    <input type="file" placeholder='Select field image1'
                                           className='basic-input-styles'/>
                                    <input type="file" placeholder='Select field image2'
                                           className='basic-input-styles'/>
                                </div>
                                <div className='mt-5'>
                                    <button className='w-full h-[40px] bg-green-500 text-1xl text-white rounded hover:bg-green-600'>Add Field</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}