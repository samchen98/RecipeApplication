import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './screens/home';
import Login from './screens/login';
import MyRecipes from './screens/my-recipes';
//import RecipeSingle from './screens/recipe-single';
import Resources from './screens/resources';
//import Search from './screens/search';
import SignUp from './screens/sign-up';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/my-recipes" exact component={MyRecipes} />
      <Route path="/resources" exact component={Resources} />
      {/* <Route path="/search" exact component={Search} /> */}
    </Switch>
  );
}