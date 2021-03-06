/* generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.js';

import Uses from '/spa/content/../components/source.js';

// Svelte store example:
import { count } from '/spa/content/../scripts/stores.js';

import Incrementer from '/spa/content/../components/incrementer.js';
import Decrementer from '/spa/content/../components/decrementer.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i].name;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (20:7) {#if author}
function create_if_block_3(ctx) {
	let t0;
	let t1;

	return {
		c() {
			t0 = text("Written by ");
			t1 = text(/*author*/ ctx[2]);
		},
		l(nodes) {
			t0 = claim_text(nodes, "Written by ");
			t1 = claim_text(nodes, /*author*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*author*/ 4) set_data(t1, /*author*/ ctx[2]);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (20:43) {#if date}
function create_if_block_2(ctx) {
	let t0;
	let t1;

	return {
		c() {
			t0 = text(" on ");
			t1 = text(/*date*/ ctx[3]);
		},
		l(nodes) {
			t0 = claim_text(nodes, " on ");
			t1 = claim_text(nodes, /*date*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*date*/ 8) set_data(t1, /*date*/ ctx[3]);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (23:2) {#each body as paragraph}
function create_each_block_1(ctx) {
	let p;
	let raw_value = /*paragraph*/ ctx[13] + "";

	return {
		c() {
			p = element("p");
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*body*/ 2 && raw_value !== (raw_value = /*paragraph*/ ctx[13] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

// (28:0) {#if store}
function create_if_block_1(ctx) {
	let h3;
	let t0;
	let t1;
	let t2;
	let incrementer;
	let t3;
	let decrementer;
	let current;
	incrementer = new Incrementer({});
	decrementer = new Decrementer({});

	return {
		c() {
			h3 = element("h3");
			t0 = text("The count is ");
			t1 = text(/*count_value*/ ctx[8]);
			t2 = space();
			create_component(incrementer.$$.fragment);
			t3 = space();
			create_component(decrementer.$$.fragment);
		},
		l(nodes) {
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "The count is ");
			t1 = claim_text(h3_nodes, /*count_value*/ ctx[8]);
			h3_nodes.forEach(detach);
			t2 = claim_space(nodes);
			claim_component(incrementer.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(decrementer.$$.fragment, nodes);
		},
		m(target, anchor) {
			insert(target, h3, anchor);
			append(h3, t0);
			append(h3, t1);
			insert(target, t2, anchor);
			mount_component(incrementer, target, anchor);
			insert(target, t3, anchor);
			mount_component(decrementer, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*count_value*/ 256) set_data(t1, /*count_value*/ ctx[8]);
		},
		i(local) {
			if (current) return;
			transition_in(incrementer.$$.fragment, local);
			transition_in(decrementer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(incrementer.$$.fragment, local);
			transition_out(decrementer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h3);
			if (detaching) detach(t2);
			destroy_component(incrementer, detaching);
			if (detaching) detach(t3);
			destroy_component(decrementer, detaching);
		}
	};
}

// (34:0) {#if components}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*components*/ ctx[6];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*allComponents, components*/ 192) {
				each_value = /*components*/ ctx[6];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (35:1) {#each components as { name }}
function create_each_block(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*allComponents*/ ctx[7]["layout_components_" + /*name*/ ctx[10] + "_svelte"];

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (switch_value !== (switch_value = /*allComponents*/ ctx[7]["layout_components_" + /*name*/ ctx[10] + "_svelte"])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let em;
	let if_block0_anchor;
	let t2;
	let div;
	let t3;
	let t4;
	let t5;
	let uses;
	let t6;
	let p1;
	let a;
	let t7;
	let current;
	let if_block0 = /*author*/ ctx[2] && create_if_block_3(ctx);
	let if_block1 = /*date*/ ctx[3] && create_if_block_2(ctx);
	let each_value_1 = /*body*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let if_block2 = /*store*/ ctx[4] && create_if_block_1(ctx);
	let if_block3 = /*components*/ ctx[6] && create_if_block(ctx);
	uses = new Uses({ props: { content: /*content*/ ctx[5] } });

	return {
		c() {
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			p0 = element("p");
			em = element("em");
			if (if_block0) if_block0.c();
			if_block0_anchor = empty();
			if (if_block1) if_block1.c();
			t2 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			if (if_block2) if_block2.c();
			t4 = space();
			if (if_block3) if_block3.c();
			t5 = space();
			create_component(uses.$$.fragment);
			t6 = space();
			p1 = element("p");
			a = element("a");
			t7 = text("Back home");
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			em = claim_element(p0_nodes, "EM", {});
			var em_nodes = children(em);
			if (if_block0) if_block0.l(em_nodes);
			if_block0_anchor = empty();
			if (if_block1) if_block1.l(em_nodes);
			em_nodes.forEach(detach);
			p0_nodes.forEach(detach);
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			t3 = claim_space(nodes);
			if (if_block2) if_block2.l(nodes);
			t4 = claim_space(nodes);
			if (if_block3) if_block3.l(nodes);
			t5 = claim_space(nodes);
			claim_component(uses.$$.fragment, nodes);
			t6 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			a = claim_element(p1_nodes, "A", { href: true });
			var a_nodes = children(a);
			t7 = claim_text(a_nodes, "Back home");
			a_nodes.forEach(detach);
			p1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", "/");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, p0, anchor);
			append(p0, em);
			if (if_block0) if_block0.m(em, null);
			append(em, if_block0_anchor);
			if (if_block1) if_block1.m(em, null);
			insert(target, t2, anchor);
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert(target, t3, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert(target, t4, anchor);
			if (if_block3) if_block3.m(target, anchor);
			insert(target, t5, anchor);
			mount_component(uses, target, anchor);
			insert(target, t6, anchor);
			insert(target, p1, anchor);
			append(p1, a);
			append(a, t7);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (/*author*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.m(em, if_block0_anchor);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*date*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					if_block1.m(em, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*body*/ 2) {
				each_value_1 = /*body*/ ctx[1];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (/*store*/ ctx[4]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*store*/ 16) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(t4.parentNode, t4);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*components*/ ctx[6]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty & /*components*/ 64) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(t5.parentNode, t5);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			const uses_changes = {};
			if (dirty & /*content*/ 32) uses_changes.content = /*content*/ ctx[5];
			uses.$set(uses_changes);
		},
		i(local) {
			if (current) return;
			transition_in(if_block2);
			transition_in(if_block3);
			transition_in(uses.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(if_block2);
			transition_out(if_block3);
			transition_out(uses.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(p0);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (detaching) detach(t2);
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t3);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach(t4);
			if (if_block3) if_block3.d(detaching);
			if (detaching) detach(t5);
			destroy_component(uses, detaching);
			if (detaching) detach(t6);
			if (detaching) detach(p1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props,
		{ body } = $$props,
		{ author } = $$props,
		{ date } = $$props,
		{ store } = $$props,
		{ content } = $$props;

	let count_value;

	const unsubscribe = count.subscribe(value => {
		$$invalidate(8, count_value = value);
	});

	let { components } = $$props, { allComponents } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("body" in $$props) $$invalidate(1, body = $$props.body);
		if ("author" in $$props) $$invalidate(2, author = $$props.author);
		if ("date" in $$props) $$invalidate(3, date = $$props.date);
		if ("store" in $$props) $$invalidate(4, store = $$props.store);
		if ("content" in $$props) $$invalidate(5, content = $$props.content);
		if ("components" in $$props) $$invalidate(6, components = $$props.components);
		if ("allComponents" in $$props) $$invalidate(7, allComponents = $$props.allComponents);
	};

	return [
		title,
		body,
		author,
		date,
		store,
		content,
		components,
		allComponents,
		count_value
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 0,
			body: 1,
			author: 2,
			date: 3,
			store: 4,
			content: 5,
			components: 6,
			allComponents: 7
		});
	}
}

export default Component;