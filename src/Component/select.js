import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    member: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { input, classes ,handleSubmit, members , ...custom} = this.props;

    return (
      <form autoComplete="off" onSubmit ={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Member</InputLabel>
          <Select
            {...input}
            {...custom}
            className={classes.textField}
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.member}
            onChange={this.handleChange}
            inputProps={{
              name: 'member',
              id: 'demo-controlled-open-select',
            }}
          >
            {members.map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);