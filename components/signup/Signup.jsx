
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';

const Signup = ({authtoken}) => {
  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [matchpass,setmatchpass] = useState(true);
  const [buttondisabled, setbuttondisabled] = useState(false);
  const [load,setload] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    cnfpassword:""
})

  const handlesignup = async() => {
    setload(true)
    console.log("Running handlesignup")

    try{
       console.log(user)
       await fetch('/api/users/signup/route', {
        method: 'POST',
         body: JSON.stringify(user),
        headers: {
           'Content-type': 'application/json',
         },
       }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      }).then(() => {
        // Access the token from the response data
        // const { token } = data;
        // console.log('Received token:', token);
        
          toast.success('Registered', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          router.push("/signin")
          window.location.reload();
        // You can use the token for further actions, such as storing it in local storage or cookies.
      }).catch((error) => {
        setload(false)
        toast.error('Already Registered', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.error('Error aaya:', error);
      });

      //  console.log(res, "Response from backend")
      //  let { error } = await res.json();
      //  if (error) {
      //    alert(error);
      //    return;
      //  }
      // // const response = await axios.post("./api/users/signup/route", user);
      // console.log("Signup Success", response.data);
      // toast.success("Signup Success");
      // router.push("/components/signupPage")

    }catch (error) {
      console.error('Error during login:', error);
      toast.error('Something went wrong', {
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

  const mail_check = (e) => {

    const value = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValidEmail || value === ""); // Update email validity
    setUser({...user, email: value})
  };

  const checkpass =(e)=>{
    setUser.cnfpassword({...user, cnfpassword: e.target.value})
    if (newpassword !== e.target.value) {
        setmatchpass(false);
      } else {
        setmatchpass(true);
      }

  };

  useEffect(()=>{
    if(user.name.length>0 && user.email.length>0 && user.password.length>0 && user.cnfpassword.length>0){
      setbuttondisabled(false);
    }
    else
    setbuttondisabled(true);
  },[user])

  return (
    <div className="sign_body">
      <Navbar authtoken={authtoken}/>
      <div className="body_signup" style={{backgroundColor:"#f9fbfc"}}>
        <main className="signup">
          <div className="signup__col">
            <form className="signup__form" method="post" action="">
              <div className="signup__form-wrapper">
                <h1 className="h1">Register Here</h1>
                <p>Sign up to your account.</p>
                <div className="signup_field-group" style={{marginBottom:'14px'}}>
                  <label className="signup__label" htmlFor="user-name">
                    Name
                  </label>
                  <input
                    className="signup_field"
                    id="user-name"
                    type="string"
                    name="user_name"
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                  />
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="user-email">
                    Email
                  </label>
                  <input
                    className="signup_field"
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
                <div className="signup_field-group" style={{marginTop: "-10px", marginBottom:'14px'}}>
                  <label className="signup__label" htmlFor="pass">
                    New Password
                  </label>
                  <input
                    className="signup_field"
                    id="pass"
                    type="string"
                    name="pass"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                  />
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="passcnf">
                    Confirm Password
                  </label>
                  <input
                    className="signup_field"
                    id="passcnf"
                    type="password"
                    name="pass"
                    value={user.cnfpassword}
                    onChange={(e) => {
                      setUser({...user, cnfpassword: e.target.value})
                      if (user.password !== e.target.value) {
                        setmatchpass(false);
                      } else {
                        setmatchpass(true);
                      }
                    }}
                  />
                  <p className={matchpass?"p error2":"p"}>{matchpass?"ok":"error: both password shoule be same"}</p>
                </div>
                <div className="signup_field-group signup_field-group--horz">
                </div>
                <button className={buttondisabled?"signup__btn block":"signup__btn"} type="button" data-signup="false" onClick={handlesignup}>
                  <span className="signup__btn-label">Sign up</span>
                </button>
                <div className={load ? "loader_load":"loader_load dis_none"}><div><CircularProgress className="CircularProgress" color="inherit"/></div></div>
                <p className="signup__sign-up">
                  Already have a account?{" "}
                  <Link className="a_log forget" href="/signin">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
