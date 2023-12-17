import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const Signup = ({ authtoken }) => {
  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [matchpass, setmatchpass] = useState(true);
  const [buttondisabled, setbuttondisabled] = useState(false);
  const [load, setload] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",

    phone: "",
    dob: "",
    gender: "Male",
    cnfpassword: "",
    country: "",
  });

  const handlesignup = async () => {
    setload(true);
    console.log("Running handlesignup");

    try {
      console.log("userdetails", user);
      await fetch("/api/users/signup/route", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the response JSON
        })
        .then(() => {
          // Access the token from the response data
          // const { token } = data;
          // console.log('Received token:', token);

          toast.success("Registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/signin");
          // window.location.reload();
          // You can use the token for further actions, such as storing it in local storage or cookies.
        })
        .catch((error) => {
          setload(false);
          toast.error("Already Registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.error("Error aaya:", error);
        });
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong", {
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
    setUser({ ...user, email: value });
  };

  const checkpass = (e) => {
    setUser.cnfpassword({ ...user, cnfpassword: e.target.value });
    if (newpassword !== e.target.value) {
      setmatchpass(false);
    } else {
      setmatchpass(true);
    }
  };

  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.cnfpassword.length > 0
    ) {
      setbuttondisabled(false);
    } else setbuttondisabled(true);
  }, [user]);

  return (
    <div className="sign_body">
      <Navbar authtoken={authtoken} />
      <div className="body_signup" style={{ backgroundColor: "#f9fbfc" }}>
        <main className="signup">
          <div className="signup__col">
            <form className="signup__form" method="post" action="">
              <div className="signup__form-wrapper">
                <h1 className="h1">Register Here</h1>
                <p className="signup_pa">Sign up to your account.</p>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="user-name">
                    Full Name
                  </label>
                  <input
                    className="signup_field"
                    id="user-name"
                    type="string"
                    name="user_name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div className="signup_field-group">
                  <label
                    className={
                      isEmailValid ? "signup__label" : "signup__label color_red"
                    }
                    htmlFor="user-email"
                  >
                    Email {isEmailValid ? "" : "(Error: Invalid Email)"}
                  </label>
                  <input
                    className="signup_field"
                    id="user-email"
                    type="string"
                    name="user_email"
                    value={user.email}
                    onChange={mail_check}
                  />
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="user-email">
                    Country
                  </label>
                  <select
                    className="gender"
                    name="country"
                    value={user.country}
                    onChange={(e) =>
                      setUser({ ...user, country: e.target.value })
                    }
                  >
                    <option value="Afghanistan">Afghanistan (+93)</option>
                    <option value="Albania">Albania (+355)</option>
                    <option value="Algeria">Algeria (+213)</option>
                    <option value="Andorra">Andorra (+376)</option>
                    <option value="Angola">Angola (+244)</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda (+1-268)
                    </option>
                    <option value="Argentina">Argentina (+54)</option>
                    <option value="Armenia">Armenia (+374)</option>
                    <option value="Australia">Australia (+61)</option>
                    <option value="Austria">Austria (+43)</option>
                    <option value="Azerbaijan">Azerbaijan (+994)</option>
                    <option value="Bahamas">Bahamas (+1-242)</option>
                    <option value="Bahrain">Bahrain (+973)</option>
                    <option value="Bangladesh">Bangladesh (+880)</option>
                    <option value="Barbados">Barbados (+1-246)</option>
                    <option value="Belarus">Belarus (+375)</option>
                    <option value="Belgium">Belgium (+32)</option>
                    <option value="Belize">Belize (+501)</option>
                    <option value="Benin">Benin (+229)</option>
                    <option value="Bhutan">Bhutan (+975)</option>
                    <option value="Bolivia">Bolivia (+591)</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina (+387)
                    </option>
                    <option value="Botswana">Botswana (+267)</option>
                    <option value="Brazil">Brazil (+55)</option>
                    <option value="Brunei">Brunei (+673)</option>
                    <option value="Bulgaria">Bulgaria (+359)</option>
                    <option value="Burkina Faso">Burkina Faso (+226)</option>
                    <option value="Burundi">Burundi (+257)</option>
                    <option value="Cabo Verde">Cabo Verde (+238)</option>
                    <option value="Cambodia">Cambodia (+855)</option>
                    <option value="Cameroon">Cameroon (+237)</option>
                    <option value="Canada">Canada (+1)</option>
                    <option value="Central African Republic">
                      Central African Republic (+236)
                    </option>
                    <option value="Chad">Chad (+235)</option>
                    <option value="Chile">Chile (+56)</option>
                    <option value="China">China (+86)</option>
                    <option value="Colombia">Colombia (+57)</option>
                    <option value="Comoros">Comoros (+269)</option>
                    <option value="Congo (Congo-Brazzaville)">
                      Congo (Congo-Brazzaville) (+242)
                    </option>
                    <option value="Costa Rica">Costa Rica (+506)</option>
                    <option value="Côte d'Ivoire">Côte d'Ivoire (+225)</option>
                    <option value="Croatia">Croatia (+385)</option>
                    <option value="Cuba">Cuba (+53)</option>
                    <option value="Cyprus">Cyprus (+357)</option>
                    <option value="Czechia (Czech Republic)">
                      Czechia (Czech Republic) (+420)
                    </option>
                    <option value="Denmark">Denmark (+45)</option>
                    <option value="Djibouti">Djibouti (+253)</option>
                    <option value="Dominica">Dominica (+1-767)</option>
                    <option value="Dominican Republic">
                      Dominican Republic (+1-809, +1-829, +1-849)
                    </option>
                    <option value="Ecuador">Ecuador (+593)</option>
                    <option value="Egypt">Egypt (+20)</option>
                    <option value="El Salvador">El Salvador (+503)</option>
                    <option value="Equatorial Guinea">
                      Equatorial Guinea (+240)
                    </option>
                    <option value="Eritrea">Eritrea (+291)</option>
                    <option value="Estonia">Estonia (+372)</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia (+251)</option>
                    <option value="Fiji">Fiji (+679)</option>
                    <option value="Finland">Finland (+358)</option>
                    <option value="France">France (+33)</option>
                    <option value="Gabon">Gabon (+241)</option>
                    <option value="Gambia">Gambia (+220)</option>
                    <option value="Georgia">Georgia (+995)</option>
                    <option value="Germany">Germany (+49)</option>
                    <option value="Ghana">Ghana (+233)</option>
                    <option value="Greece">Greece (+30)</option>
                    <option value="Grenada">Grenada (+1-473)</option>
                    <option value="Guatemala">Guatemala (+502)</option>
                    <option value="Guinea">Guinea (+224)</option>
                    <option value="Guinea-Bissau">Guinea-Bissau (+245)</option>
                    <option value="Guyana">Guyana (+592)</option>
                    <option value="Haiti">Haiti (+509)</option>
                    <option value="Holy See">Holy See (+379)</option>
                    <option value="Honduras">Honduras (+504)</option>
                    <option value="Hungary">Hungary (+36)</option>
                    <option value="Iceland">Iceland (+354)</option>
                    <option value="India">India (+91)</option>
                    <option value="Indonesia">Indonesia (+62)</option>
                    <option value="Iran">Iran (+98)</option>
                    <option value="Iraq">Iraq (+964)</option>
                    <option value="Ireland">Ireland (+353)</option>
                    <option value="Israel">Israel (+972)</option>
                    <option value="Italy">Italy (+39)</option>
                    <option value="Jamaica">Jamaica (+1-876)</option>
                    <option value="Japan">Japan (+81)</option>
                    <option value="Jordan">Jordan (+962)</option>
                    <option value="Kazakhstan">Kazakhstan (+7)</option>
                    <option value="Kenya">Kenya (+254)</option>
                    <option value="Kiribati">Kiribati (+686)</option>
                    <option value="Kuwait">Kuwait (+965)</option>
                    <option value="Kyrgyzstan">Kyrgyzstan (+996)</option>
                    <option value="Laos">Laos (+856)</option>
                    <option value="Latvia">Latvia (+371)</option>
                    <option value="Lebanon">Lebanon (+961)</option>
                    <option value="Lesotho">Lesotho (+266)</option>
                    <option value="Liberia">Liberia (+231)</option>
                    <option value="Libya">Libya (+218)</option>
                    <option value="Liechtenstein">Liechtenstein (+423)</option>
                    <option value="Lithuania">Lithuania (+370)</option>
                    <option value="Luxembourg">Luxembourg (+352)</option>
                    <option value="Madagascar">Madagascar (+261)</option>
                    <option value="Malawi">Malawi (+265)</option>
                    <option value="Malaysia">Malaysia (+60)</option>
                    <option value="Maldives">Maldives (+960)</option>
                    <option value="Mali">Mali (+223)</option>
                    <option value="Malta">Malta (+356)</option>
                    <option value="Marshall Islands">
                      Marshall Islands (+692)
                    </option>
                    <option value="Mauritania">Mauritania (+222)</option>
                    <option value="Mauritius">Mauritius (+230)</option>
                    <option value="Mexico">Mexico (+52)</option>
                    <option value="Micronesia">Micronesia (+691)</option>
                    <option value="Moldova">Moldova (+373)</option>
                    <option value="Monaco">Monaco (+377)</option>
                    <option value="Mongolia">Mongolia (+976)</option>
                    <option value="Montenegro">Montenegro (+382)</option>
                    <option value="Morocco">Morocco (+212)</option>
                    <option value="Mozambique">Mozambique (+258)</option>
                    <option value="Myanmar (formerly Burma)">
                      Myanmar (formerly Burma) (+95)
                    </option>
                    <option value="Namibia">Namibia (+264)</option>
                    <option value="Nauru">Nauru (+674)</option>
                    <option value="Nepal">Nepal (+977)</option>
                    <option value="Netherlands">Netherlands (+31)</option>
                    <option value="New Zealand">New Zealand (+64)</option>
                    <option value="Nicaragua">Nicaragua (+505)</option>
                    <option value="Niger">Niger (+227)</option>
                    <option value="Nigeria">Nigeria (+234)</option>
                    <option value="North Korea">North Korea (+850)</option>
                    <option value="North Macedonia (formerly Macedonia)">
                      North Macedonia (formerly Macedonia) (+389)
                    </option>
                    <option value="Norway">Norway (+47)</option>
                    <option value="Oman">Oman (+968)</option>
                    <option value="Pakistan">Pakistan (+92)</option>
                    <option value="Palau">Palau (+680)</option>
                    <option value="Palestine State">
                      Palestine State (+970)
                    </option>
                    <option value="Panama">Panama (+507)</option>
                    <option value="Papua New Guinea">
                      Papua New Guinea (+675)
                    </option>
                    <option value="Paraguay">Paraguay (+595)</option>
                    <option value="Peru">Peru (+51)</option>
                    <option value="Philippines">Philippines (+63)</option>
                    <option value="Poland">Poland (+48)</option>
                    <option value="Portugal">Portugal (+351)</option>
                    <option value="Qatar">Qatar (+974)</option>
                    <option value="Romania">Romania (+40)</option>
                    <option value="Russia">Russia (+7)</option>
                    <option value="Rwanda">Rwanda (+250)</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis (+1-869)
                    </option>
                    <option value="Saint Lucia">Saint Lucia (+1-758)</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines (+1-784)
                    </option>
                    <option value="Samoa">Samoa (+685)</option>
                    <option value="San Marino">San Marino (+378)</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe (+239)
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia (+966)</option>
                    <option value="Senegal">Senegal (+221)</option>
                    <option value="Serbia">Serbia (+381)</option>
                    <option value="Seychelles">Seychelles (+248)</option>
                    <option value="Sierra Leone">Sierra Leone (+232)</option>
                    <option value="Singapore">Singapore (+65)</option>
                    <option value="Slovakia">Slovakia (+421)</option>
                    <option value="Slovenia">Slovenia (+386)</option>
                    <option value="Solomon Islands">
                      Solomon Islands (+677)
                    </option>
                    <option value="Somalia">Somalia (+252)</option>
                    <option value="South Africa">South Africa (+27)</option>
                    <option value="South Korea">South Korea (+82)</option>
                    <option value="South Sudan">South Sudan (+211)</option>
                    <option value="Spain">Spain (+34)</option>
                    <option value="Sri Lanka">Sri Lanka (+94)</option>
                    <option value="Sudan">Sudan (+249)</option>
                    <option value="Suriname">Suriname (+597)</option>
                    <option value="Sweden">Sweden (+46)</option>
                    <option value="Switzerland">Switzerland (+41)</option>
                    <option value="Syria">Syria (+963)</option>
                    <option value="Tajikistan">Tajikistan (+992)</option>
                    <option value="Tanzania">Tanzania (+255)</option>
                    <option value="Thailand">Thailand (+66)</option>
                    <option value="Timor-Leste">Timor-Leste (+670)</option>
                    <option value="Togo">Togo (+228)</option>
                    <option value="Tonga">Tonga (+676)</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago (+1-868)
                    </option>
                    <option value="Tunisia">Tunisia (+216)</option>
                    <option value="Turkey">Turkey (+90)</option>
                    <option value="Turkmenistan">Turkmenistan (+993)</option>
                    <option value="Tuvalu">Tuvalu (+688)</option>
                    <option value="Uganda">Uganda (+256)</option>
                    <option value="Ukraine">Ukraine (+380)</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates (+971)
                    </option>
                    <option value="United Kingdom">United Kingdom (+44)</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="user-email">
                    Phone No.
                  </label>
                  <input
                    className="signup_field"
                    id="user-email"
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                  />
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="user-email">
                    Date of Birth
                  </label>
                  <input
                    className="signup_field"
                    id="date"
                    type="date"
                    name="date"
                    value={user.dob}
                    onChange={(e) => setUser({ ...user, dob: e.target.value })}
                  />
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="user-email">
                    Gender
                  </label>
                  <select
                    className="gender"
                    name="gender"
                    value={user.gender}
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="signup_field-group">
                  <label className="signup__label" htmlFor="pass">
                    New Password
                  </label>
                  <input
                    className="signup_field"
                    id="pass"
                    type="string"
                    name="pass"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
                <div className="signup_field-group">
                  <label
                    className={
                      matchpass ? "signup__label" : "signup__label color_red"
                    }
                    htmlFor="passcnf"
                  >
                    Confirm Password{" "}
                    {matchpass ? "" : "(error: both password shoule be same)"}
                  </label>
                  <input
                    className="signup_field"
                    id="passcnf"
                    type="password"
                    name="pass"
                    value={user.cnfpassword}
                    onChange={(e) => {
                      setUser({ ...user, cnfpassword: e.target.value });
                      if (user.password !== e.target.value) {
                        setmatchpass(false);
                      } else {
                        setmatchpass(true);
                      }
                    }}
                  />
                </div>

                <button
                  className={
                    buttondisabled ? "signup__btn block" : "signup__btn"
                  }
                  type="button"
                  data-signup="false"
                  onClick={handlesignup}
                >
                  <span className="signup__btn-label">Sign up</span>
                </button>
                <div className={load ? "loader_load" : "loader_load dis_none"}>
                  <div>
                    <CircularProgress
                      className="CircularProgress"
                      color="inherit"
                    />
                  </div>
                </div>
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
      <Footer />
    </div>
  );
};

export default Signup;
