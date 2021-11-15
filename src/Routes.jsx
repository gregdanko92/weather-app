import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import NewHomePage from './components/NewHomePage'

function Routes(){
    <Switch>
        <Route path= '/' exact component = {HomePage}/>
        <Route path= '/newhome' exact component = {NewHomePage}/>
    </Switch>
}