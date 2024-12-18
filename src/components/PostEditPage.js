import PostEditHeader from './PostEditHeader.js';
import PostEditBody from './PostEditBody.js';
import { request } from '../api/api.js';

export default function PostEditPage({ $target, initialState }) {
	const $postEditPage = document.createElement('section');
	$postEditPage.id = 'right';

	this.state = initialState;

	const editHeader = new PostEditHeader({
		$target: $postEditPage,
		initialState,
	});
	const editBody = new PostEditBody({
		$target: $postEditPage,
		initialState,
	});

	this.setState = async ({ documentId, parentId }) => {
		try {
			const nextState = await request(`/${documentId}`);
			const parentState = await request(`/${parentId}`);
			this.state = { documentId, parentId }; // 상태 업데이트
			editHeader.setState(parentState);
			editBody.setState(nextState);
		} catch (error) {
			console.error('데이터 요청 중 오류 발생:', error);
		}
	};

	this.getDocumentData = () => {
		const title = $postEditPage.querySelector('.document-title');
		const content = $postEditPage.querySelector('.document-content');

		console.log('제목:', title?.value);
		console.log('내용:', content?.value);
	};

	this.render = () => {
		$target.prepend($postEditPage);

		// 렌더링 후 버튼 이벤트 리스너 추가
		const saveButton = $postEditPage.querySelector('.save-btn');
		if (saveButton) {
			saveButton.addEventListener('click', () => {
				console.log('저장 버튼 클릭!');
				this.getDocumentData();
			});
		}
	};

	this.render();
}
