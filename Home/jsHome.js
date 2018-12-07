var btnTab = document.querySelectorAll('.categories a');
var itemProject = document.querySelectorAll('.laster-project .projects--frame>div');


for (let i = 0; i < btnTab.length; i++) {
    addEventToButton(btnTab[i]);
}

function addEventToButton(btn) {
    btn.addEventListener('click', function () {
        event.preventDefault();
        console.log('clicked!');
        if (btn.dataset.filterKey == '') {
            for (let i = 0; i < itemProject.length; i++) {
                itemProject[i].style.display = "block";
            }
        } else {
            console.log('vao roi');
            for (let i = 0; i < itemProject.length; i++) {
                // console.log(itemProject[i].dataset.filterValue);
                console.log(btn.dataset.filterKey);
                handleFilter(btn, itemProject[i]);
            }
        }
    });
}

function handleFilter(btn, item) {
    console.log(btn.dataset.filterKey);
    console.log(btn.dataset.filterValue);
    if (btn.dataset.filterKey == item.dataset.filterValue) {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}