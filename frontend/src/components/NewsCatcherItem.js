import React from 'react'
import './NewsCatcherItem.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const NewsCatcherItem = props => {
    console.log(props.responseData)
    const {responseData} = props
    console.log(responseData.length)
    if(responseData.length > 0) {
        return(
                responseData.map((list) => {
                    console.log(list);
                    return(
                        <div className="col-6 col-md-6 col-lg-4 col-xl-3" key={list._id}>     
                        <a href={list.link} target="_blank" rel="noopener noreferrer">
                            <div className="items">
                                
                                {list.media_content !=  null ? <img src={list.media_content} alt="Not available" className="newsImg" /> : <img src="media/altImg.jpg" alt="Not available" className="newsImg" />}
                                <h4>{list.title}</h4>
                                <h5 className="author"> {list.author != null ?<span><PlayArrowIcon/>  {list.author}</span>  :  <span>   <PlayArrowIcon/>  {list.clean_url}</span>  } 
                                <span className="topic"> {list.topic == "NA" ? null :<span>#{list.topic} </span> }  </span>
                                </h5> 

                                <p className="sum">{list.summary}</p>
                            </div>
                        </a>                      
                        </div>
                    )
                })
        )
    }else{
        return <h3>no list</h3>
    }
}

export default NewsCatcherItem