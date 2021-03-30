import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'New name',
            username: 'New username',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://avatarfiles.alphacoders.com/798/79891.jpg'
        })
        setTweetImage("")
        setTweetMessage("")
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text" 
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
