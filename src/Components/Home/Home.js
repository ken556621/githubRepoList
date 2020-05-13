import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoSearch from './RepoSearch';
import RepoList from './RepoList';

import './Home.scss';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            currentPage: 1
        }
    }
    componentDidMount(){
        const { currentPage } = this.state;
        const { dispatch } =this.props;
        dispatch({ type: "FETCH_GITGUB_DATA", payload: currentPage })
        window.addEventListener("scroll", this.fetchNextPageData);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.fetchNextPageData)
    }

    fetchNextPageData = () => {
        let { currentPage } = this.state;
        const { finishFetching, dispatch } =this.props;
        console.log("Ready to Fetch");
        if(!finishFetching){
            return
        }
        if(window.pageYOffset > document.body.offsetHeight - window.innerHeight){
            console.log("Fetch");
            this.setState({
                page: currentPage++
            }, dispatch({ type: "FETCH_GITGUB_DATA", payload: currentPage }))
        }
    }

    render() { 
        return (
            <div className="home-container">
                <RepoSearch />
                <RepoList />
            </div>
        );
    }
}

function mapStateToProps(store){
    return {
        repoListData: store.repo.repoListData,
        finishFetching: store.repo.finishFetching
    }
}
 
export default connect(mapStateToProps)(Home);