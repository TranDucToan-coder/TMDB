import React, { useState, useEffect } from "react";

const Profile = () => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    return(
        <div>
            Hello {user.username}
        </div>
    )
} 
export default Profile
