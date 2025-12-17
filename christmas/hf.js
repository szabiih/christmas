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
 * Létrehozza a táblázat fejlécét.
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
 * Létrehozza a táblázatot (thead + tbody).
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

/**
 * Egy sor kirenderelése / feltöltése (rowspan kezelésével együtt)
 * @param {HTMLTableSectionElement} tbody 
 * @param {Type01} elf 
 * @returns {void}
 */
function renderRow(tbody, elf){
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdWhat = createCell('td', elf.class, tr);
    createCell('td', elf.employee01, tr);
    createCell('td', elf.shift01, tr);

    if (elf.employee02 !== undefined && elf.shift02 !== undefined){
        tdWhat.colSpan = 2;

        const tr02 = document.createElement('tr');
        tbody.appendChild(tr02);

        createCell('td', elf.employee02, tr02);
        createCell('td', elf.shift02, tr02);
    }
}

/**
 * A táblázat kirenderelése / feltöltése
 * @param {string} tbodyId 
 * @param {Type01[]} arr 
 * @returns {void}
 */
function renderTableBody(tbodyId, arr){
    /**
     * @type {HTMLTableSectionElement}
     */
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = '';

    for (const elf of arr){
        renderRow(tbody, elf);
    }
}

/**
 * Valós táblázat feltöltés
 * @param {Type01[]} arr 
 * @returns {void}
 */
function renderTbody(arr){
    renderTableBody('jstbody', arr);        /* 'jstbody' - alapból már meg volt adva (index.html) */
}

/**
 * Létrehoz egy checkbox és label tag-ot amiket hozzáfűz egy div-hez.
 * @param {HTMLDivElement} mainDiv 
 * @param {FormField} form                  Valamiért nem ismeri fel a típust
 * @returns {void}
 */
function createCheckboxField(mainDiv, form){
    const input = document.createElement('input');
    input.id = form.id;
    input.name = form.name;
    input.type = 'checkbox';
    mainDiv.appendChild(input);

    const label = document.createElement('label');
    label.innerText = form.label;
    label.htmlFor = form.id;
    mainDiv.appendChild(label);
}

/**
 * Létrehozza a form tag-et.
 * @param {string} id 
 * @param {Type02[]} formAll 
 * @returns {HTMLFormElement}
 */
function generateForm(id, formAll){
    const form = document.createElement('form');
    form.id = id;

    for (const field of formAll){
        createField(field, form);
    }

    const button = document.createElement('button');
    button.type = 'submit';                 /* ?? */
    button.innerText = 'Hozzaadas';
    form.appendChild(button);

    return form;
}

/**
 * Mező létrehozása a field leíró alapján
 * @param {FormField} field                 Valamiért nem ismeri fel a típust
 * @param {HTMLFormElement} form 
 * @returns {void}
 */
function createField(field, form){
    const mainDiv = createFieldWrapper(form);

    if (field.type === 'checkbox'){
        createCheckboxField(mainDiv, field);
        return;
    }
    else if (field.type === 'select'){
        createSelectField(mainDiv, field);
        return;
    }

    createInputField(mainDiv, field);
}

/**
 * Létrehoz egy input tag-et.
 * @param {HTMLDivElement} mainDiv 
 * @param {FormField} field                 Valamiért nem ismeri fel a típust
 * @returns {void}
 */
function createInputField(mainDiv, field){
    const label = document.createElement('label');
    label.innerText = field.label;
    label.htmlFor = field.id;
    mainDiv.appendChild(label);
    mainDiv.appendChild(document.createElement('br'));

    const input = document.createElement('input');
    input.id = field.id;
    input.name = field.name;
    mainDiv.appendChild(input);
    mainDiv.appendChild(document.createElement('br'));
}

/**
 * 
 * @param {HTMLFormElement} form
 * @returns {HTMLDivElement} 
 */
function createFieldWrapper(form){
    //  majd folyt. köv.
}

/**
 * Létrehoz egy select tag-ot.
 * @param {HTMLDivElement} mainDiv 
 * @param {FormField} field                 Valamiért nem ismeri fel a típust
 * @returns {void} 
 */
function createSelectField(mainDiv, field){
    const label = document.createElement('label');
    label.innerText = field.label;
    label.htmlFor = field.id;
    mainDiv.appendChild(label);
    mainDiv.appendChild(document.createElement('br'));

    /**
     * @type {HTMLSelectElement}
     */
    const select = document.createElement('select');
    select.id = field.id;
    select.name = field.name;
    mainDiv.appendChild(select);

    const option = document.createElement('option');
    option.innerHTML = "Válassz műszakot!";
    option.value = '';
    select.appendChild(option);

    const optionS = field.optionList ?? [];
    for (const opt of optionS){
        const o = document.createElement('option');
        o.innerText = opt.label;
        o.value = opt.value;
        select.appendChild(o);
    }
}

//  ...

//  itt kicsit megakadtam, nagyon nagy ez a feladat és belegabajodtam (volt, hogy mástól kértem segítséget egy függvénynél)
//  így is az első házi feladat push-om 2 órája volt
//  "A házi helyessége nekem nem probléma. Az a te problémád, ha nem szánod rá az időt" -> Be fogom felyezni, ma ennyi ment