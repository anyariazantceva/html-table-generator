const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let container = document.querySelector('.page__table');
    if(container.innerHTML !== '') {
        container.innerHTML = '';
        addStyledTable();
        clearInputContent();
    } else {
        addStyledTable();
        clearInputContent();
    }

});

// create a table head

function createTableHead () {
    let tableObject = generateObject();
    let tHead = document.createElement('thead');
    let row = document.createElement('tr');
        for (let i = 0; i < tableObject.columns; i++) {
            let th = document.createElement('th');
            th.textContent = 'head';
            row.append(th);
        }
    tHead.append(row);
    return tHead
}

function createTableBody () {
    let tableObject = generateObject();
    let tbody = document.createElement('tbody');

    for(let i = 0; i<tableObject.rows - 1; i++) {
        let tr = document.createElement('tr');
        for(let i = 0; i < tableObject.columns; i++) {
            let td = document.createElement('td');
            td.textContent = 'value';
            tr.append(td);
        }
        tbody.append(tr);
    }

    // Making odd cells colorful
    for(let i = 1; i < tbody.childNodes.length; i+=2) {
        tbody.childNodes[i].style.backgroundColor = `${tableObject.tableBg}`;
    }
    return tbody

}
// common function to create a table
function createTable () {
    let table = document.createElement('table');
    let thead = createTableHead();
    let tbody = createTableBody();
    table.append(thead, tbody);
    return table
}

// adding all settings to created table
function addStyledTable () {
    let tableObject = generateObject();
    let container = document.querySelector('.page__table');
    let table = createTable();
    table.style.width = `${tableObject.tableWidth}%`;
    table.style.border = `${tableObject.borderWidth}px solid ${tableObject.tableBorder}`;
    table.style.borderCollapse = `${tableObject.checked ? 'collapse' : 'separated'}`;
    table.firstChild.style.backgroundColor = `${tableObject.tableHead}`;
    table.lastChild.style.backgroundColor = `${tableObject.tableBody}`;
    table.style.color = `${tableObject.tableFont}`;
    table.style.fontFamily = `${tableObject.fontFamily} sans-serif`;
    table.style.fontWeight = `${tableObject.fontWeight}`;
    table.style.fontSize = `${tableObject.fontSize}px`;

    container.append(table);
}


function generateObject () {
    let table = {
        rows: getNumber('#table-rows'),
        columns: getNumber('#table-columns'),
        tableWidth: getWidth('#table-width'),
        borderWidth: getWidth('#table-border'),
        checked: setCollapse(),
        tableBg: getColorsForTable('#table-color'),
        tableHead: getColorsForTable('#table-head-color'),
        tableBody: getColorsForTable('#table-body-color'),
        tableBorder: getColorsForTable('#table-border-color'),
        tableFont: getColorsForTable('#table-font'),
        fontFamily: getFontFamily(),
        fontWeight: getFontSettings('#font-weight'),
        fontSize: getFontSettings('#font-size')

    };
    return table
}
// get number of rows and columns
function getNumber (prop) {
    let number = parseInt(document.querySelector(prop).value);
    return number
}

// get width
function getWidth(prop) {
    let width = parseInt(document.querySelector(prop).value);
    return width

}

// function setting collapse attribute to the table
function setCollapse () {
    let checkbox = document.querySelector('#border-collapse');
    if(checkbox.checked !== true) {
        checkbox.setAttribute('checked', 'true');
    }
    return checkbox.checked;
}

// function to get all the color settings
function getColorsForTable (tablePart) {
    let color = document.querySelector(tablePart).value;
    return color
}

// get font family
function getFontFamily () {
    let select = document.querySelector('#font-type');
    let font = select.options[select.selectedIndex].value;
    return font
}

// function get font settings
function getFontSettings (prop) {
    let num = parseInt(document.querySelector(prop).value);
    return num
}


// clearing the previous content
function clearInputContent () {
    document.querySelector('#table-rows').value = '';
    document.querySelector('#table-columns').value = '';
    document.querySelector('#table-width').value = '';
    document.querySelector('#table-border').value = '';
    document.querySelector('#font-weight').value = '';
    document.querySelector('#font-size').value = '';

}

function showHtml () {
    let htmlContainer = document.querySelector('.page__html');
    htmlContainer.innerHTML = '';
    let html = document.documentElement.outerHTML;
    htmlContainer.style.border = '2px solid #fff';
    htmlContainer.textContent = html;
}
let getBtn = document.querySelector('.get__btn');
getBtn.addEventListener('click', showHtml);
