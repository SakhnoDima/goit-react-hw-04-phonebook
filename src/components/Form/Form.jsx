import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import { Label, Button, Forma, Input, Error } from './Form.styles';

const schema = object({
  name: string().required('Name is required!'),
  number: string()
    .required('Number is required!')
    .min(10, 'Too Short!')
    .max(13, 'Too Long!'),
});

const Forms = ({ onSubmit }) => {
  const state = {
    name: '',
    number: '',
  };

  const idNameForm = nanoid();
  const idTelForm = nanoid();

  // === сабміт форми ===

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  // === рендер ===

  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma autoComplete="off">
          <Label htmlFor={idNameForm}>
            Name
            <Input
              type="text"
              name="name"
              id={idNameForm}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            <ErrorMessage component={Error} name="name" />
          </Label>
          <Label htmlFor={idTelForm}>
            Number
            <Input
              id={idTelForm}
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
};
export default Forms;
