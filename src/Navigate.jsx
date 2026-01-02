import { useNavigate } from "react-router-dom";
function Navigate() {
    const Nevigate = useNavigate();
   
  return (
    <div style = {{textAlign:"center", padding:"10px",background:"black"}}>


        <button style={{border:"1px solid red",marginRight:"20%",padding:"10px",borderRadius:"10px",fontSize:"20px",background:"blue",color:"white",fontWeight:"bolder"}}onClick ={() => Nevigate("/Home")}> Home</button>
        <button style={{border:"1px solid red",marginRight:"0px",padding:"10px",borderRadius:"10px",fontSize:"20px",background:"blue",color:"white",fontWeight:"bolder"}} onClick={() => Nevigate("/Calculate")}>Calculator</button>
      </div>

  )
}

export default Navigate;

