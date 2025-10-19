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
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-5 max-w-[350px] space-y-5 mx-auto">
      <h1 className="text-2xl font-semibold text-center">📝 Todo App</h1>

      <Formik
        initialValues={{ task: "" }}
        onSubmit={(val, { resetForm }) => {
          if (val.task.trim() !== "") {
            const newTodo = { id: uuidv4(), title: val.task };
            setTodos((prev) => [...prev, newTodo]);
            resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="task"
              label="Enter a task"
              size="sm"
              variant="bordered"
              value={values.task}
              onChange={handleChange}
            />
            <Button type="submit" color="primary" fullWidth>
              Add Task
            </Button>
          </form>
        )}
      </Formik>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No tasks yet</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center border-b pb-1"
            >
              <h1>{todo.title}</h1>
              <Button
                size="sm"
                color="warning"
                isIconOnly
                onPress={() => handleDelete(todo.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
