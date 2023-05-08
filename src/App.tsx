import React, {useState} from 'react';
import {useForm} from "./hooks/UseForm";
import {validationInfo} from "./utils/validationInfo";

import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {BrowserRouter, Route} from 'react-router-dom';
import {Main} from "./Components/Main/Main";




const App = () => {




    return (
        <div >
           {/* <LoginPage/>*/}
            <Main/>
        </div>
    );
};

export default App;