const initialState = {
    isInprogress: false,
    isError: false,
    message: '',
    status: null,
    stafflist: [],
};

export default function Chat_Party_Master_Reducer(state = initialState, action) {
    switch (action.type) {
        case 'CLIENT_PARTY_MASTER_INPROGRESS':
            return {
                ...state,
                isInprogress: true,
                isError: false,
                message: ''
            }
        default:
            return state;
    }
}