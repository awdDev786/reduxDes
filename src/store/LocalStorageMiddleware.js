const LocalstorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    window.localStorage.setItem('test', JSON.stringify(store.getState()));
    return result;
};
export default LocalstorageMiddleware;
