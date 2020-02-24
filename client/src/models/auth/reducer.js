import { SET_AUTH } from './action';

export const initialStateAuth = {
  auth: false,
  director: {}
};

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    
    case SET_AUTH: {
      const { auth, director } = action.payload;
      return { auth, director };
    }
    
    default: {
      return state;
    }
  }
};

export default authReducer;