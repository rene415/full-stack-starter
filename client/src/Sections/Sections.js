import { Route, Switch, useRouteMatch } from "react-router-dom";
import SectionItems from "../SectionItems";
import SectionsList from './SectionsList';
import SectionsNew from './SectionsNew';

function Sections(){
    const {path} = useRouteMatch();
    return(
        <Switch>
            <Route exact path={path}>
                <SectionsList />
            </Route>
            <Route path={`${path}/new`}>

            </Route>
        </Switch>
    );
}

export default Sections;