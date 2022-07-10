import classes from './meetup.module.css';

interface meetup{
    name : string,
    date : string,
    time : string,
}

var Meetup = (props : meetup) => {
    return(
        <div className={classes.meetupCard}>{props.name}, {props.time}, {props.date}</div>
    )
}

export default Meetup;