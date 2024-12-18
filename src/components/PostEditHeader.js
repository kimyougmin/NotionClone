export default function PostEditHeader({ $target, initialState }) {
	const $editHeader = document.createElement('div');
	$editHeader.className = 'document-info-container';
	$target.appendChild($editHeader);

	this.state = initialState;

	this.setState = (nState) => {
		this.state = nState;
		this.render();
	};

	this.render = () => {
		$editHeader.innerHTML = `<h3>${this.state.title}</h3>
             <div class="btn-container">
                 <button class="save-btn">
                     <img src="src/public/save.png" alt="저장 이미지" />
                     <span>저장</span>
                 </button>
                <button class="delete-btn">
                    <img src="src/public/trash.png" alt="삭제 이미지" />
                    <span>삭제</span>
                </button>
            </div>
            `;
	};

	this.render();
}
