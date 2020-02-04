import React from 'react';
import userAvatar from '../images/user/oval.png'

const UserField = () => {
    return (
        <div className="user">
            <img src={userAvatar} alt="avatar"></img>
            <select type="name" placeholder="userLogin">
                <option value="user1">emil.todd_87</option>
            </select>
        </div>
    );
}
 
export default UserField;