<script lang="ts" context="module">
	import { reactiveContext } from '$lib/internal/helpers/reactiveContext';
	import { useActions } from '$lib/internal/helpers/useActions';

	import type { BaseProps } from '$lib/internal/types';

	export type Orientation = 'horizontal' | 'vertical';
	export type Direction = 'ltr' | 'rtl';
	export type ActivateOn = 'focus' | 'click';

	export type TabsRootProps = BaseProps<'div'> & {
		value?: string;
		orientation?: Orientation;
		dir?: Direction;
		activateOn?: ActivateOn;
	};

	type TabsRootContext = {
		value?: string;
		readonly activateOn?: ActivateOn;
		readonly orientation?: Orientation;
		readonly dir?: Direction;
	};

	const { getContext, setContext } = reactiveContext<TabsRootContext>();
	export const getTabsRootContext = getContext;
</script>

<script lang="ts">
	type $$Props = TabsRootProps;

	export let value: $$Props['value'] = undefined;
	// TODO: read from somewhere
	export let dir: $$Props['dir'] = 'ltr';
	export let orientation: $$Props['orientation'] = 'horizontal';
	export let activateOn: $$Props['activateOn'] = 'focus';

	const ctx = setContext({
		value: [value, (v) => (value = v)],
		activateOn: [activateOn],
		orientation: [orientation],
		dir: [dir],
	});
	$: ctx.update((old) => ({ ...old, value, activateOn, orientation, dir }));
</script>

<div {dir} data-orientation={orientation} {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>
