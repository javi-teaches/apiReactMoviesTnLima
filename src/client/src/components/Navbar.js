import React from 'react';
import PropTypes from 'prop-types';

function Navbar (props) {
	let { title, links } = props;
	return (
		<nav>
			<h2>{ title } :D</h2>
			<ul>
				{
					links.map((link, idx) => {
						return (
							<li key={idx}>
								<a href={ link.url }> { link.txt } </a>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}

Navbar.propTypes = {
	title: PropTypes.string,
	links: PropTypes.array,
}

Navbar.defaultProps = {
	links: [],
}

export default Navbar;