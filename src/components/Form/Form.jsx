import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import { Label, Button, Forma, Input, Error } from './Form.styles';

class Forms extends Component {
  state = {
    name: '',
    number: '',
  };

  schema = object({
    name: string().required('Name is required!'),
    number: string()
      .required('Number is required!')
      .min(10, 'Too Short!')
      .max(13, 'Too Long!'),
  });
  idNameForm = nanoid();
  idTelForm = nanoid();

  // === сабміт форми ===

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  // === рендер ===

  render() {
    return (
      <>
        <Formik
          initialValues={this.state}
          onSubmit={this.handleSubmit}
          validationSchema={this.schema}
        >
          <Forma autoComplete="off">
            <Label htmlFor={this.idNameForm}>
              Name
              <Input
                type="text"
                name="name"
                id={this.idNameForm}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
              <ErrorMessage component={Error} name="name" />
            </Label>
            <Label htmlFor={this.idTelForm}>
              Number
              <Input
                id={this.idTelForm}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              />
              <ErrorMessage component={Error} name="number" />
            </Label>

            <Button type="submit" title={'Add contact'}>
              Add contact
            </Button>
          </Forma>
        </Formik>
      </>
    );
  }
}
export default Forms;
