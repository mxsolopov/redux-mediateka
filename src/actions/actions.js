export const CHANGE_CONTENT = 'CHANGE_CONTENT';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';

export const ADD_MUSIC = 'ADD_MUSIC';
export const REMOVE_MUSIC = 'REMOVE_MUSIC';
export const EDIT_MUSIC = 'EDIT_MUSIC';

export const changeTypeOfContentAction = (payload) => ({type: CHANGE_CONTENT, payload});

export const addBookAction = (payload) => ({type: ADD_BOOK, payload});
export const removeBookAction = (payload) => ({type: REMOVE_BOOK, payload});
export const editBookAction = (payload) => ({type: EDIT_BOOK, payload});

export const addMovieAction = (payload) => ({type: ADD_MOVIE, payload});
export const removeMovieAction = (payload) => ({type: REMOVE_MOVIE, payload});
export const editMovieAction = (payload) => ({type: EDIT_MOVIE, payload});

export const addMusicAction = (payload) => ({type: ADD_MUSIC, payload});
export const removeMusicAction = (payload) => ({type: REMOVE_MUSIC, payload});
export const editMusicAction = (payload) => ({type: EDIT_MUSIC, payload});