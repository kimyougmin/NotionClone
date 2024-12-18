import { PostListUl } from '../utilly/PostListUl.js';

export default function PostList({ $target, initialState, route }) {
	const $postsList = document.createElement('div');
	$postsList.className = 'left-main';
	$target.appendChild($postsList);

	this.state = initialState;

	this.setState = (nState) => {
		this.state = nState;
		this.render();
	};

	this.prepend = (items) => {
		this.setState([...items, ...this.state]);
	};

	this.render = () => {
		$postsList.innerHTML = `
            <div class="search-box">
                <input type="text" />
                <button>
                    <img src="src/public/search.png" alt="돋보기 아이콘" />
                </button>
            </div>
            ${PostListUl(this.state)}
        `;
		this.addEvents();
	};

	this.addEvents = () => {
		// 모든 li 요소에 이벤트 리스너 추가
		const listItems = $postsList.querySelectorAll('.sub-document-item');
		listItems.forEach((item) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				// 모든 li의 배경색 초기화
				listItems.forEach((li) => {
					li.style.backgroundColor = 'white';
				});

				// 클릭한 li의 배경색 변경
				const clickedItem = event.currentTarget;

				// url에 아이디 추가
				const temp = clickedItem.className.split(' ');
				const id = temp[temp.length - 1];
				history.pushState({ id, state: this.state }, null, id);
				route();
				clickedItem.style.backgroundColor = '#f3f3f3';
			});
		});

		// 토글 버튼 이벤트
		const toggleButtons = $postsList.querySelectorAll('.top-document-left button');
		toggleButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				const parentElement = event.target.closest('.top-document-info');
				const subDocument = parentElement.nextElementSibling;

				// 상위 페이지 화살표 클릭 시 회전 애니메이션 추가
				const arrowElement = event.target.closest('.top-document-left');
				arrowElement.classList.toggle('active');

				if (subDocument && subDocument.classList.contains('sub-document')) {
					const isHidden = subDocument.style.display === 'none';
					subDocument.style.display = isHidden ? 'block' : 'none';
				}
			});
		});
	};

	this.render();
}
