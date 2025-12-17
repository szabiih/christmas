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