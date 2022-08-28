import { UPDATE_STATE, UPDATE_STEP } from './actionTypes';

export const updateState = (data) => {
    return {
        type: 'UPDATE_STATE',
        payload: data
    }
}


export const updateStep = (data) => {
    return {
        type: 'UPDATE_STEP',
        payload: data
    }
}

export const updateSiderCollapse = (data) => {
    return {
        type: 'SIDER_COLLAPSE',
        payload: data
    }
}