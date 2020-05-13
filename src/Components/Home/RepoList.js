import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import './RepoList.scss';

class RepoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFilterMode: false,
            listData: []
        }
    }

    handleClick = (e) => {
        const { repoListData } = this.props;
        if(e.target.matches(".all")){
            this.setState({
                isFilterMode: true,
                listData: repoListData
            })
        }else if(e.target.matches(".public")){
            this.setState({
                isFilterMode: true,
                listData: repoListData.filter(list => !list.private)
            })
        }else if(e.target.matches(".private")){
            this.setState({
                isFilterMode: true,
                listData: repoListData.filter(list => list.private)
            })
        }else if(e.target.matches(".forks")){
            this.setState({
                isFilterMode: true,
                listData: repoListData.filter(list => list.fork)
            })
        }
    }

    render() { 
        const { isFilterMode, listData } = this.state;
        const { repoListData } = this.props;
        return ( 
            <div className="repo-list-container">
                <ButtonGroup disableElevation disableRipple variant="text" fullWidth color="primary">
                    <Button className="all" onClick={this.handleClick}>
                        <Typography className="all">
                            All
                        </Typography>
                    </Button>
                    <Button className="public" onClick={this.handleClick}>
                        <Typography className="public">
                            Public
                        </Typography>
                    </Button>
                    <Button className="private" onClick={this.handleClick}>
                        <Typography className="private">
                            Private
                        </Typography>
                    </Button>
                    <Button className="forks" onClick={this.handleClick}>
                        <Typography className="forks">
                            Forks
                        </Typography>
                    </Button>
                </ButtonGroup>
                <List className="repo-list">
                    { isFilterMode ? listData.map(list => {
                        return (
                            <ListItem key={list.id} divider>
                                <ListItemAvatar>
                                <Avatar alt="Travis Howard" src={list.owner.avatar_url} />
                                </ListItemAvatar>
                                <Link href={list.clone_url} variant="body2">
                                    <ListItemText primary={list.name} secondary={list.clone_url} />
                                </Link>
                                <ListItemSecondaryAction className="list-description">
                                    <Typography variant="subtitle2" color="textSecondary">
                                        {list.description}
                                    </Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    }) : repoListData.map(list => {
                        return (
                            <ListItem key={list.id} divider>
                                <ListItemAvatar>
                                <Avatar alt="Travis Howard" src={list.owner.avatar_url} />
                                </ListItemAvatar>
                                <Link href={list.clone_url} variant="body2">
                                    <ListItemText primary={list.name} secondary={list.clone_url} />
                                </Link>
                                <ListItemSecondaryAction className="list-description">
                                    <Typography variant="subtitle2" color="textSecondary">
                                        {list.description}
                                    </Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    }) }
                </List>
            </div>
        );
    }
}

function mapStateToProps(store){
    return {
        repoListData: store.repo.repoListData
    }
}
 
export default connect(mapStateToProps)(RepoList);
 
