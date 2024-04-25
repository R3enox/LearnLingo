import { Formik, Form, Field } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import { Body } from './SignInBody.styled';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import {toastSuccess, toastWarn } from '../../helpers/toast';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const SignInBody = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Body>
      <h1 className="title">Log In</h1>
      <p className="desc">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={({ email, password }, { resetForm }) => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
              const newUser = {
                email: user.email.toLocaleLowerCase(),
                id: user.uid,
                token: user.accessToken,
              };

              dispatch(setUser(newUser));
              resetForm();
              closeModal();
              navigate('/');
              toastSuccess(
                `Welcome back! You have successfully logged in to our website.`
              );
            })
            .catch(() => {
              toastWarn(
                'Sorry, the email or password you entered is incorrect. Please double-check your credentials and try again.'
              );
            });

          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper">
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
