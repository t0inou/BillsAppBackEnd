import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import login from './login';
import Users from './Users';
import NewUser from './NewUser';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

const styles = theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
})

class AppBarComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Invoice App
            </Typography>
                        <nav>
                            <NavLink activeClassName="active" to="/NewUser" className={classes.link} style={{ textDecoration: 'none' }}>
                                Users
                            </NavLink>

                            <NavLink activeClassName="active" to="/NewUser" className={classes.link} style={{ textDecoration: 'none' }}>
                                Invoices
            </NavLink>

                            <NavLink activeClassName="active" to="/NewUser" className={classes.link} style={{ textDecoration: 'none' }}>   New User</NavLink>


                            <NavLink activeClassName="active" to="/NewUser" className={classes.link} style={{ textDecoration: 'none' }}>   New Invoice</NavLink>

                        </nav>
                        <NavLink activeClassName="active" to="/login" className={classes.link} style={{ textDecoration: 'none' }}>  <Button color="primary" variant="outlined" className={classes.link}>
                            Login
                        </Button> </NavLink>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/login" component={login} />
                    <Route path="/users" component={Users} />
                    <Route path="/NewUser" component={NewUser} />
                </Switch>
            </Router>
        )
    }
}

export default withStyles(styles)(AppBarComponent);










