export function Button({name}) {
    return (
        <>
            <button className='w-[80px] h-[35px] bg-blue-500 text-white rounded-3xl hover:bg-blue-700'>{name}</button>
        </>
    );
}