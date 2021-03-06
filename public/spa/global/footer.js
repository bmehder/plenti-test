/* generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '/spa/web_modules/svelte/internal/index.js';

import { makeTitle } from '/spa/global/../scripts/make_title.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (9:4) {#each allContent as content}
function create_each_block(ctx) {
	let a;
	let t_value = makeTitle(/*content*/ ctx[1].filename) + "";
	let t;
	let a_href_value;

	return {
		c() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*content*/ ctx[1].path);
			attr(a, "class", "svelte-c5bvyv");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*allContent*/ 1 && t_value !== (t_value = makeTitle(/*content*/ ctx[1].filename) + "")) set_data(t, t_value);

			if (dirty & /*allContent*/ 1 && a_href_value !== (a_href_value = /*content*/ ctx[1].path)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

function create_fragment(ctx) {
	let footer;
	let div;
	let span;
	let t0;
	let t1;
	let each_value = /*allContent*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			footer = element("footer");
			div = element("div");
			span = element("span");
			t0 = text("All content:");
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			div = claim_element(footer_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			span = claim_element(div_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "All content:");
			span_nodes.forEach(detach);
			t1 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			footer_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "svelte-c5bvyv");
			attr(div, "class", "container");
			attr(footer, "class", "svelte-c5bvyv");
		},
		m(target, anchor) {
			insert(target, footer, anchor);
			append(footer, div);
			append(div, span);
			append(span, t0);
			append(div, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*allContent, makeTitle*/ 1) {
				each_value = /*allContent*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(footer);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allContent } = $$props;

	$$self.$$set = $$props => {
		if ("allContent" in $$props) $$invalidate(0, allContent = $$props.allContent);
	};

	return [allContent];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { allContent: 0 });
	}
}

export default Component;