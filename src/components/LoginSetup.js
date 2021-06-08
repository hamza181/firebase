import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

var user = false

function LoginSetup() {
	return <div>{user ? <Dashboard /> : <Login />}</div>;
}

export default LoginSetup;
