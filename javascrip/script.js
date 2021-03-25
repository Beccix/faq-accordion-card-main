function HideShow() {
    const elementFirst = document.getElementById('p-target');
    if (elementFirst.classList.contains('hide')) {
        elementFirst.classList.remove('hide')
        elementFirst.classList.add('show')
    } else {
        elementFirst.classList.add('hide')
        elementFirst.classList.remove('show')
    }

    const elementSecond = document.getElementById('p-target');
    if (element.classList.contains('hide')) {
        element.classList.remove('hide')
        element.classList.add('show')
    } else {
        element.classList.add('hide')
        element.classList.remove('show')
    }
}