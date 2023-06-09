// Allows storage in LocalStorage.
export const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// Gets the value, via a key, stored in the LocalStorage.
export const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '{}')
}
