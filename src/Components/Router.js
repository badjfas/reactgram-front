import {HashRouter as Route,Switch} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";

const LoginRoutes =  () =>(
    <>
        <Route exact path="/" component={Feed}/>
    </>
);

const LogoutRoutes = () =>( 
    <>
        <Route exact path="/" component={Auth}/>
    </>
);

const appRouter = ({isLogin}) => (
        <Switch>
            {isLogin ? <LoginRoutes /> : <LogoutRoutes />}
        </Switch>
    );

 appRouter.propTypes = {
    isLogin:PropTypes.bool.isRequired
}

export default appRouter;