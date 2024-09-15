import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import PropTypes from 'prop-types';

const Home = ({ profiles }) => {
    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className="home">
            <div className="cardContainer">
                {profiles && profiles.map((profile) => (
                    <TinderCard
                        className="swipe"
                        key={profile.name}
                        onSwipe={(dir) => swiped(dir, profile.name)}
                        onCardLeftScreen={() => outOfFrame(profile.name)}
                    >
                        <div
                            style={{ backgroundImage: 'url(' + profile.imgUrl + ')' }}
                            className="card"
                        >
                            <h3>{profile.name}</h3>
                            <h4>{profile.age}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>
            {lastDirection ? <h2>You swiped {lastDirection}</h2> : null}
        </div>
    );
};

Home.propTypes = {
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Home;
