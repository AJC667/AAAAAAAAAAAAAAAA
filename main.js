document.addEventListener('DOMContentLoaded', init)

function init() {
  // получаем DOM Element
  const buttonToggleItems = document.getElementsByClassName('btn--toggle-items')
  if(buttionToggleItems.length === 0) {
    throw new Error('Кнопка не найдена в document');
  }
  
  const listItemsContainer = document.getElementsByClassName('list')
  
  // обработчик события клика
  buttonToggleItems[0].addEventListener(
    'click',
    (event) =>
      handleToggleItemsButtonClick(listItemsContainer[0], event)
  )
}

function handleToggleItemsButtonClick(listItemsContainer, pointerEvent) {
  const classForVisibleHiddenItems = 'list--all-hidden-visible'
  
  if(pointerEvent.currentTarget.innerText === 'Show Items') {
    pointerEvent.currentTarget.innerText = 'Hide Items'
    listItemsContainer.classList.add(classForVisibleHiddenItems)
  } else {
      pointerEvent.currentTarget.innerText = 'Show Items'
      listItemsContainer.classList.remove(classForVisibleHiddenItems)
  }
}
