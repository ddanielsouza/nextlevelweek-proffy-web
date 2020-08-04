import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={Landing}/>
            <Route path="/study" exact={true} component={TeacherList}/>
            <Route path="/give-classes" exact={true} component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes;