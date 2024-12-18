import PostIndexPage from './PostIndexPage.js';
import PostEditPage from './PostEditPage.js';
import { request } from '../api/api.js';

export default function App({ $target }) {
	const postIndexPage = new PostIndexPage({
		$target,
	});

	const postEditPage = new PostEditPage({
		$target,
		initialState: {
			documentId: null,
			title: 'test',
			content: 'test content',
			document: [],
		},
	});

	this.render = () => {
		postIndexPage.render();
	};

	this.render();

	this.route = async (parent) => {
		// const { pathname } = window.location;
		// 임시 pathname
		const pathname = `/147046`;
		if (pathname === '/') {
			// removeDiv(".edit-page");
			// mainPage.render();
		} else {
			// removeDiv(".main-page");
			const [, id] = pathname.split('/');
			await postEditPage.setState({
				documentId: id,
				parentId: parent,
			});
		}
	};

	// test용 부모 아이디
	this.route(147041);

	// editorRoute((parent) => this.route(parent));
}
