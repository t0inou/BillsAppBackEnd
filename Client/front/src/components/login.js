import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const axios = require('axios')

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
});

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            token: ''
        }
        this.logChange = this.logChange.bind(this);
        this.Login = this.Login.bind(this);
    }
    componentDidMount() {
    }
    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    Login() {
        let currentComponent = this;
        let data = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
        axios.post('http://localhost:3000/login', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                currentComponent.setState((state, props) => {
                    return ({
                        token: response.data,
                    });
                })
                localStorage.setItem('token', currentComponent.state.token)
            })
            .catch(function (error) {
                localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoiYWRtaW5AYWRtaW4uYWRtaW4iLCJpc3MiOiJhdXRoMCIsImlkIjoyLCJ1c2VybmFtZSI6ImFkbWluIiwidGltZXN0YW1wIjoxNTYxNTQ4NTY0LCJpbmZvIjoiVm9pY2kgdW5lIGluZm8gYWJzb2x1bWVudCBpbnV0aWxlIGp1c3RlIHBvdXIgcXVlIGxlIHRva2VuIGdyYW5kaXNzZS4ifQ.CFyfWDKpBlHVEASd9YHrNkzRsPGEZ7vvjaohADegqLQ')
            });
    }
    render() {
        const { classes } = this.props;
        console.log(this.state.email);
        console.log(this.state.password);
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.logChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.logChange}
                        />
                        <div className={classes.paper2}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.Login}
                        >
                            Log  in
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);