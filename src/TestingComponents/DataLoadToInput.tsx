import {useState} from "react";

export function DataLoadToInput() {

    const [text, setText] = useState('');
    const x:string = text
    function handleClick() {
        setText(text+'thisaru');
    }


    return (
        <>
            <input id='textField1' value={x} onChange={(e) => setText(e.target.value)} />
            <button onClick={()=>handleClick()}>Add text</button>
        </>
    );
}