<script>
	import Result from './components/Result.svelte';
	import Form from './components/Form.svelte';

	let results = [];

	function handleResponse(e) {
		results = e.detail.res;
	}
</script>

<div id="container">
	<header>
		<h2 id="appName">Robomuse</h2>
		<h6 id="author">
			made with ❤️ by <a href="https://thaddeus-mccleary.vercel.app/" target="_blank">Thaddeus</a>
		</h6>
	</header>
	<main>
		<section id="result">
			<Result {results} />
		</section>
		<section id="inputArea">
			<Form on:response-received={handleResponse} />
		</section>
	</main>
	<footer>
		<h6>
			powered by <a href="https://www.datamuse.com/" target="_blank">Datamuse</a>
		</h6>
	</footer>
</div>

<style>
@media screen and (max-width: 450px) {
	main {
		grid-template-areas: 
			"inputArea"
			"result";
	}
}	

@media screen and (min-width: 451px) {
	main {
		grid-template-areas: 
			"result"
			"inputArea";
	}

	#inputArea {
		align-self: flex-start;
	}
}


#container {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 10% 80% 10%;
	grid-template-areas: 
		"header"
		"main"
		"footer";
}

header {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "appName author";
	align-items: center;
	padding: 0 1rem;
	grid-area: header;
}

#appName {
	grid-area: appName;
}

#author {
	grid-area: author;
	text-align: right;
}

main {
	grid-area: main;
	display: grid;
	grid-template-rows: 1fr 1fr;
	align-items: center;
}

#result {
	grid-area: result;
}

#inputArea {
	grid-area: inputArea;
}

footer {
	display: grid;
	align-items: center;
	padding: 0 2rem;
	grid-area: footer;
	text-align: center;
}
</style>
