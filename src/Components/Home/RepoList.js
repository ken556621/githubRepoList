import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import './RepoList.scss';

class RepoList extends Component {
    render() { 
        const { repoListData } = this.props;
        return ( 
            <div className="repo-list-container">
                <List className="repo-list">
                    { repoListData.map(list => {
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
 
