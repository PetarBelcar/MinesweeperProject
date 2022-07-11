import Card from './ui/Card'

interface meetup{
    name : string,
    date : string,
    time : string,
}

var Meetup = (props : meetup) => {
    return(
        <Card>
            <div>{props.name}</div>
            <div>{props.date}</div>
            <div>{props.time}</div>
        </Card>
    )
}

export default Meetup;