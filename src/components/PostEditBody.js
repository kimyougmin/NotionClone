export default function PostEditBody({ $target, initialState }) {
	const $editBody = document.createElement('div');
	$editBody.className = 'document-edit';
	$target.appendChild($editBody);

	this.state = initialState;

	this.setState = (nState) => {
		this.state = nState;
		this.render();
	};

	this.render = () => {
		$editBody.innerHTML = `
            <blockquote class="document-title" contenteditable="true">${this.state.title}</blockquote>
            <blockquote class="document-content" contenteditable="true">
            ${this.state.content}
            </blockquote>
            `;
	};

	this.render();
	let ddde
}
