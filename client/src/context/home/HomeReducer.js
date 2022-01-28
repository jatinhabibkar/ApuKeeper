import {
  ADD_KEEP,
  DELETE_KEEP,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_KEEPS,
  CLEAR_KEEPS,
  UPDATE_KEEP,
  FILTER_KEEP,
  CLEAR_FILTER,
} from "../types";

const HomeReducer = (state, action) => {
  switch (action.type) {
    case GET_KEEPS:
      return {
        ...state,
        keeps: action.payload,
        loading: false,
      };
    case ADD_KEEP:
      return {
        ...state,
        keeps: [action.payload, ...state.keeps],
        loading: false,
      };
    case DELETE_KEEP:
      return {
        ...state,
        keeps: state.keeps.filter((keep) => keep._id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case UPDATE_KEEP:
      return {
        ...state,
        current: null,
        keeps: state.keeps.map((keep) =>
          {return keep._id === action.payload._id ? action.payload : keep}
        ),
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_KEEPS:
      return{
        ...state,
        current:null,
        error:null,
        keeps:null
      }
      case FILTER_KEEP:
        return {
          ...state,
          searchKey:action.payload,
          filtered: state.keeps.filter((keep) => {
            const regex = new RegExp(`${action.payload}`, "gi");
            if( keep.title.match(regex) || keep.parg.match(regex))
              return true
            else
              return false
          }).map((keep)=>keep._id)
        };
      case CLEAR_FILTER:
        return {
          ...state,
          searchKey:null,
          filtered: null,
        };
    default:
      return state;
  }
};

export default HomeReducer;
