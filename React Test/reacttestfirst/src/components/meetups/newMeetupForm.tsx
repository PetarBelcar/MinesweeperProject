import Card from '../ui/Card';

var NewMeetupForm = () => {
    return(
        <Card>
            <h3>New meetup</h3>
            <form>
                <label htmlFor='meetupName'>Meetup name: </label>
                <input id="meetupName" required type="text" name='meetupName'/>
            </form>
        </Card>
    );
};

export default NewMeetupForm;