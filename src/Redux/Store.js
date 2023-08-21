import { legacy_createStore as createStore} from 'redux'

const initialState = {
    dataArray1: [],
  };

const updateDataArray1 = (state, action) => ({
    ...state,
    dataArray1: action.payload
  });

  const rootReducer = (state = initialState, action) => {
    const actionHandlers = {
      'Store_Login_Data': updateDataArray1,
    };
  
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;
  };

const store = createStore(rootReducer);

export default store;