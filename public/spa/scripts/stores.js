/* generated by Svelte v3.29.4 */
import { SvelteComponent, init, safe_not_equal } from '/spa/web_modules/svelte/internal/index.js';

import { writable } from '/spa/web_modules/svelte/store/index.js';
const count = writable(0);

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, null, safe_not_equal, {});
	}
}

export default Component;
export { count };