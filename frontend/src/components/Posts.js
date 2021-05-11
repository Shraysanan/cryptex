import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux'
import {PostCreated} from '../actions/Posts'
import PropTypes from 'prop-types'
import axios from 'axios'


const Posts = ({PostCreated, isAuthenticated}) => {
    const [formData, SetFormData] = useState({
       Heading:'',
       description:''
    });

    const {Heading, description} = formData;

    const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = async e =>{
       e.preventDefault();
        PostCreated({Heading, description});

    }
    return (
        <Fragment>
           <form className="form" onSubmit= {e => onSubmit(e)}>
                        <div className="form-group">
                            <label>Heading</label>
                            <input type="text" name="Heading" value={Heading} onChange={e => onChange(e)}></input>

                            <label>Body</label>
                            <input type="text" name="description" value={description} onChange={e => onChange(e)}></input>

                            <button type="submit" variant="contained" color="primary"  value="Post">
                                Submit Post!
                            </button>
                        </div>
                    </form>  
        </Fragment>
    )
}

Posts.propTypes = {
    setAlert: PropTypes.func.isRequired,
    PostCreated: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapstatetoprop = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapstatetoprop, {PostCreated}) (Posts)
