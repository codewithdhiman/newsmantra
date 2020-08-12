import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../../store/action';
import News from '../news/news';
import { Header } from 'semantic-ui-react';
import './home.css';

class Home extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <Header as='h1' className='page-header'>Today's News</Header>
                <News data={ this.props.news || [] }></News>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => { dispatch(fetchPosts()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);