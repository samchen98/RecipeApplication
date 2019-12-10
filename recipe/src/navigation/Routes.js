import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../screens/home';
import Login from '../screens/login';
import MyRecipes from '../screens/my-recipes';
import AllRecipes from '../screens/all-recipes';
import RecipeSingle from '../screens/recipe-single';
import Resources from '../screens/resources';
import Search from '../screens/search';
import SignUp from '../screens/sign-up';
import Create from '../screens/create';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/my-recipes" exact component={MyRecipes} />
<<<<<<< HEAD:recipe/src/Routes.js
      <Route path="/recipe-single" exact component={RecipeSingle} />
=======
      <Route path="/all-recipes" exact component={AllRecipes} />
>>>>>>> 91a2c17b1a955b90dfa12d44a55def0b7e8c5940:recipe/src/navigation/Routes.js
      <Route path="/create" exact component={Create} />
      {/*Might change this route*/}
      <Route path="/home/:id" component = {RecipeSingle} /> 
      <Route path="/resources" exact component={Resources} />
      <Route path="/search" exact component={Search} />
    </Switch>
  );
}