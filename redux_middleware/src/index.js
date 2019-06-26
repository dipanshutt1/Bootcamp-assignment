import { createStore } from 'redux';

// things to do
// make reducer
// make store
// make action
// dispatch action
// have fun

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return [...state, action.user]
        }

        case 'DELETE_USER': {
            return state.filter(user => user.id !== action.id)
        }

        default: {
            return state;
        }
    }
}

const store = createStore(userReducer);
store.subscribe(() => {
    console.log("state changes: ", store.getState());
})

const addUser = user => ({
    type: 'ADD_USER',
    user
})

const deleteUser = id => ({
    type: 'DELETE_USER',
    id
})

store.dispatch(addUser({ name: "Deepanshu", id: 3288, email: "deepanshu@tothenew.com" }));
store.dispatch(addUser({name:"Rahul Jain", id:3221, email:"rahul.jain1@tothenew.com"}));
store.dispatch(addUser({name:"Sachin Sharma", id:3244, email:"sachin.sharma@tothenew.com"}));
store.dispatch({type:'DELETE_USER', id:3221});
store.dispatch(deleteUser(3244));
store.dispatch(deleteUser(3288));




