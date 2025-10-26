

export default function Button({label,color}) {
  return (
    <div className="p-5" >
      <button className={` ${color} text-white p-5 rounded-lg px-4`} >{label}</button>
    </div>
  )
}
