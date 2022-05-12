const addBtn = document.querySelector('.add');

const deleteBtns = document.getElementsByClassName('delete-note');
// live collections!
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const notePanel = document.querySelector('.note-panel');
const noteArea = document.querySelector('.note-area');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('#error');

let selectedValue;

let cardID = 0;
