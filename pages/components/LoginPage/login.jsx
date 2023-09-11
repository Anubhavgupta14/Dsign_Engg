
import React, { useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { axios } from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [timer, setTimer] = useState(null);
  // const [email, setemail] = useState("");
  // const [name, setname] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [toggle_form, settoggle_form] = useState(true);
  const [newpassword, setnewpassword] = useState("");
  // const [cnfpassword, setcnfpassword] = useState("");
  const [matchpass, setmatchpass] = useState(true);
  const [token, setToken] = useState('');
  const [user,setuser] = useState({email:"",password:""})

  const handleLogin = () => {
    if (isLoggingIn) return;

    setIsLoggingIn(true);
    loginStateToggle();

    clearTimeout(timer);
    setTimer(setTimeout(reset, 1500));
  };


  const loginhandle = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/users/signin/route', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token || 'authed',
        },
      });

      // Check if response.data exists before accessing the token property
      

      if (response.data && response.data.token) {
        setToken(response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        toast.success('Login successful. Redirecting to the dashboard.');
        // router.push('/admin/dashboard');
      } else {
        // Handle the case where response.data or response.data.token is undefined
        console.error('Invalid response:', response);
        toast.error('Login failed. Please try again.');
      }

    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  const tokenauth = async()=>{
    const test = await fetch('/api/users/signin/test');
      console.log(test)
  }

  const logout=async()=>{
      const ok = await fetch('/api/users/signout/route');
      console.log(ok)
  }


  const loginStateToggle = () => {
    const loginBtn = document.querySelector("[data-login]");
    if (loginBtn) {
      loginBtn.disabled = isLoggingIn;
      loginBtn.setAttribute("data-login", isLoggingIn);
    }
  };

  const reset = () => {
    setIsLoggingIn(false);
    loginStateToggle();
    const form = document.querySelector(".login__form_log");
    form.reset();
  };

  const mail_check = (e) => {
    const value = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValidEmail || value === ""); // Update email validity
    setuser({...user, email: value}); // Update email value in the state
    // console.log(isEmailValid);
  };


  const forget = () => {
    settoggle_form(!toggle_form);
  }

  useEffect(() => {
    // Initialize on component mount
    const year = document.querySelector("[data-year]");
    if (year) year.innerHTML = new Date().getFullYear();

    const form = document.querySelector(".login__form_log");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleLogin();
    });

    const loginBtn = document.querySelector("[data-login]");
    loginBtn.addEventListener("click", () => {
      handleLogin();
    });

    return () => {
      // Cleanup on component unmount
      form.removeEventListener("submit", handleLogin);
      loginBtn.removeEventListener("click", handleLogin);
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <div>
      <Navbar />
      <div className="body_login_log">
        <main className="login_log">
          <div className="login__col_log">
            <form className="login__form_log" method="post" action="">
              <div className="login__form-wrapper_log">
                <h1 className="h1">Welcome back</h1>
                <p>Sign in to your account.</p>
                <div className="login__field-group_log">
                  <label className="login__label_log" htmlFor="user-email">
                    Username or Email
                  </label>
                  <input
                    className="login__field_log"
                    id="user-email"
                    type="string"
                    name="user_email"
                    value={user.email}
                    onChange={mail_check}
                  />
                  <p className={isEmailValid ? "error hide" : "error"}>
                    {isEmailValid ? "ok" : "Error: Invalid Email"}
                  </p>
                </div>
                <div className="login__field-group2_log">
                  <label className="login__label_log" htmlFor="pass">
                    Password
                  </label>
                  <input
                    className="login__field_log"
                    id="pass"
                    type="password"
                    name="pass"
                    value={user.password}
                    onChange={(e) => setuser({...user, password: e.target.value})}
                  />
                </div>
                <div className="login__field-group_log login__field-group--horz_log">
                  <label className="login__label_log login__label--horz_log">
                    <input
                      className="login__checkbox_log"
                      type="checkbox"
                      name="remember_me"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link className="a" href="#">
                    Forgot password
                  </Link>
                  <button onClick={()=>tokenauth()}>
                    
                    Test here
                  </button>
                  <button onClick={()=>logout()}>
                    Logout
                  </button>
                </div>
                <button className="login__btn_log" type="button" data-login="false" onClick={loginhandle}>
                  <span className="login__btn-label_log">Sign in</span>
                  <span className="login__btn-spinner_log"></span>
                </button>
                <p className="login__sign-up_log">
                  Don’t have an account?{" "}
                  <Link className="a_log forget_log" href="/components/signup/Signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
            <footer className="login__copyright_log">
              <p>
                © <span data-year>2023</span> Dsign Engg. All rights reserved.
              </p>
            </footer>
          </div>
          <div className="login__col_log">
            <div className="login__bg-img_log"></div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
