import { h, Component } from 'preact';
import style from './style.less';
import { increaseCounter } from './actions';

export default ({ user, time, counter }) =>
	<div class={style.profile}>
		<h1>Profile: {user}</h1>
		<p>This is the user profile for a user named {user}.</p>

		<div>Current time: {time}</div>
		<div>Counter {counter[user] || 0}</div>
		<button onClick={increaseCounter(user)}>Increase Counter</button>
	</div>;
