import React from 'react';
import {
	Route,
	Link
} from 'react-router-dom';

function Topic({ match }){
	return (<h2>{match.params.topicId}</h2>);
}

export default function Topics(){
	return(
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to='/topics/rendering' >Rendering</Link>
				</li>
				<li>
					<Link to='/topics/components' >Components</Link>
				</li>
				<li>
					<Link to='/topics/props' >Props</Link>
				</li>
			</ul>

			<hr/>

			<Route path='/topics/:topicId' component={Topic} />
			<Route exact path='/topics' render={() => {
				return <h3>Please select a topic</h3>;
			}} />
			
		</div>
	);
}