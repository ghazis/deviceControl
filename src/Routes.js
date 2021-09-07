import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SecretPage from './SecretPage';

const Body = () => {
	return (
		<Switch>
		  <Route exact path="/" component={Home} />
		  <Route path="/easteregg" component={SecretPage} />
		</Switch>
	);
}

export default Body;