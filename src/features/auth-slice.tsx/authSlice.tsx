import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accesToken } = action.payload;
            state.user = user;
            state.token = accesToken;
        },
        logout: state => {
            state.user = null
            state.token = null
        },

    }

})

export const { setCredentials, logout } = AuthSlice.actions;


export const selectCurrentUser=(state:any)=> state.auth.user
export const selectCurrentToken=(state:any)=> state.auth.token


//middleware
export const localStorageMiddleware = ({ getState }:any) => {

    console.log(getState,'get sate')
     return (next:any) => (action:any) => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(getState()));
      return result;
    }; 
  };
  
  export const reHydrateStore = () => {
     if (localStorage.getItem('applicationState') !== null) {
      return JSON.parse(localStorage.getItem('applicationState')||''); // re-hydrate the store
    } 
  };

export default AuthSlice.reducer;