export const INCREMENT = `[counter] INCREMENT`;
export const DECREMENT = `[counter] DECREMENT`;


export const incrementCounterAction = ( increment: number ) => (
    {
        type: INCREMENT,
        payload: increment
    }
);

export const decrementCounterAction = ( decrement: number ) => (
    {
        type: DECREMENT,
        payload: decrement
    }
);