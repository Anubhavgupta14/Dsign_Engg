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
        toast.error(error);
        return;
      }
      let user = data;
      const convertedUser = {
        ...user,
        dob: user.dob ? user.dob.split("T")[0] : "",
      };
      setUserData(convertedUser);
    } catch (error) {
      toast.error(
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
    if (!userData.addressLine1) {
      formErrors.addressLine1 = "This field is Required";
    }
    if (!userData.state) {
      formErrors.state = "State is Required";
    }
    if (!userData.city) {
      formErrors.city = "City is Required";
    }
    if (!userData.pincode) {
      formErrors.pincode = "Zip is Required";
    }

    return formErrors;
  };

  let save = async () => {
    console.log("Save chala");
    let formErrors = validate();
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

      if (user.twitter) {
        if (!user.twitter.includes("http")) {
          user.twitter = "https://" + user.twitter;
        }
      }
      if (user.instagram) {
        if (!user.instagram.includes("http")) {
          user.instagram = "https://" + user.instagram;
        }
      }
      if (user.website) {
        if (!user.website.includes("http")) {
          user.website = "https://" + user.website;
        }
      }
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
        toast.error(error || "some error occured");
        return;
      }
      console.log(data, "data: ");
      toast.success("Changes saved successfully");
    } else {
      setErrors(formErrors);
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
              <div className="flex-col">
                <label className="label-text text-sm font-bold">
                  Phone
                </label>
                <input
                  className="general__input"
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={userData.phone || ""}
                  onChange={handleData}
                />
              </div>
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="input-fields">
            <div className="flex-col">
                <label className="label-text text-sm font-bold">
                  DOB
                </label>
                <input
                  className="general__input"
                  type="text"
                  placeholder="DOB"
                  name="dob"
                  value={userData.dob || ""}
                  onChange={handleData}
                />
              </div>
              <div className="flex-col">
                <label className="label-text text-sm font-bold">
                  Gender
                </label>
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
