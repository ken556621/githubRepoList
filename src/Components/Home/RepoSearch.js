import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class RepoSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() { 
        const { repoListData } = this.props;
        return ( 
            <>
                <Autocomplete
                    id="repo-list-search"
                    freeSolo
                    options={repoListData.map(list => list.name)}
                    renderInput={(params) => (
                        <TextField {...params} label="Repo Name" margin="normal" variant="outlined" />
                    )}
                />
            </>
        );
    }
}
 
function mapStateToProps(store){
    return {
        repoListData: store.repo.repoListData
    }
}
 
export default connect(mapStateToProps)(RepoSearch);