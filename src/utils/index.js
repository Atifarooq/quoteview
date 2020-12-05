export const isPromise = value => {
    if (value !== null && typeof value === 'object')
        return value && typeof value.then === 'function';

    return false;
}

export const ActionType = Object.freeze({
    Pending: 'PENDING',
    Fulfilled: 'FULFILLED',
    Rejected: 'REJECTED',
});
