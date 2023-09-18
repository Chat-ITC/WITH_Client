import React, { useState, useEffect } from "react";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      console.log("load");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="user">
      <h2>User</h2>
      {profile &&
        profile.map((userInfo) => (
          <div className="profile" key={userInfo.id}>
            <h3>{userInfo.username}</h3>
            <p>{userInfo.email}</p>
            <a href={userInfo.website}>{userInfo.website}</a>
          </div>
        ))}

      {!profile && <div>Loading...</div>}
    </div>
  );
};

export default User;
