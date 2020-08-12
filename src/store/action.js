const API_KEY = 'c683f72d1cc44c728add131be39c6ddd';
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const URL = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-09&sortBy=publishedAt&apiKey=${API_KEY}`;

const fetchedItems = payload => {
    return { type: "FETCHED_POSTS", payload };
}

const loadingItems = () => {
    return { type: "LOADING_POSTS" }
}


const fetchPosts = () => {
    return (dispatch) => {
        dispatch(loadingItems())
        fetch(proxyurl + URL)
            .then(res => res.json())
            .then(posts => {
                dispatch(fetchedItems(posts.articles));
            })
    }
}
export { fetchPosts };