import {TbCategory, TbSearch} from 'react-icons/tb';
import {FiSettings} from 'react-icons/fi';
import {BsQuestionLg} from 'react-icons/bs';
import {AiOutlineNotification} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import "../styles/header.scss";
export default function Header(){
    return(
        <div className='header'>
           <div className='header-container'>
            <div className='header-part1'>
                <div><button><TbCategory/></button></div>
                <div>To Do</div>
            </div>
            <div className='header-part2 '>
                <div><input type="text"/></div>
                <div>
                  <button> <TbSearch/></button> 
                </div>
            </div>
            <div className='header-part3'>
                <div><button><FiSettings/></button> </div>
                <div><button><BsQuestionLg/></button></div>
                <div><button><AiOutlineNotification/></button></div>
                <div><button><CgProfile/></button></div>
            </div>
          </div>  
        </div> 
    )
}