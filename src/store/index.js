import {
	createStore
} from "vuex";
import {
	createUUID
} from '../assets/createUUID';

const defaultNotificationOptions = {
	type: "error",
	title: "Test Notification",
	message: "Message was provided...",
	autoClose: true,
	duration: 5
};

export const store = createStore({
	state() {
		return {
			notifications: [],

		}


	},
	mutations: {
		createNotification(state, payload) {
			const _options = Object.assign({
				...defaultNotificationOptions
			}, payload);

			state.notifications.push(
				...[{
					id: createUUID(),
					..._options,
				}]
			);
		},
		removeNotifications(state, payload) {
			const index = state.notifications.findIndex(item => item.id === payload);
			if (index !== -1) state.notifications.splice(index, 1);
		},
	},
	getters: {
		stopBodyOverflow(_) {
			return document && document.body.classList.add(...["hide-overflow"]);
		},
		allowBodyOverflow(_) {
			return document && document.body.classList.remove(...["hide-overflow"]);
		},
	}
});