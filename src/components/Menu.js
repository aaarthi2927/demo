import '../UI/Menu.css';
import ListIcon from '@mui/icons-material/List';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
function Menu(){
    return(
        <div className="menu">
        <ul className='menutop'>
        <li className="menuItem">
        <button className='iconcolor'><IconButton><ListIcon/></IconButton></button>
           My Page 
</li>
<li className="menuItem">
<button className='iconcolor'><IconButton ><PlayCircleOutlineIcon/></IconButton></button>
    Runs
</li>
<li className="menuItem">
<button className='iconcolor'><IconButton><EditIcon/></IconButton></button>
    Procedures
</li>
<li className="menuItem">
<button className='iconcolor'><IconButton><ListAltIcon/></IconButton></button>
    Inventories
</li>         </ul>

<ul className='menubottom'>
<li className="menuItem">
<button className='iconcolor'><IconButton><SettingsIcon/></IconButton></button>
    Settings
</li>
<li className="menuItem">
<button className='iconcolor'><IconButton><HelpIcon/></IconButton></button>
    Support
</li>
<li className="menuItem">
    <button className='iconcolor'><IconButton ><AccountCircleIcon/></IconButton></button>

    Profile
</li>         </ul>
        </div>
    )
}
export default Menu;

