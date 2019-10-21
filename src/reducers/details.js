export default function details(state = {}, action) {
  switch (action.type) {
    case 'SAVE_DETAILS':
      return {data: action.data};
    default:
      return state;
  }
}
