const getSavedItems = (item_name) => {
  const itemJSON = localStorage.getItem(item_name)

  try {
      return itemJSON ? JSON.parse(itemJSON) : []
  } catch (e) {
      return []
  }
  
}

const saveItem = (item_name, item) => {
  localStorage.setItem(item_name, JSON.stringify(item))
}

export {getSavedItems}
export {saveItem}