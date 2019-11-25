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

class NewInvoice extends Component {
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
                        Create new invoice
                    </Box>
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="quantity"
                        label="Quantity"
                        name="quantity"
                        autoComplete="quantity"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Description"
                        type="description"
                        id="description"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="rate"
                        label="Rate"
                        name="rate"
                        autoComplete="rate"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="amount"
                        label="Amount"
                        type="amount"
                        id="amount"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="vat"
                        label="Vat"
                        name="vat"
                        autoComplete="vat"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="total"
                        label="Total"
                        type="total"
                        id="total"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="contractRef"
                        label="Contract Reference"
                        name="contractRef"
                        autoComplete="contractRef"
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
                        name="pointOfContact"
                        label="Point of Contact"
                        type="pointOfContact"
                        id="pointOfContact"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="invoiceNumber"
                        label="Invoice Number"
                        type="invoiceNumber"
                        id="invoiceNumber"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="invoiceDate"
                        label="Invoice Date"
                        type="invoiceDate"
                        id="invoiceDate"
                        autoComplete="current-password"
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

export default withStyles(styles)(NewInvoice);