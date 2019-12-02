import {createAppContainer}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import MyRecipes from '../screens/my-recipes';
import RecipeSingle from '../screens/recipe-single';
import Resources from '../screens/resources';
import Search from '../screens/search';
import SignUp from '../screens/sign-up';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Login: {screen: Login},
    MyRecipes: {screen: MyRecipes},
    RecipeSingle: {screen: RecipeSingle},
    Resources: {screen: Resources},
    Search: {screen: Search},
    SignUp: {screen: SignUp},
});

// createAppContainer
// export
