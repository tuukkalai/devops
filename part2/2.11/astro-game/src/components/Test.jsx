import React from 'react';

export default function Test({title}) {
	let variable = 1;
	return (
		<div>
			Hello {title ? title : 'you'}
		</div>
	)
}