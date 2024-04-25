import { Formik, Form, Field } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import { Body } from './SignUpBody.styled';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../../helpers/toast';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const SignUpBody = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Body>
      <h1 className="title">Registration</h1>
      <p className="desc">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={({ email, password, name }, { resetForm }) => {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
              const newUser = {
                name: name,
                email: user.email.toLocaleLowerCase(),
                token: user.accessToken,
              };
              dispatch(setUser(newUser));
              toastSuccess(
                'Congratulations! You have successfully registered. Welcome to our community! Start exploring and enjoy all the benefits of being a member.'
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              toastError(
                `errorCode, ${errorCode}, errorMessage, ${errorMessage}`
              );
            });
          resetForm();
          closeModal();
          navigate('/home');
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper">
            <Field
              className="form-inpt"
              name="name"
              type="text"
              placeholder="Name"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field
              className="form-inpt"
              name="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              className="form-inpt"
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button className="form-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Body>
  );
};
