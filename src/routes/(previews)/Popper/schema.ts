import type { Popper } from '$lib/internal/components';
import type { PreviewSchema } from '../helpers';
import example from './example.svelte';
import code from './example.svelte?raw';

export const schema = {
	title: 'Popper',
	description: 'An interactive component which expands/collapses a panel.',
	example,
	code,
	meta: {
		Root: {},
		Anchor: {},
		Arrow: {},
		Content: {
			props: {
				side: {
					type: 'enum',
					options: ['top', 'right', 'bottom', 'left'],
					default: 'bottom',
				},
				sideOffset: {
					type: 'number',
					default: 0,
				},
				align: {
					type: 'enum',
					options: ['start', 'center', 'end'],
					default: 'center',
				},
				alignOffset: {
					type: 'number',
					default: 0,
				},
				arrowPadding: {
					type: 'number',
					default: 0,
				},
				// collisionBoundary: {
				//   type: 'enum',
				// },
				collisionPadding: {
					type: 'number',
					default: 0,
				},
				sticky: {
					type: 'enum',
					options: ['partial', 'always'],
					default: 'partial',
				},
				hideWhenDetached: {
					type: 'boolean',
					default: false,
				},
				avoidCollisions: {
					type: 'boolean',
					default: true,
				},
			},
		},
	},
} satisfies PreviewSchema<typeof Popper>;
