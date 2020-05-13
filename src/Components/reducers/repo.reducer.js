const initiaState = {
    repoListData: [],
    finishFetching: false,
    currentPage: 1,
    pageItems: 10
}

const loginReducer = (state = initiaState, action) => {
    switch (action.type){
        case "FETCH_GITGUB_DATA":
            return {
                ...state,
                finishFetching: false,
                currentPage: action.payload.currentPage,
                pageItems: action.payload.pageItems
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