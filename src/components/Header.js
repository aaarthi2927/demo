import '../UI/Header.css';
import { css } from '@emotion/react';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
function Header(){
     return(
        <div className="header">
           <div>
            <h3 className="title">Test<span>RUNZ</span></h3>
            </div>
            <div className="headerright">
                <button className="Addmember"><IconButton className="icon"><PeopleIcon/></IconButton> Invite</button>
      <IconButton className="icon"><NotificationsIcon/></IconButton>
      <div >
      <select name="university" id="university" >University
   <option value="" disabled selected hidden>University</option>
   <option value="pondicherry university">Pondicherry university</option>
    <option value="anna university">Anna university</option>
 
  </select>
  <br/>
   <select name="labname" id="labname" >Labname
   <option value="" disabled selected hidden>lab Name</option>
   <option value="labname">CK college</option>
    <option value="labname">ACET</option>
  <option value="labname">SVCET</option>
  </select>
      </div>
      </div>
      <div css={css({
        margin: 10,
        padding: 10,
        backgroundColor: '#eee',
      })}>
        This is an example of <code>`css`</code> using an object.
      </div>
        </div>
    )
}
export default Header;
 