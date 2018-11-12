/**
 * Wordpress dependencies
 */
const { Fragment } = wp.element;
 const { ServerSideRender } = wp.components;

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Render Block UI For Editor
 */

const GiveDonorWall = ( props ) => {
	const { attributes } = props;

	return (
		<Fragment>
			<Inspector { ... { ...props } } />
			<ServerSideRender block="give/donor-wall" attributes={ attributes } />
		</Fragment>
	);
};

export default GiveDonorWall;
