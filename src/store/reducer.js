
const initialState = {
    news: []
};

const reducer = (state = initialState, action) => {

    if (action.type === 'LOADING_POSTS') {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === 'FETCHED_POSTS') {
        return {
            ...state,
            news: action.payload,
            loading: false
        }
    }

    return state;
};

export default reducer;