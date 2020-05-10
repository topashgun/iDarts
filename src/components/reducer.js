export default function reducer(state, action) {
    if (action.type === "initialState") {
        return {
            jsonData: action.jsonData,
            populateDataDivHeight: action.populateDataDivHeight,
            etf: action.etf,
            mf: action.mf
        }
    } else if (action.type === "setEtfMf") {
        return { ...state, etf: action.etf, mf: action.mf }
    } else if (action.type === "setHeight") {
        return { ...state, populateDataDivHeight: action.populateDataDivHeight }
    } else if (action.type === "setJsonData") {
        return { ...state, jsonData: action.jsonData }
    } else {
        return state;
    }

}