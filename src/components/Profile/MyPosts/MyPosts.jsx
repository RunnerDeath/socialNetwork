import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return <div>
        <div className={s.posts}>
            <h3>My posts</h3>
        </div>
        <div>
            <div className={s.textarea}><textarea placeholder='Enter your message'></textarea></div>
            <div className={s.button}><button>New Post</button></div>
        </div>
        {postsElement}
    </div>
}
export default MyPosts