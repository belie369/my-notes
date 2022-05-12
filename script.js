const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.delete-all');

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

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
