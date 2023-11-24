import { createStore, Commit, Dispatch, ActionContext } from 'vuex';

// Kiểu của đối tượng người dùng
interface User {
  // Define các trường của đối tượng người dùng
}

// Kiểu của state trong store
interface RootState {
  user: User | null;
}

export const store = createStore({
  state: {
    user: null,
  } as RootState, // Sử dụng kiểu RootState cho state

  modules: {},

  mutations: {
    user(state: RootState, user: User) {
      state.user = user;
    },
  },

  actions: {
    userAction(context: ActionContext<RootState, RootState>, user: User) {
      context.commit('user', user);
    },
  },

  strict: true,

  getters: {
    user(state: RootState): User | null {
      return state.user;
    },
  },
});
