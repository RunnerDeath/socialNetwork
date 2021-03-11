import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = (props) => {

    return (
        <div>
            <ProfileDescription/>
            <MyPosts postsData ={props.postsData}/>

        </div>
    )
}
export default Profile