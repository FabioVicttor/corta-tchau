import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = (store) => store.todos;

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};

export const ModalState = (store) => store.ModalLogin.show;
export const ModalStateContatos = (store) => store.ModalContatos.showContatos;
export const ModalStateCadastro = (store) => store.ModalCadastro.showCadastro;
export const ModalStateAgenda = (store) => store.ModalAgenda.showAgenda;
export const ModalStatePopUp = (store) => store.ModalPopUp;
export const ModalAgendaCorte = (store) => store.ModalAgendaCorte.corte;
export const DadosUsuario = (store) => store.Login;
