
import { createAction, createSlice} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const contactsSlice = createSlice({
    name: 'myContacts',
    initialState: { contacts: [], filter: '' },
    reducers: {
        addContacts: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContacts: (state, action) => {
           state.contacts= state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateFilter: (state, action) => {
            state.filter = action.payload;
    },
    }
})
const persistConfig = {
  key: 'root',
    storage,
  blacklist:['filter']
}

export const clickReducer = persistReducer(persistConfig, contactsSlice.reducer)


export const { addContacts, deleteContacts, updateFilter } = contactsSlice.actions
