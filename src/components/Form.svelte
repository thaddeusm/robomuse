<script>
	
</script>

<section id="form">
	<div id="top">
		<span>I need</span>
		<select>
			<option value="a word synonomous with">
				a word synonomous with
			</option>
			<option value="a word that sounds like">
				a word that sounds like
			</option>
			<option value="a word that rhymes with">
				a word that rhymes with
			</option>
			<option value="an adjective that describes">
				an adjective that describes
			</option>
			<option value="a noun often described as">
				a noun often described as
			</option>
			<option value="a word that goes with">
				a word that goes with
			</option>
		</select>
	</div>
	<div id="bottom">
		<input type="text">
		<button>search</button>
	</div>
</section>

<style>
	@media screen and (max-width: 450px) {
		#form {

		}

		input {
			width: 200px;
		}
	}	

	@media screen and (min-width: 451px) {
		#form {
			border-radius: var(--radius);
		}

		input {
			width: 250px;
		}
	}

	#form {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: 
			"top"
			"bottom";
		grid-row-gap: 2rem;
		padding: 2rem 0;
		align-items: center;
		text-align: center;
		max-width: 500px;
		margin: 0 auto;
	}

	span {
		font-size: 1.1rem;
		margin-right: .25rem;
	}

	#top {
		grid-area: top;
	}

	#bottom {
		grid-area: bottom;
	}

	input {
		margin-right: .25rem;
	}
</style>