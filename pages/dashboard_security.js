import ProfileLayout from "../components/user_data/User";
import { useState, useEffect } from "react";
import { fetchCurrentUser } from "libs/fetchUser";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const general = () => {
  // const router = useRouter();

  const [userData, setUserData] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [load, setLoad] = useState(!true);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [errors, setErrors] = useState({ old: "", new: "", confirm: "" });

  let regex = () => {
    let valid =
      newPassword.includes("!") ||
      newPassword.includes("(") ||
      newPassword.includes("?") ||
      newPassword.includes("%") ||
      newPassword.includes("=") ||
      newPassword.includes(".") ||
      newPassword.includes("*") ||
      newPassword.includes("[") ||
      newPassword.includes(" ") ||
      newPassword.includes(`"`) ||
      newPassword.includes("]") ||
      newPassword.includes(")") ||
      newPassword.includes("$") ||
      newPassword.includes("@") ||
      newPassword.includes("&");
    return valid;
  };
  let validate = () => {
    let formErrors = {};
    if (!oldPassword) {
      formErrors.old = "This field is required";
    }
    if (!newPassword) {
      formErrors.new = "This field is required";
    } else if (newPassword.length < 8) {
      formErrors.new = "Password must be at least 8 characters";
    } else if (newPassword.search[/a-z/i] < 1) {
      formErrors.new = "Password must contain a lower case letter";
    } else if (newPassword.search[/A-Z/i] < 1) {
      formErrors.new = "Password must contain an uppser case letter";
    } else if (newPassword.search[/0-9/] < 1) {
      formErrors.new = "Password must contain a number";
    } else if (!regex()) {
      formErrors.new = "Password must contain a special character";
    }
    if (!confirmNewPassword) {
      formErrors.confirm = "This field is required";
    } else if (newPassword != confirmNewPassword) {
      formErrors.confirm =
        "Confirm New Password should be same as your new password";
    }
    if (newPassword == oldPassword) {
      formErrors.new = "New Password cannot be same as your old password";
    }
    return formErrors;
  };
  let change = async () => {
    setLoad(true);
    let formErrors = validate();
    if (Object.keys(formErrors).length == 0) {
      setErrors({ token: "", old: "", new: "", confirm: "" });
      let id = userData._id;
      console.log(id, "id");
      let res = await fetch(`/api/changePassword`, {
        method: "PATCH",
        body: JSON.stringify({ id, oldPassword, newPassword }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res)=>{

      }).then((res)=>{
        toast.success(res.message);
        toast.success("Password Successfully Changed");
      }).catch((err)=>{
        toast.error(err)
      });

    //   let data = await res.json();
    //   let { error } = data;
    //   if (error) {
    //     setLoad(false);
    //     toast.error(error || "some error occured");
    //     return;
    //   }
      setLoad(false);
      toast.success("Password changed successfully");
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } else {
      setErrors(formErrors);
      setLoad(false);
    }
  };

  const getUserData = async () => {
    const token = localStorage.getItem("JWT");
    try {
      const data = await fetchCurrentUser(token);
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
      toast.error(error.message || "Some error occurred while fetching data");
      toast.error("Try logging in again");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <ProfileLayout>
        <div className="shadow general-container">
          <p className="profile-t">Change Password</p>
          <div className="my-2"></div>

          <div className="sm-body sm-body-profile">
            <div className="sm-body-left">
              <div className="signup_field-group">
                <label className="signup__label" htmlFor="oldpass">
                  Old Password
                </label>
                <input
                  className="signup_field"
                  id="oldpass"
                  type="string"
                  name="oldpass"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
              </div>
              <div className="signup_field-group">
                <label className="signup__label" htmlFor="newpass">
                  New Password
                </label>
                <input
                  className="signup_field"
                  id="newpass"
                  type="string"
                  name="newpass"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                {errors.new && <div className="error">{errors.new}</div>}
              </div>
              <div className="signup_field-group">
                <label className="signup__label" htmlFor="cnfpass">
                  Confirm Password
                </label>
                <input
                  className="signup_field"
                  id="cnfpass"
                  type="string"
                  name="cnfpass"
                  value={confirmNewPassword}
                  onChange={(e) => {
                    setConfirmNewPassword(e.target.value);
                  }}
                />
                {errors.new && <div className="error">{errors.new}</div>}
              </div>
            </div>
            <div className="sm-body-right">
              <h2>New password must contain:</h2>
              <p>- At least 8 characters</p>
              <p>- At least 1 lower letter (a-z)</p>
              <p>- At least 1 uppercase letter (A-Z)</p>
              <p>- At least 1 number (0-9)</p>
              <p>- At least 1 special characters</p>
            </div>
          </div>
          <div className="profile-save-cont">
            <button
              className={`${load ? "profile-load" : ""}`}
              onClick={!load && change}
            >
              {load && <div className="loader"></div>}
              {!load && "Change"}
            </button>
            <button
              
              onClick={() => {
                setOldPassword("");
                setNewPassword("");
                setConfirmNewPassword("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default general;
