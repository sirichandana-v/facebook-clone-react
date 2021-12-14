import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./Post.css";
import { useStateValue } from './StateProvider';

function Post({ image, timestamp,message}) {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={user.photoURL} className="post__avatar"/>
                <div className="post__topInfo">
                <h3>{user.displayName}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                   <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                   <ChatBubbleOutlineIcon/>
                    <p>Connect</p>
                </div>
                <div className="post__option">
                   <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                   <AccountCircleIcon/>
                   <ExpandMoreOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
