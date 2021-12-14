export const CHANGE_CONTENT = 'CHANGE_CONTENT';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const changeTypeOfContentAction = (payload) => ({type: CHANGE_CONTENT, payload});

export const addItemAction = (payload) => ({type: ADD_ITEM, payload});
export const removeItemAction = (payload) => ({type: REMOVE_ITEM, payload});
export const editItemAction = (payload) => ({type: EDIT_ITEM, payload});