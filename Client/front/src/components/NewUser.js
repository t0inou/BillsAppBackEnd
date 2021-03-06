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
                        id="contractorName"
                        label="Contractor Name"
                        name="contractorName"
                        autoComplete="contractorName"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="companyName"
                        label="Company Name"
                        type="companyName"
                        id="companyName"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="companyAdress"
                        label="Company Adress"
                        name="companyAdress"
                        autoComplete="companyAdress"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="companyRegistrationNumber"
                        label="Company Registration Number"
                        type="companyRegistrationNumber"
                        id="companyRegistrationNumber"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="vatId"
                        label="Vat Id"
                        name="vatId"
                        autoComplete="vatId"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phoneNumber"
                        label="Phone Number"
                        type="phoneNumber"
                        id="phoneNumber"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dayRate"
                        label="Day Rate"
                        name="dayRate"
                        autoComplete="dayRate"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="fromDate"
                        label="From Date"
                        type="fromDate"
                        id="fromDate"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="toDate"
                        label="To Date"
                        type="toDate"
                        id="toDate"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="contractRef"
                        label="Contract Reference"
                        type="contractRef"
                        id="contractRef"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="contractDescription"
                        label="Contract Description"
                        type="contractDesription"
                        id="contractDescription"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="accountName"
                        label="Account Name"
                        type="accountName"
                        id="accountName"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="bankName"
                        label="Bank Name"
                        type="bankName"
                        id="bankName"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="sortCode"
                        label="Sort Code"
                        type="sortCode"
                        id="sortCode"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="accountNumber"
                        label="Account Number"
                        type="accountNumber"
                        id="accountNumber"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="userName"
                        label="User Name"
                        type="userName"
                        id="userName"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="User's email"
                        type="email"
                        id="email"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="userPassword"
                        label="User Password"
                        type="userPassword"
                        id="userPassword"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
                        </Button>
                </form>
            </Container>
        );
    }
}

export default withStyles(styles)(NewUser);