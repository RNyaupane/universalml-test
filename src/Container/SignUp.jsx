import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik"
import * as Yup from 'yup'; //For Form Validation
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register, resetState } from '../features/auth/AuthSlice';


const SignUp = () => {
    const [notify, setNotify] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess && message !== "") {
            setNotify(() => toast.success(message))
        }
        if (isError && message !== "") {
            setNotify(() => toast.error(message))
        }
        dispatch(resetState())
    }, [isSuccess, isError, isLoading])

    let userSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        validationSchema: userSchema,
        onSubmit: values => {
            dispatch(register(values))
            formik.resetForm();
        }
    })

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, []);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    // Define a variable for the button class based on form validation status
    const buttonClass = formik.isValid ? 'bg-blue-500' : 'bg-zinc-500';

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
                        <button className="bi bi-at absolute text-2xl text-secondary top-[50%] transform -translate-y-1/2 left-3"></button>
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="bg-gray-100 rounded-xl pl-12 py-3 w-full focus:outline-none"
                            value={formik.values.email}
                            onChange={formik.handleChange('email')}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="text-red-500 text-sm">&nbsp;
                        {formik.touched.username && formik.errors.username ? (
                            <div>{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="relative">
                        <button className="bi bi-person absolute text-xl text-secondary top-[50%] transform -translate-y-1/2 left-3"></button>
                        <input
                            type="text"
                            autoComplete="off"
                            name='username'
                            placeholder="User name"
                            className="bg-gray-100 rounded-xl pl-12 py-3  w-full focus:outline-none"
                            value={formik.values.username}
                            onChange={formik.handleChange('username')}
                            onBlur={formik.handleBlur('username')}
                        />
                    </div>
                    <div className="text-red-500 text-sm ">&nbsp;
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="relative">
                        <button className="bi bi-bag absolute text-lg text-secondary top-[40%] transform -translate-y-1/2 left-3"></button>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder="Password"
                            className="bg-gray-100 rounded-xl pl-12 py-3 mb-4 w-full pr-10 focus:outline-none"
                            value={formik.values.password}
                            onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur}
                        />
                        <span
                            className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'
                                } absolute top-1/2 transform -translate-y-[80%] pr-3 right-3 text-gray-600 cursor-pointer`}
                            onClick={handlePasswordToggle}
                        ></span>
                    </div>
                    {/* <div className="text-right">
                        <a href="#" className="text-secondary hover:underline text-sm">
                            Forgot Password?
                        </a>
                    </div> */}
                    <button className='bg-blue-500 text-xl font-bold text-white w-full px-4 py-2 sm:py-3 rounded-xl mt-14' type='submit'>
                        Signup
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}
export default SignUp