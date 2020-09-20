export const Types = {
    GET_USER_REQUEST: "GET_USER_REQUEST",
    GET_USER_SUCCESS: "GET_USER_SUCESS",
    GET_USER_FAIL: "GET_USER_FAIL",
    GET_USER_CLEAR: "GET_USER_CLEAR",
    GET_REPOS_REQUEST: "GET_REPOS_REQUEST",
    GET_REPOS_SUCCESS: "GET_REPOS_SUCESS",
    GET_REPOS_FAIL: "GET_REPOS_FAIL",
    GET_FOLLOWERS_REQUEST: "GET_FOLLOWERS_REQUEST",
    GET_FOLLOWERS_SUCCESS: "GET_FOLLOWERS_SUCESS",
    GET_FOLLOWERS_FAIL: "GET_FOLLOWERS_FAIL",
    GET_FOLLOWING_REQUEST: "GET_FOLLOWING__REQUEST",
    GET_FOLLOWING_SUCCESS: "GET_FOLLOWING_S_SUCESS",
    GET_FOLLOWING_FAIL: "GET_FOLLOWING__FAIL",
    GET_CHECKUSER_REQUEST: "GET_CHECKUSER_REQUEST",
    GET_CHECKUSER_SUCCESS: "GET_CHECKUSER_SUCESS",
    GET_CHECKUSER_FAIL: "GET_CHECKUSER_FAIL",
}

const INITIAL_STATE = {
    userLoading: false,
    userError: false,
    userData: null,
    reposLoading: false,
    reposError: false,
    reposData: null,
    followersLoading: false,
    followersError: false,
    followersData: null,
    followingLoading: false,
    followingError: false,
    followingData: null,
    checkUserLoading: false,
    checkUserError: false,
    checkUserData: null,
}

export default function Git(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
                userError: false
            }

        case Types.GET_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                userError: false,
                userData: action.payload,
            }
        case Types.GET_USER_FAIL:
            return {
                ...state,
                userLoading: false,
                userError: true,
            }
        case Types.GET_USER_CLEAR:
            return {
                ...state,
                userLoading: false,
                userError: false,
                userData: null,
            }
        case Types.GET_REPOS_REQUEST:
            return {
                ...state,
                reposLoading: true,
                reposError: false
            }

        case Types.GET_REPOS_SUCCESS:
            return {
                ...state,
                reposLoading: false,
                reposError: false,
                reposData: action.payload,
            }
        case Types.GET_REPOS_FAIL:
            return {
                ...state,
                reposLoading: false,
                reposError: true,
            }
        case Types.GET_FOLLOWERS_REQUEST:
            return {
                ...state,
                followersLoading: true,
                followersError: false
            }

        case Types.GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                followersLoading: false,
                followersError: false,
                followersData: action.payload,
            }
        case Types.GET_FOLLOWERS_FAIL:
            return {
                ...state,
                followersLoading: false,
                followersError: true,
            }
        case Types.GET_FOLLOWING_REQUEST:
            return {
                ...state,
                followingLoading: true,
                followingError: false
            }

        case Types.GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                followingLoading: false,
                followingError: false,
                followingData: action.payload,
            }
        case Types.GET_FOLLOWING_FAIL:
            return {
                ...state,
                followingLoading: false,
                followingError: true,
            }
            case Types.GET_CHECKUSER_REQUEST:
            return {
                ...state,
                checkUserLoading: true,
                checkUserError: false
            }

        case Types.GET_CHECKUSER_SUCCESS:
            return {
                ...state,
                checkUserLoading: false,
                checkUserError: false,
                checkUserData: action.payload,
            }
        case Types.GET_CHECKUSER_FAIL:
            return {
                ...state,
                checkUserLoading: false,
                checkUserError: true,
            }
        default:
            return state
    }
}

export const Creators = {
    getUserRequest: payload => ({
        type: Types.GET_USER_REQUEST,
        payload
    }),
    getUserSuccess: payload => ({
        type: Types.GET_USER_SUCCESS,
        payload
    }),
    getUserFail: () => ({
        type: Types.GET_USER_FAIL,
    }),
    getUserClear: () => ({
        type: Types.GET_USER_CLEAR,
    }),
    getReposRequest: payload => ({
        type: Types.GET_REPOS_REQUEST,
        payload
    }),
    getReposSuccess: payload => ({
        type: Types.GET_REPOS_SUCCESS,
        payload
    }),
    getReposFail: () => ({
        type: Types.GET_REPOS_FAIL,
    }),
    getFollowersRequest: payload => ({
        type: Types.GET_FOLLOWERS_REQUEST,
        payload
    }),
    getFollowersSuccess: payload => ({
        type: Types.GET_FOLLOWERS_SUCCESS,
        payload
    }),
    getFollowersFail: () => ({
        type: Types.GET_FOLLOWERS_FAIL,
    }),
    getFollowingRequest: payload => ({
        type: Types.GET_FOLLOWING_REQUEST,
        payload
    }),
    getFollowingSuccess: payload => ({
        type: Types.GET_FOLLOWING_SUCCESS,
        payload
    }),
    getFollowingFail: () => ({
        type: Types.GET_FOLLOWING_FAIL,
    }),
    getCheckUserRequest: payload => ({
        type: Types.GET_CHECKUSER_REQUEST,
        payload
    }),
    getCheckUserSuccess: payload => ({
        type: Types.GET_CHECKUSER_SUCCESS,
        payload
    }),
    getCheckUserFail: () => ({
        type: Types.GET_CHECKUSER_FAIL,
    }),
}