import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";

function Header() {
    return (
    <div className="header">
        <div className='top_header'>
            <div className='image'>
                <img src={require('./Image/logo.png')}></img>
            </div>
            <div className='text'>
                <div className='left'>
                    <ul>
                        <li>men</li>
                        <li>women</li>
                        <li>kids</li>
                        <li>home&living</li>
                        <li>beauty</li>
                        <li>studio</li>
                    </ul>
                </div>
                <div className="middle">
                    <div className="serach">
                        <FaSearch></FaSearch>
                    </div>
                    <div className="search_input">
                      <input type="text" placeholder="serach for products"></input> 
                      <button>serach here</button> 
                    </div>
                </div>
                <div className='last'>
                    <div className='input'>
                        <a><CgProfile></CgProfile></a>
                        <a><FaRegHeart></FaRegHeart></a>
                        <a><RiShoppingBagLine></RiShoppingBagLine></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Header;
