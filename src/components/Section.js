import Mainpage from './Mainpage';
import Menu from './Menu';
import '../UI/Section.css'
function Section() {
  return (
    <div className="Section">
     <div  className="Section1"> <Menu /></div>
     <div className="vercial"></div>
     <div  className="Section2"> <Mainpage /></div>

    </div>
  );
}
export default Section;
