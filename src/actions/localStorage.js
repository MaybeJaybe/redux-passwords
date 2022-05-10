const PASSWORD_STATE = "PASSWORD_STATE"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PASSWORD_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PASSWORD_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}