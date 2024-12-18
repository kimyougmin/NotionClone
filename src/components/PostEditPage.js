import PostEditHeader from './PostEditHeader.js';
import PostEditBody from './PostEditBody.js';
import { request } from '../api/api.js';

export default function PostEditPage({ $target, initialState, route }) {
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

	// route();
	this.setState = async ({ documentId, parentId }) => {
		try {
			this.state = { documentId, parentId }; // 상태 업데이트

			const nextState = await request(`/${documentId}`);
			editBody.setState(nextState);

			// parentId가 존재하면 요청 보내기
			if (parentId) {
				const parentState = await request(`/${parentId}`);
				editHeader.setState(parentState);
			}
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
				const title = $postEditPage.querySelector('.document-title').textContent.trim();
				const content = $postEditPage.querySelector('.document-content').textContent.trim();

				if (!title || !content) {
					console.error('문서 제목 또는 내용 요소를 찾을 수 없습니다.');
					return;
				}

				const editedData = { title, content };


				try {
					await request(`/${this.state.documentId}`, {
						method: 'PUT',
						body: JSON.stringify(editedData),
					});
				} catch (error) {
					console.error('내용이 전송되지 않았습니다.');
				}
			}
		});
	};

	this.render();
}
