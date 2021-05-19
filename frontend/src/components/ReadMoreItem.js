import React, {Fragment,useState} from 'react'
import CreateComment from './CreateComment';
import {CommentCreated} from '../actions/CommentCreated'
import CommentItem from './CommentItem'
import {useParams,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import "./ReadmoreItem.css"

const ReadMoreItem = (props) => {
    const {mypost} = props;
    const {author} = props;
    const {date} = props;
    let {id} = useParams()

    return(
        <Fragment>
            <div className="rmpostItem">
                <h1 className="rmTitle">{mypost.Heading}</h1>
                <p className="rmabout"><span className="float-left"> <CreateIcon/> Dicussion intiated by {author.username}</span> <span className="float-right"> <EventNoteIcon/> {date.split("T")[0]}  </span></p>
                <p className="rmContent">{mypost.description}</p>
                <CreateComment/>
                <CommentItem id={id}/>
            </div>
            
        </Fragment>
    )

}


const maptstatetoprops = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(maptstatetoprops, {CommentCreated})(ReadMoreItem)

