import { useState} from 'react'
import { Link, Navigate} from 'react-router-dom'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './Css/LoginSignup.css'


const Login = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [errorMessage, setErrorMessage] = useState('');
  const [redirectToSignup, setRedirectToSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUsers = JSON.parse(localStorage.getItem('items')) || [];
  // const [curruser,setcurruser]=useState([]);

  // const [items, setItems] = useState([]);
  // const navigate = useNavigate();
  // Yup form validation
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

const handleLogin = (values, { setSubmitting }) => {
    const user = storedUsers.find(user => user.email === values.email);

    if (!user) {
      alert('Email not found. Redirecting to Sign Up.');
      setRedirectToSignup(true);
    } else if (user.password !== values.password) {
      alert('Incorrect password');
    } else {
      alert('Login successful');
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store the logged-in user
      setIsLoggedIn(true);
    }

    setSubmitting(false);
  };

//   const storedUsers=JSON.parse(localStorage.getItem('items'))||[];
//   const handleLogin=(e)=>{
//     e.preventDefault();
//     const user =storedUsers.find(item=>item.email===email);
  
//   if(!user){
//     alert('Email not fount. Redirecting yo Sign Up');
//     setRedirectToSignup(true);
//   }
//   else if(user.password!==password){
//     setErrorMessage('Incorrect Password');
//   }
//   else{
//     alert('login successfull');
//     localStorage.setItem('currentUser', JSON.stringify(user));
//     // console.log(curruser,"curruser");
//     setIsLoggedIn(true);
//   }
// };
if (redirectToSignup) {
  return <Navigate to="/signup" />;
}
if (isLoggedIn) {
  return <Navigate to="/" />; // You can change "/dashboard" to whatever route you have for logged-in users
}
 

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Login Here</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
        {({isSubmitting})=>(
          <Form className="loginsignup-fields">
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" className="error-message" />

              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
        ) } 
        </Formik>
        
        
<p>
  Don't have an account? <Link to="/signup">Sign Up here</Link>
</p>
        </div>

        {/* <p className='loginsignup-login'>Already have an account?
          <Link to="/signup"><span>Login here</span></Link>
        </p> */}
        
        {/* <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='agree' />
          <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy</label>
        </div> */}
      </div>
  )
}

export default Login;
