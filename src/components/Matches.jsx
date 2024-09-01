import PropTypes from 'prop-types';

const Matches = ({ matches }) => {
    return (
        <div className="matches">
            <h2>Your Matches</h2>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>
                        <img src={match.imgUrl} alt={match.name} />
                        <h3>{match.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Matches.propTypes = {
    matches: PropTypes.arrayOf(
        PropTypes.shape({
            imgUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Matches;
