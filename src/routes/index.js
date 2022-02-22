import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/pages/Home";
import SHome from "../components/pages/SHome";
import Layout from "../components/Layout"

const AllRoutes = () => {
    return (
        <BrowserRouter>
         <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/landlord" component={SHome} />
            </Switch>
         </Layout>
        </BrowserRouter>
    )
   
}

export default AllRoutes;