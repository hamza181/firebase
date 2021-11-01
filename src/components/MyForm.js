import React, { useState } from "react";
import { getDatabase, ref, set, onValue,  } from "firebase/database";
import database from "../firebase/config";

function MyForm() {
  const [myData, setMyData] = useState({ myId: "", myName: "", myAge: "" });

  const handleChange = (e) => {
    var { name, value } = e.target;

    setMyData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(myData);
  };

  // Add data in firebase
  async function writeUserData(userId, name, age) {
    await set(ref(database, "users/" + userId), {
      username: name,
      age: age,
    })
      .then(() => {
        console.log("Add data successfully");
      })
      .catch((err) => console.log(err));
  }

  const addData = () => {
    writeUserData(myData.myId, myData.myName, myData.myAge);
  };
  //   Add data in firebase

  return (
    <div>
      <div>
        <input
          type="text"
          name="myId"
          placeholder="Id"
          value={myData && myData.myId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="myName"
          placeholder="Name"
          value={myData && myData.myName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="myAge"
          placeholder="Age"
          value={myData && myData.myAge}
          onChange={handleChange}
        />
        <button onClick={addData}>Submit</button>
      </div>
    </div>
  );
}

export default MyForm;
