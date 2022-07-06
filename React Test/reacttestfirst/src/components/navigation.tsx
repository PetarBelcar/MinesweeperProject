import { Link } from "react-router-dom";

import classes from './navigation.module.css';

var Navigation = () =>
{
    return(
        <header id="navigation" className={classes.navigation}>
            <Link to="/" className={classes.button}>All meetups</Link>
            <Link to="/newmeetup" className={classes.button}>New meetups</Link>
            <Link to="/favorites" className={classes.button}>Favorites</Link>
        </header>
    );
}

export default Navigation;