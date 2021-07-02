const addButton= document.querySelector('.addButton');
var inputValue= document.querySelector('.input');
const container= document.querySelector('.container');

class item
{
	constructor(name)
	{
		//Here item division will be created
		this.createItem(name);
	}

	createItem(name)
	{
		let itemBox=document.createElement('div');        //input division (inputBox) creation
		itemBox.classList.add('item');

		let input=document.createElement('input');       //input line creation
		input.type="text";
		input.value=name;
		input.disabled=true;
		input.classList.add('item_input');

		let editButton=document.createElement('button');   //editButton creation
		editButton.classList.add('editButton');
		editButton.innerHTML="EDIT";

		editButton.addEventListener('click', () => this.edit(input));

		let removeButton=document.createElement('button'); //removeButton creation
		removeButton.classList.add('removeButton');
		removeButton.innerHTML="REMOVE";

		removeButton.addEventListener('click', () => this.remove(itemBox));

		container.appendChild(itemBox);    //adding itemBox in container
		itemBox.appendChild(input);        //adding input line, edit, remove button in inputBox
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

	}

	edit(input)
	{
		input.disabled= !input.disabled;
	}

	remove(itemBox)
	{
		itemBox.parentNode.removeChild(itemBox);
	}
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13)
	{
		check();
	} 
})

function check()
{
	if(inputValue.value != "")
	{
		new item(inputValue.value);
		inputValue.value="";
	}
}

// new item("sport");