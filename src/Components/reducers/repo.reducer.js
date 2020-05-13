const initiaState = {
    repoListData: [],
    finishFetching: false
}

const loginReducer = (state = initiaState, action) => {
    switch (action.type){
        case "FETCH_GITGUB_DATA":
            return {
                ...state,
                finishFetching: false
            }
        case "UPDATE_REPO_DATA":
            return {
                ...state,
                repoListData: action.payload.data,
                finishFetching: true
            }
        default :
            return state
    }
}

export default loginReducer;