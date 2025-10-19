import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import {Listbox, ListboxItem, Avatar} from "@heroui/react";
export default function CataItems() {
    const {name} = useParams();
    const [data, setData] = useState();
    const nav = useNavigate();
      const getData = async () => {
        try{
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
                params: {c:name}
            });
            setData(response.data);
        }catch(err){
          console.log(err);
        }
      }
    
      useEffect(()=>{
        getData();
      },[]);
      console.log(data)
  return (
    <div>
     {data &&
      <Listbox
        classNames={{
            base:"max-w-lg",
        }}
        defaultSelectedKeys={["1"]}
        items={data.meals}
        label="Assigned to"
      >
        {(item) => (
          <ListboxItem key={item.idMeal} textValue={item.idMeal}>
            <div className="flex gap-2 items-center">
              <Avatar alt={item.strMealThumb} className="shrink-0" size="lg" src={item.strMealThumb} />
              <div className="flex flex-col">
                <span className="text-lg">{item.strMeal}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    }
    </div>
  )
}
