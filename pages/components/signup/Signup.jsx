
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [matchpass,setmatchpass] = useState(true);
  const [buttondisabled, setbuttondisabled] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    cnfpassword:""
})

  const handleLogin = async() => {
    console.log("Running handlelogin")

    try{
       console.log(user)
       let res = await fetch('/api/users/signup/route', {
        method: 'POST',
         body: JSON.stringify(user),
        headers: {
           'Content-type': 'application/json',
         },
       })
       console.log(res, "Response from backend")
       let { error } = await res.json();
       if (error) {
         alert(error);
         return;
       }
      // const response = await axios.post("./api/users/signup/route", user);
      console.log("Signup Success", response.data);
      toast.success("Signup Success");
      router.push("/components/LoginPage")

    }catch(error){
        toast.error(error.message)
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
      <Navbar/>
      <div className="body_login">
        <main className="login">
          <div className="login__col">
            <form className="login__form" method="post" action="">
              <div className="login__form-wrapper">
                <h1 className="h1">Register Here</h1>
                <p>Sign up to your account.</p>
                <div className="login__field-group">
                  <label className="login__label" htmlFor="user-name">
                    Name
                  </label>
                  <input
                    className="login__field"
                    id="user-name"
                    type="string"
                    name="user_name"
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                  />
                </div>
                <div className="login__field-group">
                  <label className="login__label" htmlFor="user-email">
                    Email
                  </label>
                  <input
                    className="login__field"
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
                <div className="login__field-group" style={{marginTop: "-10px"}}>
                  <label className="login__label" htmlFor="pass">
                    New Password
                  </label>
                  <input
                    className="login__field"
                    id="pass"
                    type="string"
                    name="pass"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                  />
                </div>
                <div className="login__field-group">
                  <label className="login__label" htmlFor="passcnf">
                    Confirm Password
                  </label>
                  <input
                    className="login__field"
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
                <div className="login__field-group login__field-group--horz">
                </div>
                <button className={buttondisabled?"login__btn block":"login__btn"} type="button" data-login="false" onClick={handleLogin}>
                  <span className="login__btn-label">Sign up</span>
                  <span className="login__btn-spinner"></span>
                </button>
                <p className="login__sign-up">
                  Already have a account?{" "}
                  <Link className="a forget" href="/components/LoginPage/login">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
            <footer className="login__copyright">
              <p className="p_sign">
                © <span data-year>2023</span> Dsign Engg. All rights reserved.
              </p>
            </footer>
          </div>
          <div className="login__col">
            <div className="login__bg-img"></div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
