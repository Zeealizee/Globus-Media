import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExperience } from "../../store/actions/profileActions";

class AddExperience extends Component {
  state = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false
  };

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addExperience(expData, this.props.history);
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheckHandler = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Experience</h1>
              <p className="lead text-center">
                Add any job or position that you have hadin the past or current.
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmitHandler}>
                <Input
                  placeholder="* Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChangeHandler}
                  error={errors.company}
                />
                <Input
                  placeholder="* Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChangeHandler}
                  error={errors.title}
                />
                <Input
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChangeHandler}
                  error={errors.location}
                />
                <h6>From Date</h6>
                <Input
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChangeHandler}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <Input
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChangeHandler}
                  error={errors.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheckHandler}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <TextArea
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChangeHandler}
                  error={errors.description}
                  info="Tell us about the the position"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
