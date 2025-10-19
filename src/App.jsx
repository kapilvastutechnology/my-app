// import { Button, Input } from "@heroui/react";
// import { Formik } from "formik";
// import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

// export default function App() {
//   const [data, setData] = useState([]);
//   const handleData = (id) =>{
//     setData((prev) => prev.filter((user)=>user.id !== id))
//   }
//   return (
//     <div className="p-5 max-w-[300px]">
//       <Formik
//         initialValues={{
//           username: ''
//         }}

//         onSubmit={(val, { resetForm }) => {
//           setData((prev) => [...prev, {
//             username: val.username,
//             id: uuidv4()
//           }])
//           resetForm();
//         }}

//       >
//         {({ handleChange, handleSubmit, values }) => {
//           return <form onSubmit={handleSubmit} className="space-y-4">

//             <div>
//               <Input
//                 onChange={handleChange}
//                 size="sm"
//                 value={values.username}
//                 variant="bordered"
//                 label='Username' name="username" />
//             </div>

//             <Button
//             type="submit">Submit</Button>
//           </form>
//         }}
//       </Formik>

//       {data.map((user, index) => {
//         return <div className="mt-5" key={index}>
//           <div className="flex justify-between">
//             <h1>{user.username}</h1>
//             <Button onPress={() => handleData(user.id)} size="sm" color="warning" isIconOnly>
//               <i class="fa-solid fa-trash"></i>
//             </Button>
//           </div>
//           <hr />
//         </div>
//       })}
//     </div>
//   )
// }


import { Button, Input } from "@heroui/react";
import { Formik } from "formik";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [data, setData] = useState([]);

  const handleData = (id) => {
    setData((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="p-5 max-w-[300px] space-y-5">
      <Formik
        initialValues={{ username: "" }}
        onSubmit={(val, { resetForm }) => {
          if (val.username.trim() !== "") {
            const newUser = { id: uuidv4(), name: val.username };
            setData((prev) => [...prev, newUser]);
            resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="username"
              label="Username"
              size="sm"
              variant="bordered"
              value={values.username}
              onChange={handleChange}
            />
            <Button type="submit" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        )}
      </Formik>

      <div className="space-y-3">
        {data.map((user) => (
          <div key={user.id} className="flex justify-between items-center border-b pb-1">
            <h1>{user.name}</h1>
            <Button
              size="sm"
              color="warning"
              isIconOnly
              onPress={() => handleData(user.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
