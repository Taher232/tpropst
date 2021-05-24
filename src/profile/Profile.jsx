import './Profile.css';

export function Profile(props) {
	return <div className='profile'>
		{props.children}
		<p>Full name: {props.fullName}</p>
		<p>Bio: {props.bio}</p>
		<p>Profession: {props.profession}</p>
		{props.handleName}
	</div>;
}