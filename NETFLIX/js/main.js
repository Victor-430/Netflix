const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select Tab content Item
function selectItem(e) {
    removeBorder();
    removeshow();
    // Add border to current Tab
    this.classList.add("tab-border");
    // Grab Conteent from the DOM
   const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add("show");
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeshow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// listening for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

document.getElementsByClassName