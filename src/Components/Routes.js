import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

const LoginRoutes =  () =>(
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/explore" component={Explore}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/:username" component={Profile}/>
        <Redirect from="*" to ="/" />
    </Switch>
);

const LogoutRoutes = () =>( 
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Redirect from="*" to ="/" />
    </Switch>
);


const appRouter = ({isLogin}) => (
            isLogin ? <LoginRoutes /> : <LogoutRoutes />
    );

 appRouter.propTypes = {
    isLogin:PropTypes.bool.isRequired
}

export default appRouter;