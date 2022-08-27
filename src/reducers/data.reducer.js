const initialState = () => ({
    name: 'test'
})



export default function (state = initialState(), action) {
    let { type, payload } = action
    switch (type) {
        default:
            return state
    }
}
