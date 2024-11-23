function Home() {
	return (
		<div className="home">
			<h1>POKEDEX</h1>
			<h2>Bienvenido entrenador</h2>
			<p>Para comenzar, introduce tu nombre</p>
			<div>
				<input type="text" placeholder="Tu nombre..." />
				<button>Comenzar</button>
			</div>
		</div>
	);
}

export { Home };
