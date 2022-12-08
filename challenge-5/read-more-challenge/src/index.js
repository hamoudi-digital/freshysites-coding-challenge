/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { URLInput } from '@wordpress/block-editor';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';

/*
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


registerBlockType( metadata.name, {

	//attributes for saving url and text data
	attributes: {
		url: {
			type: 'string',
		},
		text: {
			type: 'string',
		},
	},

	// displays read more challenge block in editor 
	edit( { className, attributes, setAttributes } ) {
		// a boolean state to determine if modal is open or closed
		const [ isOpen, setOpen ] = useState( false );

		// opens the modal when called
		const openModal = () => setOpen( true );

		// closes the modal when called
		const closeModal = () => setOpen( false );

		return (
			<div>
				{// If attributes are not defined, it shows button prompting the modal. If attributes are defined, then it shows the Read More link visually 
				(attributes.url == undefined || attributes.text == undefined) ?
					(<Button variant="secondary" onClick={ openModal }>
						Select Post
					</Button>)
					:
					(<p onClick={ openModal }>Read More: <a href={ attributes.url }>{ attributes.text }</a></p> )
				}
				{ // If isOpen is true (prompted by the defined click events) the this modal pops up with the URL input field nested.
				isOpen && (
					<Modal title="Select Post:" onRequestClose={ closeModal } >
						<URLInput
							className={ className }
							value={ attributes.url }
							onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
						/>
					</Modal>
					) 
				}
			</div>
		);
	},

	// displays read more link in frontend with attributes from edit function
	save( { attributes } ) {
		return <p>Read More: <a href={ attributes.url }>{ attributes.text }</a></p>;
	}
} );
