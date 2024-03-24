export function setActive({ children }, classList) {

    // Grabbing each elements classList to see which one was active before, and removing the active class
    for(let i = 0; i < children.length; i++) {
        if(children[i].children[0].classList[1] === 'active') {
            children[i].children[0].classList.remove('active');
        }
    }

    // Adding the active class to the new btn the user clicked on to filter
    classList.add('active');
}