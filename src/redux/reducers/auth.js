const initialState = {
    loading: false,
  };

  const Auth = (state = initialState, action = {}) => {
      switch(action.type){
          case'LOGIN_REQUEST':
          return {
              ...state,
              loading: true
          };
          case'LOGIN_SUCCESS':
          return {
              ...state,
              data: action.payload,
              loading: false,
              loginerror: null,
              isLogin: true,
          };
          case'LOGOUT':
          return {
              ...state,
              isLogin: false,
          };
          default:
            return state;
      }
  }

  export default Auth;