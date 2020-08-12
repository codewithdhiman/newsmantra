const API_KEY = 'c683f72d1cc44c728add131be39c6ddd';
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() < 10 ? date.getMonth() : '0' + date.getMonth();
const day = date.getDate();
const URL = `http://newsapi.org/v2/everything?q=bitcoin&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=${API_KEY}`;

const fetchedItems = payload => {
    return { type: "FETCHED_POSTS", payload };
}

const loadingItems = () => {
    return { type: "LOADING_POSTS" }
}


const fetchPosts = () => {
    return (dispatch) => {
        dispatch(loadingItems())
        fetch(URL)
            .then(res => res.json())
            .then(posts => {
                dispatch(fetchedItems(posts.articles));
            })
    }
}
export { fetchPosts };