import '../UI/Component2.css';
import { datadetails2 } from './Mainpage';
export function Component2({data2,setData2}) {
    return (
        <div className="Component2">
<table>
  <tr>
  <td> Recent Work </td>
  <td></td>
    <td>ALL</td>
    <td>PROJECTS</td>
    <td></td>
    <td>PROTOCCES</td>
    <td>REPORTS</td>
      </tr>
  </table>
  {data2.map((d2,index)=>(
    <Component2data key={d2.index}
 work={d2.work}
 task={d2.task}
 date={d2.date}
    />
  ))
}
</div>
    );
}
function Component2data({work,task,date}){
  return(
<table>
  <tr>
  <td>{work}</td>
  <td> </td>
  <td > </td>
  <td>{task}</td>
  <td >{date}</td>
      </tr>
  </table>
  )
}