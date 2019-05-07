export const LANGUAGE = 'LANGUAGE';

const initialState = {
    language: 1 // default: russian
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        default:
            return state
    }
}

export const change_language = (data) => {
    return dispatch => {
        dispatch({
            type: LANGUAGE,
            language: data
        })
    }
};
