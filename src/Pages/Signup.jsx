// import React, { useState, useEffect } from 'react'
import './Css/LoginSignup.css'
import { Link, useNavigate} from 'react-router-dom'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';
const Signup = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // Yup validation
  const validationSchema=Yup.object({
    name:Yup.string().required('Name is required'),
    email:Yup.string().email('Invalid email format').required('Email is required'),
    password:Yup.string().min(6,'Password must be atleast 6 characters').required('Password is required'),

  });
  const handleSignup=(values,{setSubmitting})=>{
    const storedUsers=JSON.parse(localStorage.getItem('items'))||[];
    const emailExists=storedUsers.some(user=>user.email===values.email);
    if (emailExists) {
      alert('Email already exists!');
    } else {
      const newUser = { name: values.name, email: values.email, password: values.password };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('items', JSON.stringify(updatedUsers));

      alert('Signup successful');
      navigate('/login'); // Redirect to login after signup
    }

    setSubmitting(false)
  };

  // useEffect(() => {
  //   const storedItems =JSON.parse(localStorage.getItem('items'));
  //   if (storedItems) {
  //     setItems(storedItems);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const emailExists = items.some(item => item.email === email);

  //   if (emailExists) {
      
  //     navigate('/signup');
  //     alert('Email already exists!');
  //   } else {
  //     const newUser = { name, email, password };
  //     setItems([...items, newUser]);

  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //   }
  //   console.log(items,"items"); 
  // };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <Formik
        initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}>
          {({ isSubmitting }) => (
            <Form className="loginsignup-fields">
              <Field type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" className="error-message" />

              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" className="error-message" />

              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />

              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>


       

        <p className='loginsignup-login'>Already have an account?
          <Link to="/login"><span>Login here</span></Link>
        </p>
        
        {/* <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='agree' />
          <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy</label>
        </div> */}
      </div>
    </div>
  )
}

export default Signup;
