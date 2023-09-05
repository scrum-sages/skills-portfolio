import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import Button from './Button';

interface FormValues {
  name: string;
  email: string;
  contactPerson: string;
  message: string;
}

export function ContactForm() {
  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    // Handle your form submission logic here
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        contactPerson: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('* Name is required'),
        email: Yup.string().email('Invalid email').required('* Email is required'),
        contactPerson: Yup.string().required('* Contact person is required'),
        message: Yup.string().required('* A message required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputFieldWrapper>
          <InputLabel htmlFor='name'>
            <span>Name: *</span>
            <ErrorMessage name='name' component='div' />
          </InputLabel>
          <Field as={InputElement} type='text' id='name' name='name' />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel htmlFor='email'>
            <span>Email: *</span>
            <ErrorMessage name='email' component='div' />
          </InputLabel>
          <Field as={InputElement} type='email' id='email' name='email' />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel htmlFor='contactPerson'>
            <span>Which of us would you like to speak to? *</span>
            <ErrorMessage name='contactPerson' component='div' />
          </InputLabel>
          <Field as={DropdownElement} id='contactPerson' name='contactPerson'>
            <option value='' label='Select a contact person' />
            <option value='Jennifer Techel' label='Jennifer Techel' />
            <option value='Caisa Köhlin' label='Caisa Köhlin' />
            <option value='Nathanael Blackbourn' label='Nathanael Blackbourn' />
            <option value='Mimmi Collin' label='Mimmi Collin' />
          </Field>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputLabel>
            <span>Message: *</span>
            <ErrorMessage name='message' component='div' />
          </InputLabel>
          <Field as={TextAreaElement} type='textarea' id='message' name='message' />
        </InputFieldWrapper>
        <Button
          type='submit'
          $text='SEND'
          width='100%'
          color='black'
          $backgroundColor='#eca579'
        ></Button>
      </Form>
    </Formik>
  );
}
const TextAreaElement = styled.textarea`
  border: none;
  border: 1px solid white;
  background-color: transparent;
  color: #ffffff;
  padding: 5px;
  resize: none;
  width: 100% !important;
  height: 8rem !important;
  @media (min-width: 768px) {
    height: 14rem !important;
  }
`;
const DropdownElement = styled.select`
  border: none;
  border-bottom: 1px solid white;
  background-color: #000000;
  color: white;
  margin-bottom: 3px;
  padding: 5px;
  @media (min-width: 768px) {
    margin-bottom: 7px;
  }
`;

const InputElement = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 5px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const InputLabel = styled.label`
  color: #fdfdfd;
  margin-bottom: 5px;
  display: flex;
  gap: 1rem;
  div {
    height: 100%;
    color: red;
    font-size: 0.9rem;
  }
`;
