import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import About from '../pages/about';
import Detail from '../pages/detail';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

const RouterComponent = () => {

	return (
		<Router>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/register' element={ <Register /> } />
				<Route path='/login' element={ <Login /> } />
				<Route path='/about' element={ <About /> } />
				<Route path='/detail/:id' element={ <Detail /> } />
			</Routes>
		</Router>
	);
};

export default RouterComponent;