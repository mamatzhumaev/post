import { ADD_COMMENTS,
     DELETE_TV ,
     GET_POST_COMMENT,
     SHOW_LOADING,
     HIDE_LOADING,
     SHOW_ERROR,
     CLEAR_ERROR} from "../Types";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};
export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS: {
      const { title, id } = action.payload;
      return {
        ...state,
        comments: [...state.comments, { title, id }],
      };
    }
    case DELETE_TV: {
      const { id } = action.payload;
      const newArr = state.comments.filter(item => item.id !== id);
      return {
        ...state,
        comments:newArr
      };
    }
    case GET_POST_COMMENT:{
        const {data}=action.payload
        return{
            ...state,
            comments:data
        }
    }
    case SHOW_LOADING:{
        return{
            ...state,
            loading:true
        }
    }
    case HIDE_LOADING:{
        return{
            ...state,
            true:false
        }
    }
    case SHOW_ERROR:{
        const {error}=action
        return{
            ...state,
            error
        }
    }
    case CLEAR_ERROR:{
        return{
            ...state,
            error:null
        }
    }
    default:
      return state;
  }
};
