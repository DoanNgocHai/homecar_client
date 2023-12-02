import { createStore, Commit, Dispatch, ActionContext } from 'vuex';


// Kiểu của state trong store
interface RootState {
  user: null,
  brands: null,
  figures: null,
  gears: null,
  colors: null,
}

export const store = createStore({
  state: {
    user: null,
    brands: null,
    figures: null,
    gears: null,
    colors: null,
  } as RootState, // Sử dụng kiểu RootState cho state

  modules: {},

  mutations: {
    user(state: RootState, user: any ) {
      state.user = user;
    },
    brands(state: RootState, brands: any ) {
      state.brands = brands;
    },
    figures(state: RootState, figures: any ) {
      state.figures = figures;
    },
    gears(state: RootState, gears: any ) {
      state.gears = gears;
    },
    colors(state: RootState, colors: any ) {
      state.colors = colors;
    },
  },

  actions: {
    userAction(context: ActionContext<RootState, RootState>, user: any) {
      context.commit('user', user);
    },
    brandsAction(context: ActionContext<RootState, RootState>, brands: any) {
      context.commit('brands', brands);
    },
    figuresAction(context: ActionContext<RootState, RootState>, figures: any) {
      context.commit('figures', figures);
    },
    gearsAction(context: ActionContext<RootState, RootState>, gears: any) {
      context.commit('gears', gears);
    },
    colorsAction(context: ActionContext<RootState, RootState>, colors: any) {
      context.commit('colors', colors);
    },
  },

  getters: {
    user(state: RootState): null {
      return state.user;
    },
    brands(state: RootState): null {
      return state.brands;
    },
    figures(state: RootState): null {
      return state.figures;
    },
    gears(state: RootState): null {
      return state.gears;
    },
    colors(state: RootState): null {
      return state.colors;
    },
    
  },
});
