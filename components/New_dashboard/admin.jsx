import ProfileLayout from "../../components/user_data/User_security";
import { useState, useEffect } from "react";
import { fetchCurrentUser } from "libs/fetchUser";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const general = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/admin");
      const data = await response.json();
      console.log("front-end se data",data)
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <ProfileLayout>
        <div className="shadow general-container" style={{marginBottom:'52vh'}}>
          <p className="profile-t">Admin Portal</p>
          <div className="my-2"></div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="text">{user.name}</td>
                  <td className="text">{user.email}</td>
                  <td className="text">{user.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProfileLayout>
    </>
  );
};

export default general;
