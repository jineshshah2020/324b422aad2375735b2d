import React, { Component, Fragment } from 'react';

class DetailsView extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { data } = this.props.location;
        return (
            <Fragment>
            {data ? (
                <div>                    
                    <span>Author: {data.author}</span><br />
                    <span>Craeted At Date: {data.created_at}</span><br />
                    <span>created At I: {data.created_at_i}</span><br />
                    <span>objectID: {data.objectID}</span><br />
                    <span>Title: {data.title}</span><br />
                    <span>URL: {data.url}</span>
                </div>
            ) : 
            <p>Not a valid path</p>
            }
            </Fragment>
        );
    }
}

export default DetailsView;
