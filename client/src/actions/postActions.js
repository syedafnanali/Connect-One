import axios from 'axios';
import { GET_POSTS, GET_ERRORS, ADD_POST, POST_LOADING } from './types';

export const addPosts = (postData) => (dispatch) => {
	axios
		.post('api/posts', postData)
		.then((res) =>
			dispatch({
				type: ADD_POST,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const getPosts = () => (dispatch) => {
	dispatch(setPostLoading());
	axios
		.get('api/posts')
		.then((res) =>
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_POSTS,
				payload: null
			})
		);
};


export const deletePost = (id) => (dispatch) => {
	dispatch(setPostLoading());
	axios
		.get('api/posts')
		.then((res) =>
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_POSTS,
				payload: null
			})
		);
};


export const setPostLoading = () => {
	return {
		type: POST_LOADING
	};
};
