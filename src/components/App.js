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
		const { pathname } = window.location;

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

	this.route();

	// editorRoute((parent) => this.route(parent));
}
