import {CLICK} from './types'

function load(value) {
    return {
        type: CLICK,
        value: value
    }
}

export default load;