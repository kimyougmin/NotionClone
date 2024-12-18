import { PostListUl } from '../utilly/PostListUl.js';

export default function PostList({ $target, initialState, route }) {
	const $postsList = document.createElement('div');
	$postsList.className = 'left-main';
	$target.appendChild($postsList);

	this.state = initialState;
	this.initialState = initialState;
	this.keyword = '';

	this.setKeywordState = (newKeyword) => {
		this.keyword = newKeyword;
	};

	// 본체
	this.prepend = (items) => {
		this.initialState = [...items, ...this.initialState];
		this.setState([...items, ...this.state]);
	};

	this.setState = (nState) => {
		this.state = nState;
		this.render();
	};

	this.render = () => {
		$postsList.innerHTML = `
            <div class="search-box">
                <input type="text" id="input" value="${this.keyword}"/>
                <button id="button">
                    <img src="src/public/search.png" alt="돋보기 아이콘" />
                </button>
            </div>
            ${PostListUl(this.state)}
        `;
		this.addEvents();
	};

	this.setUrl = (element) => {
		const temp = element.className.split(' ');
		const elementName = temp[0];
		const id = temp[temp.length - 1];
		history.pushState({ id, state: this.state }, null, id);

		// parentId를 전달해주어야 함함
		if (elementName === 'top-document-info') {
			route(id);
		}

		route();
	};

	this.addEvents = () => {
		// ** 키워드 검색 기능 **
		//input 이벤트로 keyword 업데이트

		const $input = $postsList.querySelector('#input');
		if ($input) {
			$input.addEventListener('input', (e) => {
				this.setKeywordState(e.target.value);
			});
		}

		const $button = $postsList.querySelector('#button');
		if ($button) {
			$button.addEventListener('click', () => {
				if (this.keyword === '') {
					this.setState(this.initialState);
				} else {
					const filterData = (data, keyword) => {
						return data
							.map((item) => {
								// 상위 페이지 제목을 먼저 검사합니다.
								if (item.title && item.title.includes(keyword)) {
									// 제목이 null이 아니며, keyword를 포함하면
									// 자식 페이지 documents를 재귀호출
									const filteredDocuments = filterData(
										item.documents ? item.documents : [],
										keyword
									);
									return {
										...item,
										documents: filteredDocuments, // 필터링된 documents만 포함
									};
								}

								// 제목은 키워드를 포함하지 않지만 자식요소는 포함하는 경우
								// 자식요소의 documents로 재귀호출
								const filteredDocuments = filterData(item.documents ? item.documents : [], keyword);
								// 키워드를 포함한 자식요소가 있다면 현재 item과 필터링된 자식요소만 포함하여 반환.
								if (filteredDocuments.length > 0) {
									return {
										...item,
										documents: filteredDocuments,
									};
								}

								// 제목에도 키워드가 없고, documents에도 키워드가 없으면 null 반환
								return null;
							})
							.filter((item) => item !== null); // null 값 제거
					};
					this.setState(filterData(this.state, this.keyword));
					this.setKeywordState('');
					this.render();
				}
			});
		}
		// ** 키워드 검색 기능 **

		// 모든 li 요소에 이벤트 리스너 추가
		const listItems = $postsList.querySelectorAll('.sub-document-item');
		listItems.forEach((item) => {
			item.addEventListener('click', (event) => {
				// 모든 li의 배경색 초기화
				listItems.forEach((li) => {
					li.style.backgroundColor = 'white';
				});

				// 클릭한 li의 배경색 변경
				const clickedItem = event.currentTarget;

				// 하위 페이지 클릭 시 url에 id 추가
				this.setUrl(clickedItem);

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

				// 상위 페이지 클릭 시 url에 id 추가
				this.setUrl(parentElement);

				if (subDocument && subDocument.classList.contains('sub-document')) {
					const isHidden = subDocument.style.display === 'none';
					subDocument.style.display = isHidden ? 'block' : 'none';
				}
			});
		});
	};

	this.render();
}
