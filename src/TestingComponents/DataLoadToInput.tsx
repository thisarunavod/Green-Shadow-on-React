import { useState } from "react";

export function DataLoadToInput() {
    const [text, setText] = useState('F001');
    const [options, setOptions] = useState(['F001', 'F002', 'F003', 'F004']);

    return (
        <div className="DataLoadToInput flex flex-col w-[500px] h-[500px] bg-slate-200 justify-center">
            <select onChange={(e) => setText(e.target.value)}>
                <option>{text}</option>
                {/*{options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}*/}
            </select>
        </div>
    );
}