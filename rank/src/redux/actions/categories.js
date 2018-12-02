import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

export function getCategories(){
    return(dispatch) => {
        axios.get(`${url}games/categories`)
        .then((res)=> {
            let categories = res.data
            dispatch({type: 'GET_CATEGORIES', categories})
        }).catch((err) => console.log(err))
    }
}

export function getGamesByCategory(category){
    return(dispatch) => {
        axios.get(`${url}games/categories/${category}`)
        .then((res)=> {
            let gamesByCategory = res.data
            console.log(res)
            dispatch({type: 'GET_GAMES_BY_CATEGORY', gamesByCategory})
        }).catch((err) => console.log(err))
    }
}