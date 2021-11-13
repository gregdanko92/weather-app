import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'

function Routes(){
    <Switch>
        <Route path= '/' exact component = {HomePage}/>
    </Switch>
}