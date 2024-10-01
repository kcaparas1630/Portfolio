import { FC, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Button from '../../Commons/Button';
import ComponentProps from '../../Types/ComponentProps';
import {
  Header1,
  Header1Container,
  Container,
  StyledForm,
  StyledField,
  StyledTextArea,
} from './Styled-components/ContactMe';

interface SubmissionValues {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactMeComponent: FC<ComponentProps> = ({ isDarkMode }) => {
  const form = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const initialValues: SubmissionValues = {
    from_name: '',
    from_email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().max(30).required('Required'),
    from_email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().max(250).required('Message needs to be 250 characters'),
  });

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm('service_md2cnhn', 'template_423qmhe', form.current, {
          publicKey: '9Z1wPohvJ72jwn1JA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <Container ref={ref}>
      <Header1Container>
        <Header1
          inView={inView}
          isDarkMode={isDarkMode}
        >
          Want to collaborate with me? Chat, or ask a question? Fill out the form and I&apos;ll get
          back to you before one business day!
        </Header1>
      </Header1Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        <Form ref={form}>
          <StyledForm
            inView={inView}
            isDarkMode={isDarkMode}
          >
            <StyledField isDarkMode={isDarkMode}>
              {/** I have no idea why this is complaining. I'm using htmlfor to allow sibling */}
              <label htmlFor="from_name">Name:</label>
              <Field
                id="from_name"
                name="from_name"
                placeholder="Enter your name"
              />
              <div style={{ color: '#e68369', fontStyle: 'italic' }}>
                <ErrorMessage
                  name="from_name"
                  component="div"
                />
              </div>
            </StyledField>
            <StyledField isDarkMode={isDarkMode}>
              <label htmlFor="from_email">Email:</label>
              <Field
                id="from_email"
                name="from_email"
                type="email"
                placeholder="Enter your email"
              />
              <div style={{ color: '#e68369', fontStyle: 'italic' }}>
                <ErrorMessage
                  name="from_email"
                  component="div"
                />
              </div>
            </StyledField>
            <StyledTextArea isDarkMode={isDarkMode}>
              <label htmlFor="message">Message:</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter your message"
              />
              <div style={{ color: '#e68369', fontStyle: 'italic' }}>
                <ErrorMessage
                  name="message"
                  component="div"
                />
              </div>
            </StyledTextArea>
            <Button
              type="submit"
              text="Send"
              isDarkMode={isDarkMode}
            />
          </StyledForm>
        </Form>
      </Formik>
    </Container>
  );
};

export default ContactMeComponent;
