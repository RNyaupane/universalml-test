import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from "formik"
import * as Yup from 'yup'; //For Form Validation
import { login, resetState } from '../features/auth/AuthSlice';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notify, setNotify] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { access, refresh, isLoading, isError, isSuccess, message, isAuthneticated } = useSelector((state) => state.auth)

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isSuccess && message !== "") {
      setNotify(() => toast.success(message))
      dispatch(resetState())
    }
    if (isError && message !== "") {
      setNotify(() => toast.error(message))
      dispatch(resetState())
    }
  }, [isSuccess, isError, isLoading])

  let userSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: userSchema,
    onSubmit: values => {
      dispatch(login(values))
      formik.resetForm();
    }
  })

  // if user is  authenticated redirect to homepage
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      const delay = 2000;
      const timerId = setTimeout(() => {
        navigate('/ai-store');
      }, delay);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [isAuthenticated]);


  return (
    <>
      <div className="mt-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="text-red-500 text-sm">&nbsp;
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="relative">
            <button className="bi bi-person absolute text-xl text-secondary top-[50%] transform -translate-y-1/2 left-3"></button>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-gray-100 rounded-xl pl-12 py-3 w-full focus:outline-none"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
          </div>
          {/* <div className="text-red-500 text-sm">&nbsp;Wrong Password</div> */}
          <div className="text-red-500 text-sm m-0 p-0">&nbsp;
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="relative">
            <button className="bi bi-bag absolute text-lg text-secondary top-[40%] transform -translate-y-1/2 left-3"></button>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              id='password'
              className="bg-gray-100 rounded-xl pl-12 py-3 mb-4 w-full pr-10 focus:outline-none"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            <span
              className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'
                } absolute top-1/2 transform -translate-y-[80%] pr-3 right-3 text-gray-600 cursor-pointer`}
              onClick={handlePasswordToggle}
            ></span>
          </div>
          <div className="text-right">
            <a href="#" className="text-secondary hover:underline text-sm">
              Forgot Password?
            </a>
          </div>
          <button className='bg-blue-500 text-xl font-bold text-white w-full px-4 py-2 sm:py-3 rounded-xl mt-14 xl:mt-14' type='submit'>
            Login
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {/* Same as */}
          <ToastContainer />
        </form>
      </div>

    </>
  )
}

export default Login