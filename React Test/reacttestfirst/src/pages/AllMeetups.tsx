import Meetup from "../components/meetup";

interface meetup{
    name : string,
    date : string,
    time : string,
}

var dummyMeetups : meetup[] = [
    {name : "Meetup 1",date : "21.7.2022.", time : "10:00"},
    {name : "Meetup 2",date : "22.7.2022.", time : "11:00"},
    {name : "Meetup 3",date : "23.7.2022.", time : "12:00"},
    {name : "Meetup 4",date : "24.7.2022.", time : "13:00"}
]

var AllMeetups = () =>
{
    return(
        <div>
            <div>All meetups page</div>
            <section>
                <ul>
                    {dummyMeetups.map((meetup) => {
                        return <Meetup name={meetup.name} date={meetup.date} time={meetup.time} />
                    })}
                </ul>
            </section>
        </div>
    );
}

export default AllMeetups;