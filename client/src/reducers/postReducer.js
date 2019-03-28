import { GET_POSTS, ADD_POST, POST_LOADING } from '../actions/types';

const initState = {
	posts: [],
	post: {},
	loading: false
};

export default function(state = initState, action) {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [ action.payload, ...state.posts ]
			};
		case POST_LOADING:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		default:
			return { ...state };
	}
}
