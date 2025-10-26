
import { AiFillCar } from 'react-icons/ai';
export default function Card({label,icon}) {
  return (
    <div className="p-5 flex gap-5" >
         <div className="w-[400px] shadow-lg text-center space-y-4" >
           <div className="flex justify-center" >
            {icon}
           </div>
           <h1>{label}</h1>
           <p>Lorem ipsum dolor sit amet 
             consectetur adipisicing elit. Cupiditate, 
             aperiam. Dicta tempore nisi a quisquam rem 
             reprehenderit numquam eius, odio hic aperiam
              adipisci perferendis magnam nostrum
              unde quidem autem possimus!</p>
         </div>
         </div>
  )
}
