/**
 * @typedef {{class:string, employee01:string, shift01:string, employee02?:string, shift02?:string}} Type01
*/

/**
 * @typedef {{id:string, label:string, name:string, type?:'select'|'checkbox', optionlist?: {value:string, label:string}[]}} Type02
*/

/**
 * @type {Type01[]}
 */
const staffShiftScheduling = [
    {
        class: 'Logisztika',
        employee01: 'Kovács Máté',
        shift01: 'Délelöttös',
        employee02: 'Kovács József',
        shift02: 'Délutános'
    },
    {
        class: 'Könyvelés',
        employee01: 'Szabó Anna',
        shift01: 'Éjszakai'
    },
    {
        class: 'Játékfejlesztés',
        employee01: 'Varga Péter',
        shift01: 'Délutános',
        employee02: 'Nagy Eszter',
        shift02: 'Éjszakai'
    }
];

/**
 * @type {Type02[]}
 */
const form = [
    {
        id: 'osztaly',
        label: 'Osztály',
        name: 'osztaly'
    },
    {
        id: 'mano1',
        label: 'Manó 1',
        name: 'mano1'
    },
    {
        id: 'muszak1',
        label: 'Manó 1 műszak',
        name: 'muszak1',                        /* Alapól nem volt megadva */
        type: 'select',
        optionList: [{value: '1', label: 'Délelöttös'}, {value: '2', label: 'Délutános'}, {value: '3', label: 'Éjszakai'}]
    },
    {
        id: 'masodikmano',
        label: 'Két manót veszek fel',
        name: 'masodikmano',
        type: 'checkbox'
    },
    {
        id: 'mano2',
        label: 'Manó 2',
        name: 'mano2'
    },
    {
        id: 'muszak2',
        label: 'Manó 2 műszak',
        name: 'muszak2',                        /* Alapól nem volt megadva */
        type: 'select',
        optionList: [{value: '1', label: 'Délelöttös'}, {value: '2', label: 'Délutános'}, {value: '3', label: 'Éjszakai'}]
    }
];

/**
 * Létrehoz egy div tag-et és hozzáfűzi a body-hoz.
 * @param {string} id 
 * @param {boolean} hidden 
 * @returns {HTMLDivElement}
 */
function createDiv(id, hidden){
    const div = document.createElement('div');
    div.id = id;

    if (hidden == true){
        div.classList.add('hide');
    }

    document.body.appendChild(div);

    return div;
}

/**
 * Létrehoz egy táblázat cellát (td / th).
 * @param {'td'|'th'} cellType 
 * @param {string} text 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function createCell(cellType, text, parentRow){
    const cell = document.createElement(cellType);
    cell.innerText = text;
    parentRow.appendChild(cell);

    return cell;
}

/**
 * Létrehozza egy táblázat fejlécét.
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 * @returns {HTMLTableSectionElement}
 */
function generateHeader(table, headerList){
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    for (const data of headerList){
        createCell('th', data, tr);
    }

    return thead;
}

/**
 * Létrehoz egy táblázatot (thead + tbody).
 * @param {string[]} headerList 
 * @param {string} tbodyId 
 * @returns {HTMLTableElement}
 */
function generateTable(headerList, tbodyId){
    const table = document.createElement('table');
    generateHeader(table, headerList);

    const tbody = document.createElement('tbody');
    tbody.id = tbodyId;
    table.appendChild(tbody);

    return table;
}

