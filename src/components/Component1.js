import '../UI/Component1.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export function Component1({data1,setData1}) {

        return (
        <div className="Component1">
<table>
  <tr>
  <td>Current Tasks <IconButton><FilterAltIcon/> <SearchIcon/></IconButton></td>
  <td> Assigned To Me</td>
  <td>All</td>
      </tr>
  </table>
  {data1.map((d1,index)=>(
    <Component1data key={d1.index}
    currenttask={d1.currenttask}
    assigned={d1.assigned}
    all={d1.all}
    />
  ))
  }

        </div>
    );
}
function Component1data({currenttask,assigned,all}){
  return(
<table>
  <tr>
  <td>{currenttask}</td>
  <td className='tralign'>{assigned}</td>
  <td >{all}</td>
      </tr>
  </table>
  )
}