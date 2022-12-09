// ./src/redux/actions/index.js
export const actionCreator = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });

export const clicksCounter = () => ({
  type: 'INCREMENT_CLICK'
})