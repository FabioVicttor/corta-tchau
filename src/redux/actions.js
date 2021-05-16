import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SHOW, SHOW_CONTATOS, SHOW_AGENDA,CORTE } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const setShow = () => ({
  type: SHOW,
});

export const setShowContatos = () => ({
  type: SHOW_CONTATOS,
});

export const setShowAgenda = () => ({
  type: SHOW_AGENDA,
});

export const setCorte = () => ({
  type: CORTE,
});

