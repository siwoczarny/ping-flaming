import React from 'react';
import userAvatar from '../images/user/oval.png'

const UserField = () => {
    return (
        <div className="user">
            <img src={userAvatar} alt="avatar"></img>
            <input list="user-options" name="user-options" placeholder="emil.todd_87"></input>
            <datalist id="user-options">
                <option value="">Log out</option>
            </datalist>
        </div>
    );
}
 
export default UserField;