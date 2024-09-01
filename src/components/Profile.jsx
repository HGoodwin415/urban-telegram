import { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        age: '',
        bio: '',
        imgUrl: ''
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Submit the profile to the backend
        console.log('Profile submitted:', profile);
    };

    return (
        <div className="profile">
            <h2>Edit Profile</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    value={profile.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bio">Bio:</label>
                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Bio"
                    value={profile.bio}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="imgUrl">Image URL:</label>
                <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    placeholder="Image URL"
                    value={profile.imgUrl}
                    onChange={handleChange}
                />
            </div>
            {profile.imgUrl && (
                <div>
                    <img src={profile.imgUrl} alt="Profile" style={{ maxWidth: '200px' }} />
                </div>
            )}
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default Profile;
