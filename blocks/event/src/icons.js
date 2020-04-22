/**
 * WordPress dependencies
 */
import { SVG, Rect, Path } from '@wordpress/components';

export const Icon = () => (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<Path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
	</SVG>
);

export const EditImageIcon = () => (
	<SVG width={ 20 } height={ 20 } viewBox="0 0 20 20">
		<Rect x={ 11 } y={ 3 } width={ 7 } height={ 5 } rx={ 1 } />
		<Rect x={ 2 } y={ 12 } width={ 7 } height={ 5 } rx={ 1 } />
		<Path d="M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z" />
		<Path d="M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z" />
	</SVG>
);
