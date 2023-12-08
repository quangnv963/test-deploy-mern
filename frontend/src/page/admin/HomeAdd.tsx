import MainAdd from "../../component/mainAdd";
import { IProducts } from "../../types";

const HomeAdd = ({data}:{ data:IProducts[]}) => {
  return (
   <div>
     <MainAdd data={data}/>
   </div>
  )
};

export default HomeAdd;