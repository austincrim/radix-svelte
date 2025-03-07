// Function that dispatches and handles a custom event
export function handleAndDispatchCustomEvent<E extends CustomEvent, OriginalEvent extends Event>(
	name: string,
	handler: ((event: E) => void) | undefined,
	detail: { originalEvent: OriginalEvent } & (E extends CustomEvent<infer D> ? D : never)
) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, { cancelable: true, detail });
	if (handler) target.addEventListener(name, handler as EventListener, { once: true });

	console.log(target);
	target.dispatchEvent(event);
}
