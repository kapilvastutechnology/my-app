

import { faker } from "@faker-js/faker";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const handleAdd = () => {
    const fake = {
      username: faker.internet.username(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
    };
    setData((prev) => [...prev, fake]);
  };

  return (
    <div>
      <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Fake User
      </button>

      <div className="mt-5 grid grid-cols-4 gap-5">
        {/* {data.map((user, index) => (
          <div key={index} className="p-3 border mb-3 rounded shadow-sm">
            <img src={user.avatar} alt={user.username} className="w-16 h-16 rounded-full" />
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Gender:</strong>{user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>

          </div>
        ))} */}

        {data.map((user,index)=>(
            <div key={index}>
                <img src={user.avatar} alt="" />
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
            </div>
        ))}
      </div>
    </div>
  );
}

