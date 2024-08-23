import React, { useEffect, useRef, useState } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const form = useRef();
  const captcha = useRef(null);
  const [CaptchaValue, cambiarCaptchaValue] = useState(false);

  const onChangeCaptcha = () => {
    if (captcha.current.getValue()) {
      cambiarCaptchaValue(true);
    } else {
      cambiarCaptchaValue(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (CaptchaValue == true) {
      emailjsFuncion();
    } else {
      cambiarCaptchaValue(false);
    }
  };

  const emailjsFuncion = () => {
    emailjs
      .sendForm('service_o7jfre1', 'template_rdbf62m', form.current, {
        publicKey: 'lL8-frxdBlhkmSDhh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('formContact').reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="text-white w-full text-start">
      <form
        class="max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto"
        ref={form}
        onSubmit={sendEmail}
        id="formContact"
      >
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="user_name"
              id="user_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <svg
              class="w-4 h-4 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <label
              for="floating_first_name"
              class="pl-5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="user.email"
              id="user.email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <svg
              class="w-[18px] h-[18px] peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <label
              for="floating_last_name"
              class="pl-6 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 mt-5 group">
          <textarea
            type="text"
            name="message"
            id="message"
            className="block px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          ></textarea>
          <label
            for=""
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
          >
            Escribe tu propuesta
          </label>
        </div>
        <div className="mb-5 justify-center md:justify-start items-center text-center md:text-start md:space-x-5 flex flex-col md:flex-row">
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LePkCsqAAAAAHL8yq08nc91pFRw_nix5OR-qRr0"
            onChange={onChangeCaptcha}
          />
          <span
            className={
              CaptchaValue == true
                ? `text-green-600 transition-all duration-700`
                : `text-red-600 transition-all duration-700`
            }
          >
            {CaptchaValue === true
              ? ''
              : 'Se tiene que realizar el captcha para enviar el formulario'}
          </span>
        </div>
        <button
          type="submit"
          class="text-white bg-slate-950 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800  dark:hover:bg-slate-950 dark:focus:ring-blue-800"
        >
          Contactar
        </button>
      </form>
    </section>
  );
}
