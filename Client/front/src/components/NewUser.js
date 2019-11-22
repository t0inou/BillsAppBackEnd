import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.logChange = this.logChange.bind(this);
    }
    componentDidMount() {
    }
    logChange(e) {
    }
    render() {
        const { classes } = this.props;
        return (
            <Container maxWidth="xs">
                <Typography component="div">
                    <Box textAlign="center" m={1}>
                        Create new vendor
                    </Box>
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="companyName"
                        label="Company Name"
                        name="companyName"
                        autoComplete="companyName"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="city"
                        label="City"
                        type="city"
                        id="city"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="adress"
                        label="Adress"
                        name="adress"
                        autoComplete="adress"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="postalCode"
                        label="Postal Code"
                        type="postalCode"
                        id="postalCode"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="bank"
                        label="Bank Name"
                        name="bankName"
                        autoComplete="bankName"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="country"
                        label="Country"
                        type="country"
                        id="country"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log  in
                        </Button>
                </form>
            </Container>
        );
    }
}

export default withStyles(styles)(NewUser);