
import './App.css'
import {HomePage} from "./Pages/HomePage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import React from "react";
import {RootLayout} from "./Components/RootLayout.tsx";
import {FieldPage} from "./Pages/FieldPage.tsx";
import {StaffPage} from "./Pages/StaffPage.tsx";
import {VehiclePage} from "./Pages/VehiclePage.tsx";
import {CreateLOGPage} from "./Pages/CreateLOGPage.tsx";
import {EquipmentPage} from "./Pages/EquipmentPage.tsx";
import {TaskApp} from "./TestingComponents/TaskApp.tsx";
import {TaskAppReducer} from "./TestingComponents/TaskAppReducer.tsx"
import {CountNumberWithReducer} from "./TestingComponents/CountNumberWithReducer.tsx";
import {NormalButtonComponent, NormalCount} from "./TestingComponents/NormalCount.tsx";
import {ResponsiveForm} from "./TestingComponents/ResponsiveForm.tsx";

function App() {
    const routes = createBrowserRouter([

        {
            path : "/" ,
            element:<RootLayout/>,
            children: [
                {path : "/" ,element:<HomePage/>},
                {path : "/Field" ,element:<FieldPage/>},
                {path : "/Staff" ,element:<StaffPage/>},
                {path : "/Vehicle" ,element:<VehiclePage/>},
                {path : "/Equipment" ,element:<EquipmentPage/>},
                {path : "/CreateLog" ,element:<CreateLOGPage/>},
            ]
        },

    ]);

    return (
        <>
            <RouterProvider router={routes}></RouterProvider>
            {/*<TaskApp></TaskApp>*/}
            {/*<TaskAppReducer></TaskAppReducer>*/}
            {/*<CountNumberWithReducer></CountNumberWithReducer>*/}
            {/*<NormalCount></NormalCount>*/}
            {/*<ResponsiveForm></ResponsiveForm>*/}
        </>
    )
}

export default App
