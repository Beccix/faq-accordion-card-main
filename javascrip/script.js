let accItem = document.getElementsByClassName('accordion-item');
let accBody = document.getElementsByClassName('accordion-button');

for (i = 0; i < accBody.length; i++) {
    accBody[i].addEventListener('click', toggleItem, false)
}
    function toggleItem() {
        let itemClass = this.parentNode.className;
        for (let i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordion-item hide';
        }
        if (itemClass === 'accordion-item hide') {
            this.parentNode.className = 'accordion-item show';
        }
    }