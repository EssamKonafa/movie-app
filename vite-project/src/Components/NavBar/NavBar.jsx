import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import { useSelector } from "react-redux";
import './NavBar.css';
import {languageContext} from '../../Contexts/languageContext'


export default function NavBar() {
    let {addfavorite } = useSelector(state=>state.favorite);
    const {language,setLanguage} = useContext(languageContext)
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container bg-dark">
            <div className=" text-white" >
                            change language   
                        </div>
                        <button className="btn btn-primary text-white" 
                        onClick={()=>setLanguage(language == 'english' ? 'arabic' : 'english')}>  {language}
                        </button>
                        
                <div className="nav mx-auto">
                    <ul className="navbar-nav d-flex align-items-center justify-content-center me-auto mb-2 mb-lg-0 bg-dark">
                        <NavLink to="/movies" className="navbar-brand bg-dark">
                            <img src={logo} className='logo bg-dark' alt="Logo" />
                        </NavLink>
                        <li className="nav-item bg-dark">
                            <NavLink to="/login" className="nav-link active text-white bg-dark" activeClassName="active">
                                log In
                            </NavLink>
                        </li>
                        <li className="nav-item bg-dark">
                            <NavLink to="/register" className="nav-link active text-white bg-dark" activeClassName="active">
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item bg-dark">
                            <NavLink to="/movies" className="nav-link active text-white bg-dark" activeClassName="active">
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item bg-dark">
                            <NavLink to="/favorites" className="nav-link active text-white bg-dark" activeClassName="active">
                                Favorites
                            </NavLink>
                        </li>
                        <i className="fas fa-star text-warning fs-5">
                        </i>
                            <p className="text-white">{addfavorite.length}</p>
                    </ul>
                </div>
            </div>
        </nav>
    );
}