
import React, { useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { axios } from "axios";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const LoginPage = ({authtoken}) => {
  const router = useRouter();
  
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
  const [load,setload] = useState(false);



  const handleLogin = () => {
    setload(true);
    if (isLoggingIn) return;

    setIsLoggingIn(true);
    loginStateToggle();

    clearTimeout(timer);
    setTimer(setTimeout(reset, 1500));
    
  };


  const loginhandle = async (event) => {
    event.preventDefault();

    try {
      fetch('/api/users/signin/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response JSON
        })
        .then((data) => {
          // Access the token from the response data
          const { token } = data;
          localStorage.setItem('JWT', token);
          console.log('Received token:', token);
          if(token){
            toast.success('Logged In', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            router.push("/dashboard")
            window.location.reload();
          }
          else{
            setload(false)
            toast.error('Invalid Email or Password', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          // You can use the token for further actions, such as storing it in local storage or cookies.
        })
        .catch((error) => {
          setload(false)
          toast.error('Invalid Email or Password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          console.error('Error:', error);
        });

      // Check if response.data exists before accessing the token property
      

      // if (response.data && response.data.token) {
      //   setToken(response.data.token);
      //   axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      //   toast.success('Login successful. Redirecting to the dashboard.');
      //   // router.push('/admin/dashboard');
      // } else {
      //   // Handle the case where response.data or response.data.token is undefined
      //   console.error('Invalid response:', response);
      //   toast.error('Login failed. Please try again.');
      // }

    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Invalid Email or Password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  };


  // const logout=async()=>{
  //     const ok = await fetch('/api/users/signout/route');
  //     console.log(ok)
  // }


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
      <Navbar authtoken={authtoken} />
      <div className="body_login_log" style={{backgroundColor:"#f9fbfc"}}>
        <main className="login_log">
          <div className="login__col_log">
            <form className="login__form_log" method="post" action="">
              <div className="login__form-wrapper_log">
                <h1 className="h1">Login</h1>
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
                  <Link href="#">
                    <label><span className="forgot_pas">Forgot password</span></label>
                  </Link>
                  {/* <button onClick={()=>logout()}>
                    Logout
                  </button> */}
                </div>
                <button className="login__btn_log" type="button" data-login="false" onClick={loginhandle}>
                  <span className="login__btn-label_log">Sign in</span>
                  
                </button>
                <div className={load ? "loader_load":"loader_load dis_none"}><div><CircularProgress className="CircularProgress" color="inherit"/></div></div>
                <p className="login__sign-up_log">
                  Don’t have an account?{" "}
                  <Link className="a_log forget_log" href="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
