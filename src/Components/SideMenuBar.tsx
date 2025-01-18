import {Link} from "react-router";
import {useState} from "react";
import "../assets/CSS/SlideMenuBar.css"

export function SideMenuBar() {

    const [menuColorList,setMenuItemColor] = useState([Array(4).fill('')]);
    const[fontStyleList,setFontStyleList] = useState([Array(4).fill('')]);

    const handleLinkClick = (i:number)=> {
        const styleList:string[] = ['','','','']
        styleList[i] = 'bg-lime-300'
        setMenuItemColor(styleList)

        const fontList:string[] = ['','','','']
        fontList[i] = 'font-extrabold text-2xl text-blue-500'
        setFontStyleList(fontList)
    }

    return (
        <div className="SideMenuBar bg-slate-100 w-[300px] h-[600px] flex items-center justify-center shadow-lg">
            <nav>
                <ul>
                    <li className={`custom-link }`} onClick={() => handleLinkClick(0)}>
                        <Link to={'/'}>
                            <div className={`custom-link-div ${menuColorList[0]} ${fontStyleList[0]}`}>
                                <span className='w-[70px] text-4xl'>📊</span><p>DASHBOARD</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`custom-link ${menuColorList[6]}`}
                        onClick={() => handleLinkClick(6)}>
                        <Link to={'/Crop'}>
                            <div className={`custom-link-div ${menuColorList[6]} ${fontStyleList[6]}`}>
                                <span className='w-[70px] text-4xl'>🌾</span>
                                <p>CROPS</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`custom-link`} onClick={() => handleLinkClick(1)}>
                        <Link to={'/Field'}>
                            <div className={`custom-link-div ${menuColorList[1]} ${fontStyleList[1]}`}>
                                <span className='w-[70px] text-4xl'>🌱</span><p>FIELDS</p>
                            </div>
                        </Link></li>
                    <li className={`custom-link ${menuColorList[2]}`}
                        onClick={() => handleLinkClick(2)}>
                        <Link to={'/Staff'}>
                            <div className={`custom-link-div ${menuColorList[2]} ${fontStyleList[2]}`}>
                                <span className='w-[70px] text-4xl flex justify-start'>🧑‍🌾</span>
                                <p>STAFF</p>
                            </div>
                        </Link></li>
                    <li className={`custom-link ${menuColorList[3]}`}
                        onClick={() => handleLinkClick(3)}>
                        <Link to={'/Vehicle'}>
                            <div className={`custom-link-div ${menuColorList[3]} ${fontStyleList[3]}`}>
                                <span className='w-[70px] text-4xl'>&#128668;</span>
                                <p>VEHICLES</p>
                            </div>
                        </Link></li>
                    <li className={`custom-link ${menuColorList[4]}`}
                        onClick={() => handleLinkClick(4)}>
                        <Link to={'/Equipment'}>
                            <div className={`custom-link-div ${menuColorList[4]} ${fontStyleList[4]}`}>
                                <span className='w-[70px] text-4xl'>&#128736;</span>
                                <p>EQUIPMENT</p>
                            </div>
                        </Link></li>
                    <li className={`custom-link ${menuColorList[5]}`}
                        onClick={() => handleLinkClick(5)}>
                        <Link to={'/CreateLog'}>
                            <div className={`custom-link-div ${menuColorList[5]} ${fontStyleList[5]}`}>
                                <span className='w-[70px] text-4xl'>📃</span>
                                <p>CREATE LOG</p>
                            </div>
                        </Link></li>
                </ul>
            </nav>
        </div>
    );

}