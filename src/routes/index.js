import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/pages/Home";
import SHome from "../components/pages/SHome";
import Layout from "../components/Layout";
import Scrolltothetop from '../components/UI/ScrolltotheTop'

const AllRoutes = () => {
    return (
        <BrowserRouter>
        <Scrolltothetop />
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