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

	this.render = () => {
		$target.prepend($postEditPage);
		this.addEvents();
	};

	this.addEvents = () => {
		$postEditPage.addEventListener('click', async (event) => {
			const saveButton = event.target.closest('.save-btn');
			if (saveButton) {
				console.log('저장 버튼 클릭!');

				const title = $postEditPage.querySelector('.document-title').textContent.trim();
				const content = $postEditPage.querySelector('.document-content').textContent.trim();

				if (!title || !content) {
					console.error('문서 제목 또는 내용 요소를 찾을 수 없습니다.');
					return;
				}

				const editedData = { title, content };
				console.log(editedData);

				// try {
				// 	await request(`/${this.state.documentId}`, {
				// 		method: 'PUT',
				// 		body: JSON.stringify(editedData),
				// 	});
				// } catch (error) {
				// 	console.log(error);
				// }
			}
		});
	};

	this.render();
}
