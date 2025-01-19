import {Crop} from "../Model/Crop.ts";
import {useSelector} from "react-redux";

export function HomePage() {

    const crops:Crop[] = useSelector((state:any) => state.cropManager);

    return (
        <div className="HomePage w-[950px] h-[600px] bg-sky-200 flex flex-col gap-[35px] justify-center items-center gap-2">
            <div className='flex flex-row justify-center gap-[35px]'>
                <div className='flex justify-center items-center rounded-[30px] w-[400px] h-[250px] bg-lime-300'>
                    {crops?.length > 0 && (
                        <h1 className='text-4xl text-gray-700'>{crops.length+'  CROPS'}</h1>
                    )}
                </div>
                <div className='flex justify-center items-center rounded-[30px] w-[400px] h-[250px] bg-lime-300'>
                    <h1 className='text-4xl '>FIELDS</h1>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-[35px]'>
                <div className=' rounded-[30px] w-[400px] h-[250px] bg-lime-300'></div>
                <div className=' rounded-[30px] w-[400px] h-[250px] bg-lime-300' ></div>
            </div>

        </div>
    );
}