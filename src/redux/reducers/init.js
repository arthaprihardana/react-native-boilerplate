/*
 * @Author: Artha Prihardana 
 * @Date: 2019-09-02 13:37:29 
 * @Last Modified by:   Artha Prihardana 
 * @Last Modified time: 2019-09-02 13:37:29 
 */
import { INIT } from "../actions/type";

const INIT_STATE = {
    init: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case INIT:
            return { ...state, init: true }
        default:
            return { ...state }
    }
}