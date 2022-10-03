import { Component } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoForm from './VideoForm';

export default class Navigator extends Component {
	state = {
		currentPage: 'list',
		params: {},
	};

	constructor(...args) {
		super(...args);
		this.navigate = this.navigate.bind(this);
	}

	render() {
		switch (this.state.currentPage) {
			case 'list':
				return (
					<VideoList navigate={this.navigate} params={this.state.params} />
				);
			case 'detail':
				return (
					<VideoDetail navigate={this.navigate} params={this.state.params} />
				);
			case 'form':
				return (
					<VideoForm navigate={this.navigate} params={this.state.params} />
				);
		}
		return null;
	}

	navigate(newPage, newParams = {}) {
		this.setState({ currentPage: newPage, params: newParams });
	}
}
