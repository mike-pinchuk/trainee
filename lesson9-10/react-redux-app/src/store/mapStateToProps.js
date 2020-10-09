import COMPONENT from '../WithReduxPage'

function mapStateToProps (component) {
    if (COMPONENT) {
        return function (state) {
            return {
                value: state
            }
        }
    } else {
        return undefined
    }
}

export default mapStateToProps