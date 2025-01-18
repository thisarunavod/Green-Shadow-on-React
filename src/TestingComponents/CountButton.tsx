
interface ButtonComponentPropsType{
    handleClick: () => void;
    name: string;
}

export function ButtonComponent({handleClick , name}:ButtonComponentPropsType) {

    return (
        <>
            <button className='p-4 bg-violet-300 hover:bg-violet-400'
                onClick={handleClick}>{name}</button>
        </>
    );
}