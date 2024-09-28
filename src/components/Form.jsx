"use client";
import React, { use, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormComponent = ({CloseLoginmodal}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(null);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="max-w-md w-full flex flex-col p-6 rounded-md bg-white text-black">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setFormData(values); 
            setShowPopup(true);  
            resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="block relative">
                <label htmlFor="email" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="block relative">
                <label htmlFor="password" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <a className="text-sm text-[#7747ff]" href="#">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{' '}
          <a className="text-sm text-[#7747ff]" href="#">
            Sign up for free!
          </a>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 text-black">
          <div className="bg-white p-6 rounded-md max-w-sm w-full">
            <h2 className="text-2xl font-bold text-center text-[#7747ff] mb-4">Form Submitted</h2>
            <div className="text-center">
              <p><strong>Email:</strong> {formData?.email}</p>
              <p><strong>Password:</strong> {formData?.password}</p>
              <button
                className="mt-4 bg-[#7747ff] px-4 py-2 text-white rounded"
                onClick={() =>{
                    CloseLoginmodal();
                    setShowPopup(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
