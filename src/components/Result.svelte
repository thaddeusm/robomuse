<script>
	import Robot from './../icons/Robot.svelte';
	import RightArrow from './../icons/RightArrow.svelte';
	import LeftArrow from './../icons/LeftArrow.svelte';

	export let results;
	let index;

	$: {
		if (results.length > 0) {
			index = 0;
		}
	}

	function increment() {
		index++;
	}

	function decrement() {
		index--;
	}
</script>

<div>
	<aside id="response">
		<div id="responseBubble">
			<div id="left">
				{#if index > 0 && results.length > 0}
					<button on:click={decrement}>
						<RightArrow width={'1'} height={'1'} />
					</button>
				{/if}
			</div>
			<h2 id="responseText">
				{#if results.length > 0}
					{results[index].word}
				{:else}
					...
				{/if}
			</h2>
			<div id="right">
				{#if results.length > 0 && index < results.length - 1}
					<button on:click={increment}>
						<LeftArrow width={'1'} height={'1'} />
					</button>
				{/if}
			</div>
		</div>
	</aside>
	<section id="robot">
		<Robot width={'10'} height={'10'} />
	</section>
</div>

<style>
	@media screen and (max-width: 450px) {
		div {
			grid-template-columns: 5% 40% 50% 5%;
			grid-template-areas: ". robot response .";
		}
	}	

	@media screen and (min-width: 451px) and (max-width: 800px) {
		div {
			grid-template-columns: 10% 35% 35% 10%;
			grid-template-areas: ". robot response .";
		}
	}

	@media screen and (min-width: 801px) {
		div {
			grid-template-columns: 30% 16% 19% 30%;
			grid-template-areas: ". robot response .";
		}
	}

	div {
		display: grid;
	}

	#response {
		grid-area: response;
	}

	#responseBubble {
		width: 100%;
		display: grid;
		grid-template-columns: 15% 70% 15%;
		grid-template-areas: "left responseText right";
		align-items: center;
		border-radius: var(--radius);
		border-bottom-left-radius: 0;
		padding: .75rem 0;
	}

	#left {
		grid-area: left;
		text-align: left;
	}

	#responseText {
		text-align: center;
		word-break: break-word;
		grid-area: responseText;
	}

	#right {
		grid-area: right;
		text-align: right;
	}

	#robot {
		grid-area: robot;
		text-align: right;
	}

	button {
		display: block;
		width: 100%;
		text-align: center;
		height: 100%;
	}
</style>