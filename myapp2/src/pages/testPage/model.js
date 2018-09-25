
export default {
  namespace: 'test1',
  state: {
    state1:true,
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action.payload };
    }
  },
  effects: {},

  subscriptions: {}
};
