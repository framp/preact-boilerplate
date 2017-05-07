import store from '../../store'

export const increaseCounter = (user) =>
	store.action((state) =>
		Object.assign({}, state, {
			counter: Object.assign({}, state.counter, {
				[user]: (state.counter[user] || 0) + 1
			})
		}));

export const updateTime = store.action((state) =>
	Object.assign({}, state, { time: new Date().toLocaleString() }));

setInterval(updateTime, 1000);
