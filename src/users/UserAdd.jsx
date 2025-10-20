import {Form, Input, Button, SelectItem, Select, Textarea} from "@heroui/react";
import {Checkbox} from "@heroui/react";
import { Formik } from "formik";
import {RadioGroup, Radio} from "@heroui/react";
import * as Yup from 'yup';
const habits = ['dance', 'sing', 'code', 'swin']
const countries = [
  {key: "nepal", label: "Nepal"},
  {key: "india", label: "India"},
  {key: "china", label: "China"}
];

const valSchema = Yup.object({
  username: Yup.string().min(5).max(20).required(),
  email:Yup.string().required(),
  habits:Yup.string().required(),
  gender:Yup.string().required(),
  country:Yup.string().required(),
  description:Yup.string().required()
})

export default function UserAdd() {
  return (
    <div className="p-5 " >
      <Formik
      
      initialValues={{
        username:'',
        email:'',
        habits:[],
        gender:'',
        country:'',
        description:''
      }}

      onSubmit={(val)=>{
        console.log(val);
      }}

      validationSchema={valSchema}

      >
        {({handleChange, handleSubmit, touched,values, errors})=>(
      <Form
      onSubmit={handleSubmit}
      className="w-full max-w-xs flex flex-col gap-4">
      <Input
        onChange={handleChange}
        value={values.username}
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />
      {errors.username && touched.username &&  <p className="text-red-500" > {errors.username}</p>}
      <Input
        onChange={handleChange}
        label="Email"
        value={values.email}
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      {errors.email && touched.email &&  <p className="text-red-500" > {errors.email}</p>}
      <div className="space-y-10" >
        <h1 className="text-md" >Select your habits</h1>
        <div className="flex gap-4">
          {habits.map((habit,index)=>{
            return <Checkbox 
            key={index}
          onChange={handleChange}
          value={habit} name='habits' >{habit}</Checkbox>
          })}
    </div>
      </div>
        {errors.habits && touched.habits &&  <p className="text-red-500" > {errors.habits}</p>}


      <div>
      <RadioGroup label="Select your Gender" name="gender"  onChange={handleChange}>
      <Radio value="male">Male</Radio>
      <Radio value="female ">Female</Radio>
      <Radio value="other">Other</Radio>
    </RadioGroup>
    </div>
    {errors.gender && touched.gender &&  <p className="text-red-500" > {errors.gender}</p>}

     <Select
      className="max-w-xs"
      name="country"
      onChange={handleChange}
      label="Country"
      placeholder="Select your Country"
    >
      {countries.map((country) => (
        <SelectItem key={country.key}>{country.label}</SelectItem>
      ))}
    </Select>
    {errors.country && touched.country &&  <p className="text-red-500" > {errors.country}</p>}

       <Textarea
        onChange={handleChange}
        name="description"
        className="max-w-xs" 
        label="Description"
         placeholder="Enter your description" />
        {errors.description && touched.description &&  <p className="text-red-500" > {errors.description}</p>}

        <Button color="primary" type="submit">
          Submit
        </Button>
    </Form>
        )}
    </Formik>
    </div>
  )
}
