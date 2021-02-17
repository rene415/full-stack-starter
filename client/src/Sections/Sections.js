import { Route, Switch, useRouteMatch } from "react-router-dom";
import SectionItems from "../SectionItems";
import SectionItemForm from "../SectionItems/SectionItemForm";
import SectionsList from './SectionsList';
import SectionForm from './SectionForm';

function Sections(){
    const {path} = useRouteMatch();
    return(
        <Switch>
            <Route exact path={path}>
                <SectionsList />
            </Route>
            <Route path={`${path}/new`}>
                <SectionForm />
            </Route>
        </Switch>
    );
}

export default Sections;