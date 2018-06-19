import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {


  renderField(field) {
    // Get the meta property off the field object.
    // Also, get the touched and error properties from the meta object that we just pulled off the field object.
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
      <label>{field.label}</label>
        <input
          {...field.input}
          className="form-control"
          type="text"
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit"> Submit </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate,
})(PostsNew);