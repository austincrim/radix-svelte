<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers/useActions';
	import type { BaseProps } from '$lib/internal/types';

	export type ToggleRootProps = BaseProps<'button'> & {
		/** The controlled pressed state of the toggle. */
		pressed?: boolean;
		/** When true, prevents the user from interacting with the toggle. */
		disabled?: boolean;
	};
</script>

<script lang="ts">
	type $$Props = ToggleRootProps;

	export let pressed: $$Props['pressed'] = false;
	export let disabled: $$Props['disabled'] = false;
</script>

<button
	{disabled}
	on:click={() => (pressed = !pressed)}
	data-state={pressed ? 'on' : 'off'}
	data-disabled={disabled || undefined}
	{...$$restProps}
	use:useActions={$$restProps.use}
>
	<slot />
</button>
