import React, { useState } from 'react';
import {
	Grid,
	Paper,
	makeStyles,
	TextField,
	IconButton,
	InputLabel,
	OutlinedInput,
	FormControl,
	InputAdornment,
	Button,
	Avatar
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';

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
		cursor: 'pointer',
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

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		setPassword(event.target.value);
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

	function validation() {
		// const mailformat = /\S+@\S+\.\S+/;
		const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

		// if(mailformat.test(email) && strongPassword.test(password)){
		// 	console.log(email);
		// 	console.log(password);
		// 	handleSubmit();

		// }
		// else{
		// 	console.log("error");
		// }
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
								onChange={(e) => {
									const mailformat = /\S+@\S+\.\S+/;

									if (mailformat.test(e.target.value)) setEmail(e.target.value);
									console.log(email);
								}}
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
