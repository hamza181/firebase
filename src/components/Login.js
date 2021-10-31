import React, { useState } from 'react';
import firebase from '../firebase/cofig';
import clsx from 'clsx';
import { Avatar, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import auth from '../firebase/cofig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: '500px',
		margin: '45px 0px'
	},

	grid: {
		justifyContent: 'center',
		backgroundColor: '#f3f3f3',
		width: 'auto'
	},

	form: {
		display: 'grid',
		margin: '20px 8px'
	},

	textArea: {
		marginTop: '40px'
	},

	loginBtn: {
		marginTop: '50px',
		height: '40px'
	},

	avatar: {
		height: '100px',
		width: '100px',
		margin: 'auto'
	},

	span: {
		color: 'blue',
		cursor: 'pointer'
	}
}));

function Login() {
	const classes = useStyles();

	const [ values, setValues ] = React.useState({
		password: '',
		showPassword: false
	});

	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ hasAccount, setHasAccount ] = useState(false);
	// var emailValue = React.createRef();	
	// var passwordValue = React.createRef();	


	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		// setPassword(event.target.value);
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// validation();
	};

	// function validation() {
		// const mailformat = /\S+@\S+\.\S+/;
		// const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

		// setEmail(emailValue.current.value)
		
		// if(mailformat.test(email) && strongPassword.test(password)){
			// console.log(emailValue.current.value);
			// console.log("password");
		// 	handleSubmit();

		// }
		// else{
		// 	console.log("error");
		// }
	// }

	function validateEmail(e){

		// const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const mailformat = /\S+@\S+\.\S+/;
		if(mailformat.test(e.target.value)){

			setEmail(e.target.value)
			
			setTimeout(()=>{
				console.log(email);

			},5000)
		}
	}
	
	function handleSignup() {
		// firebase
		
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				// ..
			});
			
	}

	function handleSignin() {
			signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.grid}>
				<Grid item xs={11} sm={8} md={5}>
					<Paper className={classes.paper} elevation={4}>
						<form
							className={(classes.root, classes.form)}
							noValidate
							autoComplete="off"
							onSubmit={handleSubmit}
						>
							<Avatar className={classes.avatar} src="/broken-image.jpg" />

							<TextField
								className={classes.textArea}
								id="outlined-basic"
								label="Email"
								variant="outlined"
								onChange={validateEmail}
							/>

							<FormControl
								className={clsx(classes.margin, classes.textField, classes.textArea)}
								variant="outlined"
							>
								<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password"
									type={values.showPassword ? 'text' : 'password'}
									value={values.password}
									onChange={handleChange('password')}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{values.showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									}
									labelWidth={70}
								/>
							</FormControl>
							<div>
								{!hasAccount ? (
									<div>
										<Button
											className={classes.loginBtn}
											variant="contained"
											color="primary"
											type="submit"
											onClick={handleSignup}
										>
											Sign up
										</Button>
										<p>
											Already have an account ?&nbsp;
											<span
												className={classes.span}
												onClick={() => {
													setHasAccount(!hasAccount);
												}}
												itemType="button"
											>
												&nbsp;Sign in
											</span>
										</p>
									</div>
								) : (
									<div>
										<Button
											className={classes.loginBtn}
											variant="contained"
											color="primary"
											type="submit"
											onClick={handleSignin}
										>
											Sign in
										</Button>
										<p>
											Don't have an account ?&nbsp;
											<span
												className={classes.span}
												onClick={() => {
													setHasAccount(!hasAccount);
												}}
											>
												&nbsp;Sign up
											</span>
										</p>
									</div>
								)}
							</div>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Login;
