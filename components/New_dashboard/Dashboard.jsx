import ProfileLayout from "../../components/user_data/User";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchCurrentUser } from "../../libs/fetchUser";
import { BsChevronDown } from "react-icons/bs";
// import { states } from "../../public/common";

const General = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    dob: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    basicProfile: "",
    ladle_ticket: 0,
    aod_ticket: 0,
    country: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    dob: "",
    gender: "",
    addressLine1: "",
    country: "",
  });

  const [stateList, setStateList] = useState(false);
  const [districtList, setDistrictList] = useState(false);

  const getUserData = async () => {
    const token = localStorage.getItem("JWT");
    try {
      const data = await fetchCurrentUser(token);
      console.log(data, "data fetched");
      const { error } = data;
      console.log(error, "error getting user data");
      if (error) {
        console.log(error);
        return;
      }
      let user = data;
      const convertedUser = {
        ...user,
        dob: user.dob ? user.dob.split("T")[0] : "",
      };
      setUserData(convertedUser);
    } catch (error) {
      console.log(
        error.message + "op" || "Some error occurred while fetching data"
      );
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  let validate = () => {
    let formErrors = {};
    let regex = userData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!userData.name) {
      formErrors.name = "Full Name is Required";
    }

    if (!userData.email) {
      formErrors.email = "Email is Required";
    } else if (!regex) {
      formErrors.email = "This is not a valid email format";
    }
    if (!userData.phone) {
      formErrors.phone = "Phone is Required";
    }
    if (!userData.gender) {
      formErrors.gender = "Gender is Required";
    }
    if (!userData.dob) {
      formErrors.dob = "Date of Birth is Required";
    }
    if (!userData.country) {
      formErrors.country = "Country is Required";
    }

    return formErrors;
  };

  let save = async () => {
    console.log("Save chala");
    let formErrors = validate();
    console.log(formErrors, "yaha");
    if (Object.keys(formErrors).length == 0) {
      setErrors({
        name: "",
        email: "",
        phone: "",
        state: "",
        twitter: "",
        instagram: "",
        website: "",
        city: "",
        pincode: "",
        dob: "",
        gender: "",
        addressLine1: "",
      });

      let user = userData;
      console.log(user, "user");
      // let role = localStorage.getItem('role');
      let res = await fetch(`/api/profile`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      });
      let data = await res.json();
      let { error } = data;
      if (error) {
        toast.error("some error occured");
        return;
      }
      console.log(data, "data: ");
      toast.success("Changes saved successfully");
      window.location.reload();
    } else {
      setErrors(formErrors);
      toast.error("error");
    }
  };

  return (
    <>
      <ProfileLayout>
        <div className="shadow general-container">
          <p className="profile-t">General</p>
          <div className="my-2"></div>
          <div>
            <div className="input-fields">
              <div className="flex-col">
                <label className="label-text text-sm font-bold">
                  Full Name
                </label>
                <input
                  className="general__input"
                  type="text"
                  placeholder="First Name"
                  name="name"
                  value={userData.name || ""}
                  onChange={handleData}
                />
              </div>
            </div>

            <div className="input-fields">
              <div className="flex-col">
                <label className="label-text text-sm font-bold">Email</label>
                <div className="general__input c0" name="email">
                  {userData.email}
                </div>
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>

            <div className="flex-all gap">
              <div className="input-fields">
                <label className="label-text text-sm font-bold">Country</label>
                <div className="flex-all k">
                  <select
                    className="general__input"
                    name="country"
                    value={userData.country}
                    onChange={(e) =>
                      setUserData({ ...userData, country: e.target.value })
                    }
                  >
                    <option value={userData.country}>{userData.country}</option>
                    <option value="Afghanistan (+93)">Afghanistan (+93)</option>
                    <option value="Albania (+355)">Albania (+355)</option>
                    <option value="Algeria (+213)">Algeria (+213)</option>
                    <option value="Andorra (+376)">Andorra (+376)</option>
                    <option value="Angola (+244)">Angola (+244)</option>
                    <option value="Antigua and Barbuda (+1-268)">
                      Antigua and Barbuda (+1-268)
                    </option>
                    <option value="Argentina (+54)">Argentina (+54)</option>
                    <option value="Armenia (+374)">Armenia (+374)</option>
                    <option value="Australia (+61)">Australia (+61)</option>
                    <option value="Austria (+43)">Austria (+43)</option>
                    <option value="Azerbaijan (+994)">Azerbaijan (+994)</option>
                    <option value="Bahamas (+1-242)">Bahamas (+1-242)</option>
                    <option value="Bahrain (+973)">Bahrain (+973)</option>
                    <option value="Bangladesh (+880)">Bangladesh (+880)</option>
                    <option value="Barbados (+1-246)">Barbados (+1-246)</option>
                    <option value="Belarus (+375)">Belarus (+375)</option>
                    <option value="Belgium (+32)">Belgium (+32)</option>
                    <option value="Belize (+501)">Belize (+501)</option>
                    <option value="Benin (+229)">Benin (+229)</option>
                    <option value="Bhutan (+975)">Bhutan (+975)</option>
                    <option value="Bolivia (+591)">Bolivia (+591)</option>
                    <option value="Bosnia and Herzegovina (+387)">
                      Bosnia and Herzegovina (+387)
                    </option>
                    <option value="Botswana (+267)">Botswana (+267)</option>
                    <option value="Brazil (+55)">Brazil (+55)</option>
                    <option value="Brunei (+673)">Brunei (+673)</option>
                    <option value="Bulgaria (+359)">Bulgaria (+359)</option>
                    <option value="Burkina Faso (+226)">
                      Burkina Faso (+226)
                    </option>
                    <option value="Burundi (+257)">Burundi (+257)</option>
                    <option value="Cabo Verde (+238)">Cabo Verde (+238)</option>
                    <option value="Cambodia (+855)">Cambodia (+855)</option>
                    <option value="Cameroon (+237)">Cameroon (+237)</option>
                    <option value="Canada (+1)">Canada (+1)</option>
                    <option value="Central African Republic (+236)">
                      Central African Republic (+236)
                    </option>
                    <option value="Chad (+235)">Chad (+235)</option>
                    <option value="Chile (+56)">Chile (+56)</option>
                    <option value="China (+86)">China (+86)</option>
                    <option value="Colombia (+57)">Colombia (+57)</option>
                    <option value="Comoros (+269)">Comoros (+269)</option>
                    <option value="Congo (Congo-Brazzaville) (+242)">
                      Congo (Congo-Brazzaville) (+242)
                    </option>
                    <option value="Costa Rica (+506)">Costa Rica (+506)</option>
                    <option value="Côte d'Ivoire (+225)">
                      Côte d'Ivoire (+225)
                    </option>
                    <option value="Croatia (+385)">Croatia (+385)</option>
                    <option value="Cuba (+53)">Cuba (+53)</option>
                    <option value="Cyprus (+357)">Cyprus (+357)</option>
                    <option value="Czechia (Czech Republic) (+420)">
                      Czechia (Czech Republic) (+420)
                    </option>
                    <option value="Denmark (+45)">Denmark (+45)</option>
                    <option value="Djibouti (+253)">Djibouti (+253)</option>
                    <option value="Dominica (+1-767)">Dominica (+1-767)</option>
                    <option value="Dominican Republic (+1-809, +1-829, +1-849)">
                      Dominican Republic (+1-809, +1-829, +1-849)
                    </option>
                    <option value="Ecuador (+593)">Ecuador (+593)</option>
                    <option value="Egypt (+20)">Egypt (+20)</option>
                    <option value="El Salvador (+503)">
                      El Salvador (+503)
                    </option>
                    <option value="Equatorial Guinea (+240)">
                      Equatorial Guinea (+240)
                    </option>
                    <option value="Eritrea (+291)">Eritrea (+291)</option>
                    <option value="Estonia (+372)">Estonia (+372)</option>
                    <option value="Eswatini (+268)">Eswatini (+268)</option>
                    <option value="Ethiopia (+251)">Ethiopia (+251)</option>
                    <option value="Fiji (+679)">Fiji (+679)</option>
                    <option value="Finland (+358)">Finland (+358)</option>
                    <option value="France (+33)">France (+33)</option>
                    <option value="Gabon (+241)">Gabon (+241)</option>
                    <option value="Gambia (+220)">Gambia (+220)</option>
                    <option value="Georgia (+995)">Georgia (+995)</option>
                    <option value="Germany (+49)">Germany (+49)</option>
                    <option value="Ghana (+233)">Ghana (+233)</option>
                    <option value="Greece (+30)">Greece (+30)</option>
                    <option value="Grenada (+1-473)">Grenada (+1-473)</option>
                    <option value="Guatemala (+502)">Guatemala (+502)</option>
                    <option value="Guinea (+224)">Guinea (+224)</option>
                    <option value="Guinea-Bissau (+245)">
                      Guinea-Bissau (+245)
                    </option>
                    <option value="Guyana (+592)">Guyana (+592)</option>
                    <option value="Haiti (+509)">Haiti (+509)</option>
                    <option value="Holy See (+379)">Holy See (+379)</option>
                    <option value="Honduras (+504)">Honduras (+504)</option>
                    <option value="Hungary (+36)">Hungary (+36)</option>
                    <option value="Iceland (+354)">Iceland (+354)</option>
                    <option value="India (+91)">India (+91)</option>
                    <option value="Indonesia (+62)">Indonesia (+62)</option>
                    <option value="Iran (+98)">Iran (+98)</option>
                    <option value="Iraq (+964)">Iraq (+964)</option>
                    <option value="Ireland (+353)">Ireland (+353)</option>
                    <option value="Israel (+972)">Israel (+972)</option>
                    <option value="Italy (+39)">Italy (+39)</option>
                    <option value="Jamaica (+1-876)">Jamaica (+1-876)</option>
                    <option value="Japan (+81)">Japan (+81)</option>
                    <option value="Jordan (+962)">Jordan (+962)</option>
                    <option value="Kazakhstan (+7)">Kazakhstan (+7)</option>
                    <option value="Kenya (+254)">Kenya (+254)</option>
                    <option value="Kiribati (+686)">Kiribati (+686)</option>
                    <option value="Kuwait (+965)">Kuwait (+965)</option>
                    <option value="Kyrgyzstan (+996)">Kyrgyzstan (+996)</option>
                    <option value="Laos (+856)">Laos (+856)</option>
                    <option value="Latvia (+371)">Latvia (+371)</option>
                    <option value="Lebanon (+961)">Lebanon (+961)</option>
                    <option value="Lesotho (+266)">Lesotho (+266)</option>
                    <option value="Liberia (+231)">Liberia (+231)</option>
                    <option value="Libya (+218)">Libya (+218)</option>
                    <option value="Liechtenstein (+423)">
                      Liechtenstein (+423)
                    </option>
                    <option value="Lithuania (+370)">Lithuania (+370)</option>
                    <option value="Luxembourg (+352)">Luxembourg (+352)</option>
                    <option value="Madagascar (+261)">Madagascar (+261)</option>
                    <option value="Malawi (+265)">Malawi (+265)</option>
                    <option value="Malaysia (+60)">Malaysia (+60)</option>
                    <option value="Maldives (+960)">Maldives (+960)</option>
                    <option value="Mali (+223)">Mali (+223)</option>
                    <option value="Malta (+356)">Malta (+356)</option>
                    <option value="Marshall Islands (+692)">
                      Marshall Islands (+692)
                    </option>
                    <option value="Mauritania (+222)">Mauritania (+222)</option>
                    <option value="Mauritius (+230)">Mauritius (+230)</option>
                    <option value="Mexico (+52)">Mexico (+52)</option>
                    <option value="Micronesia (+691)">Micronesia (+691)</option>
                    <option value="Moldova (+373)">Moldova (+373)</option>
                    <option value="Monaco (+377)">Monaco (+377)</option>
                    <option value="Mongolia (+976)">Mongolia (+976)</option>
                    <option value="Montenegro (+382)">Montenegro (+382)</option>
                    <option value="Morocco (+212)">Morocco (+212)</option>
                    <option value="Mozambique (+258)">Mozambique (+258)</option>
                    <option value="Myanmar (formerly Burma) (+95)">
                      Myanmar (formerly Burma) (+95)
                    </option>
                    <option value="Namibia (+264)">Namibia (+264)</option>
                    <option value="Nauru (+674)">Nauru (+674)</option>
                    <option value="Nepal (+977)">Nepal (+977)</option>
                    <option value="Netherlands (+31)">Netherlands (+31)</option>
                    <option value="New Zealand (+64)">New Zealand (+64)</option>
                    <option value="Nicaragua (+505)">Nicaragua (+505)</option>
                    <option value="Niger (+227)">Niger (+227)</option>
                    <option value="Nigeria (+234)">Nigeria (+234)</option>
                    <option value="North Korea (+850)">
                      North Korea (+850)
                    </option>
                    <option value="North Macedonia (formerly Macedonia) (+389)">
                      North Macedonia (formerly Macedonia) (+389)
                    </option>
                    <option value="Norway (+47)">Norway (+47)</option>
                    <option value="Oman (+968)">Oman (+968)</option>
                    <option value="Pakistan (+92)">Pakistan (+92)</option>
                    <option value="Palau (+680)">Palau (+680)</option>
                    <option value="Palestine State (+970)">
                      Palestine State (+970)
                    </option>
                    <option value="Panama (+507)">Panama (+507)</option>
                    <option value="Papua New Guinea (+675)">
                      Papua New Guinea (+675)
                    </option>
                    <option value="Paraguay (+595)">Paraguay (+595)</option>
                    <option value="Peru (+51)">Peru (+51)</option>
                    <option value="Philippines (+63)">Philippines (+63)</option>
                    <option value="Poland (+48)">Poland (+48)</option>
                    <option value="Portugal (+351)">Portugal (+351)</option>
                    <option value="Qatar (+974)">Qatar (+974)</option>
                    <option value="Romania (+40)">Romania (+40)</option>
                    <option value="Russia (+7)">Russia (+7)</option>
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
              </div>
              <div className="input-fields">
                <label className="label-text text-sm font-bold">Phone</label>
                <div className="flex-all k">
                  <input
                    className="general__input"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={userData.phone || ""}
                    onChange={handleData}
                  />
                </div>
              </div>
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div className="flex-all gap">
              <div className="input-fields">
                <label className="label-text text-sm font-bold">DOB</label>
                <div className="flex-all k">
                  <input
                    className="general__input"
                    type="text"
                    placeholder="DOB"
                    name="dob"
                    value={userData.dob || ""}
                    onChange={handleData}
                  />
                </div>
              </div>
              <div className="input-fields">
                <label className="label-text text-sm font-bold">Gender</label>
                <div className="flex-all k">
                  <input
                    className="general__input"
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    value={userData.gender || ""}
                    onChange={handleData}
                  />
                </div>
              </div>
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div className="flex-all gap">
              <div className="input-fields">
                <label className="label-text text-sm font-bold">
                  Ladle Tickets
                </label>
                <div className="flex-all k">
                  <input
                    disabled
                    className="general__input"
                    type="text"
                    placeholder="Ladle Tickets"
                    name="ladle ticket"
                    value={userData.ladle_ticket}
                  />
                </div>
              </div>
              <div className="input-fields">
                <label className="label-text text-sm font-bold">
                  AOD Tickets
                </label>
                <div className="flex-all k">
                  <input
                    disabled
                    className="general__input"
                    type="text"
                    placeholder="AOD Tickets"
                    name="aod ticket"
                    value={userData.aod_ticket}
                  />
                </div>
              </div>
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
          </div>

          <div className="profile-save-cont">
            <button onClick={save}>Save</button>
            <button onClick={getUserData}>Cancel</button>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default General;
