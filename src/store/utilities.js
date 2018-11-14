export function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const hasActionProp = Object.prototype.hasOwnProperty.call(handlers, action.type);
    if (hasActionProp) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export function makeActionCreator(type, ...argNames) {
  return (...args) => {
    const action = {
      type,
      isFetching: false,
      didInvalidate: false
    };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });

    return action;
  };
}