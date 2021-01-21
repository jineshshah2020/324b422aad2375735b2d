import React, { Component, Fragment } from 'react';
import axios from 'axios';

class MainView extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            pageCount: 1
        }
    }

    componentDidMount() {
        setInterval(this.fetchData,10000);
    }

    fetchData = () => {
        let requestUrl = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageCount}`;
        axios.get(requestUrl)
        .then(response => {
            console.log(response.data.hits);
            let newData = this.state.data;
            for (let i = 0; i < response.data.hits.length; i++) {
                newData.push(response.data.hits[i])
            }
            this.setState({
                data: newData,
                pageCount: this.state.pageCount + 1
            });
        })
    }

    render() {
        const { data } = this.state;
        return (
        <Fragment>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                        <th>created_at</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data  && data.length > 0 && data.map((detail) => {
                        return (
                        <tr>
                            <td onClick={() => this.props.history.push({
                                pathname: '/details',
                                data: detail
                            })}>{detail.title}</td>
                            <td onClick={() => this.props.history.push({
                                pathname: '/details',
                                data: detail
                            })}>{detail.url}</td>
                            <td onClick={() => this.props.history.push({
                                pathname: '/details',
                                data: detail
                            })}>{detail.created_at}</td>
                            <td onClick={() => this.props.history.push({
                                pathname: '/details',
                                data: detail
                            })}>{detail.author}</td>
                        </tr>
                        )   
                    })}
                    </tbody>
                </table>
        </Fragment>
    );
  }
}

export default MainView;
