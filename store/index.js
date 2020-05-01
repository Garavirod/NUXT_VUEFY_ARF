export const state = () => ({
    token: null,
    user: null
})


// Mtatatios are process to change the state's values
export const mutations = {
    saveUser(state, user) {
        state.user = user;
    },
    saveToken(state, token) {
        state.token = token;
    }
}