import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Body } from './BookBody.styled.jsx';
import { useNavigate } from 'react-router-dom';

const phoneRegExp = /^[0-9]+$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const BookSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .matches(emailRegExp, 'Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number must contain only digits')
    .min(9, 'Phone number must be at least 9 digits')
    .required('Phone number is required'),
  reason: Yup.string().required('Reason is required'),
});

export const BookBody = ({ teacher, closeModal }) => {
  const navigate = useNavigate();
  const { name, surname, avatar_url } = teacher;

  return (
    <Body>
      <h1 className="main-title">Book trial lesson</h1>
      <p className="desc">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className="img-text-wrapper">
        <img className="avatar" src={avatar_url} alt={`${name} ${surname}`} />
        <div className="text-wrapper">
          <p className="teach-desc">Your teacher</p>
          <h4 className="rev-name">{`${name} ${surname}`}</h4>
        </div>
      </div>

      <h3 className="title">What is your main reason for learning English?</h3>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
        }}
        validationSchema={BookSchema}
        onSubmit={({ reason, fullName, email, phone }, { resetForm }) => {
          resetForm();
          closeModal();
          navigate('/teachers');
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper">
            <div className="radio-group">
              <div className="radio">
                <Field
                  id="radio-first"
                  name="reason"
                  value="Career and business"
                  type="radio"
                />
                <label htmlFor="radio-first" className="radio-label">
                  Career and business
                </label>
              </div>
              <div className="radio">
                <Field
                  id="radio-second"
                  name="reason"
                  value="Lesson for kids"
                  type="radio"
                />
                <label htmlFor="radio-second" className="radio-label">
                  Lesson for kids
                </label>
              </div>
              <div className="radio">
                <Field
                  id="radio-third"
                  name="reason"
                  value="Living abroad"
                  type="radio"
                />
                <label htmlFor="radio-third" className="radio-label">
                  Living abroad
                </label>
              </div>
              <div className="radio">
                <Field
                  id="radio-fourth"
                  name="reason"
                  value="Exams and coursework"
                  type="radio"
                />
                <label htmlFor="radio-fourth" className="radio-label">
                  Exams and coursework
                </label>
              </div>
              <div className="radio">
                <Field
                  id="radio-fifth"
                  name="reason"
                  value="Culture, travel or hobby"
                  type="radio"
                />
                <label htmlFor="radio-fifth" className="radio-label">
                  Culture, travel or hobby
                </label>
              </div>
            </div>
            <div className="input-form">
              <Field
                className="form-inpt"
                name="fullName"
                type="text"
                placeholder="Full Name"
              />
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
              <Field
                className="form-inpt"
                name="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                className="form-inpt"
                name="phone"
                type="tel"
                placeholder="Phone number"
              />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </div>
            <button className="form-btn" type="submit">
              Book
            </button>
          </Form>
        )}
      </Formik>
    </Body>
  );
};
