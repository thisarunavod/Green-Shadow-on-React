import {Outlet} from "react-router";
import {SideMenuBar} from "./SideMenuBar.tsx";

export function RootLayout() {
    return (
        <div className=' flex justify-center items-center mt-[20px] '>
            <SideMenuBar></SideMenuBar>
            <Outlet></Outlet>
        </div>
    );
}