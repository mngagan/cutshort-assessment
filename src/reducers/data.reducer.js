import produce from "immer";
import { UPDATE_STATE, UPDATE_STEP } from "../actions/actionTypes";

const COMPANY_NAME = 'Eden'
const initialState = () => ({
    companyName: COMPANY_NAME,
    currentStep: 0,
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    appUsage : 'single',
    stepTitle: [
        'Welcome! First things first...',
        'Let\'s set up a home for all your work.',
        `How are you planning to use ${COMPANY_NAME}?`,
        'Congratulations __displayName__'
    ],
    stepSubTitle: [
        'You can always change them later.',
        'You can always create another workspace later.',
        'We\'ll streamline your setup experience accordingly.',
        `You have completed onboarding, you can start using the ${COMPANY_NAME} app now.`
    ]
})

export default function (state = initialState(), action) {
    let { type, payload } = action
    switch (type) {
        case UPDATE_STEP: {
            return produce(state, draft => {
                draft.currentStep = payload
            })
        }
        case UPDATE_STATE: {
            return produce(state, draft => {
                let keysToUpdate = Object.keys(payload)
                keysToUpdate.forEach(key => {
                    draft[key] = payload[key]
                })
            })
        }
        default:
            return state
    }
}
