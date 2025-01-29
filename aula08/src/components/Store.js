import { combineReducers, createStore } from 'redux'
const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}
const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: ''
}

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return { ...state, balance: state.balance + action.payload }
        case 'account/withdraw':
            return { ...state, balance: state.balance - action.payload }
        case 'account/requestLoan':
            if (state.loan > 0) return state
            return { ...state, balance: state.balance + action.payload.amount, loan: action.payload.amount, loanPurpose: action.payload.purpose }
        case 'account/payLoan':
            return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan }
        default:
            return state
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt }
        case 'customer/updateName':
            return { ...state, fullName: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car' } })
// store.dispatch({ type: 'account/payLoan' })

function deposit(amount) {
    return { type: 'account/deposit', payload: amount }
}
function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount }
}
function requestLoan(amount) {
    return { type: 'account/requestLoan', payload: { amount: amount, purpose: 'Buy a car' } }
}
function payLoan() {
    return { type: 'account/payLoan' }
}
function createCustomer(fullName, nationalID) {
    return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
}
function updateName(fullName) {
    return { type: 'customer/updateName', payload: fullName }
}

store.dispatch(deposit(1500))
console.log(store.getState())

store.dispatch(withdraw(500))
console.log(store.getState())

store.dispatch(requestLoan(1500))
console.log(store.getState())

store.dispatch(payLoan())
console.log(store.getState())

store.dispatch(createCustomer('Júlio Batista', '055.803.293-18'))
console.log(store.getState())
