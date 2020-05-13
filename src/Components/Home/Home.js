import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoList from './RepoList';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './Home.scss';

class Home extends Component {
    componentDidMount(){
        const pageItems = 10;
        const { currentPage, dispatch } = this.props;
        dispatch({ type: "FETCH_GITGUB_DATA", payload: { currentPage, pageItems } })
        window.addEventListener("scroll", this.fetchNextPageData);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.fetchNextPageData)
    }

    fetchNextPageData = () => {
        const { finishFetching, dispatch } = this.props;
        let { currentPage, pageItems } = this.props;
        if(!finishFetching){
            return
        }
        if(window.pageYOffset > document.body.offsetHeight - window.innerHeight){
            currentPage = currentPage++;
            pageItems = pageItems + 10;
            dispatch({ type: "FETCH_GITGUB_DATA", payload: { currentPage, pageItems } })
        }
    }

    render() { 
        return (
            <div className="home-container">
                <AppBar position="fixed" className="navi-bar">
                    <Typography variant="h6">
                        KenYu Github Repositories
                    </Typography>
                </AppBar>
                <RepoList />
            </div>
        );
    }
}

function mapStateToProps(store){
    return {
        repoListData: store.repo.repoListData,
        finishFetching: store.repo.finishFetching,
        currentPage: store.repo.currentPage,
        pageItems: store.repo.pageItems
    }
}
 
export default connect(mapStateToProps)(Home);