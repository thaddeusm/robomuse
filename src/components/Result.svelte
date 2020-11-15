<script>
	import Robot from './../icons/Robot.svelte';
</script>

<div>
	<aside id="response">
		<h2 id="responseText">tomato</h2>
	</aside>
	<section id="robot">
		<Robot width={'10'} height={'10'} />
	</section>
</div>

<style>
	@media screen and (max-width: 450px) {
		div {
			grid-template-columns: 50% 50%;
			grid-template-areas: "robot response";
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
			grid-template-columns: 25% 20% 20% 25%;
			grid-template-areas: ". robot response .";
		}
	}

	div {
		display: grid;
	}

	#response {
		grid-area: response;
	}

	#responseText {
		text-align: center;
		word-break: break-word;
	}

	#robot {
		grid-area: robot;
		text-align: right;
	}
</style>