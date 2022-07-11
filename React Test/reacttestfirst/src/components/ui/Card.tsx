import classes from './Card.module.css';

var Card = ((props : {children : JSX.Element[]}) =>{
    return(
        <div className={classes.meetupCard}>
            {props.children}
        </div>
    );
});

export default Card;