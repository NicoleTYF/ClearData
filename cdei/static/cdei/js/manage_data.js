function ChangeColor(tableRow, highLight) {
    if (highLight) {
        tableRow.style.backgroundColor = '#cce8eb';
    }
    else {
        tableRow.style.backgroundColor = 'white';
    }
}

function DoNav(theUrl) {
    document.location.href = theUrl;
}