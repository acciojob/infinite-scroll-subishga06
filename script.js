const list = document.getElementById('infi-list');
let listItemCount = 0;

/**
 * Adds a specified number of new list items to the ordered list.
 * @param {number} count The number of list items to add.
 */
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        listItemCount++;
        const listItem = document.createElement('li');
        listItem.textContent = `List Item ${listItemCount}`;
        list.appendChild(listItem);
    }
}

// 1. Add about 10 list items by default.
addListItems(10);

/**
 * Checks if the user has scrolled to the bottom of the list container.
 * If they have, it adds 2 more list items.
 */
function handleScroll() {
    // clientHeight is the inner height of the element (content + padding).
    const listHeight = list.clientHeight;
    
    // scrollTop is the number of pixels an element's content is scrolled vertically.
    const scrollPosition = list.scrollTop;
    
    // scrollHeight is the height of the element's content, including content not visible on screen.
    const contentHeight = list.scrollHeight;

    // Check if the scroll position plus the visible height is greater than or equal to the total content height.
    // This indicates the user has reached the bottom.
    if (scrollPosition + listHeight >= contentHeight) {
        // 2. When the user reaches the end of list, 2 more list items must be added automatically.
        addListItems(2);
    }
}

// Attach the scroll event listener to the list element.
list.addEventListener('scroll', handleScroll);
