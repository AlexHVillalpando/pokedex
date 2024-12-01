import React from 'react';

function Sprite({ pokemon, cryhandler, isFemale, isShiny }) {
	return (
		<div className="details__card-image-sprite">
			{isFemale ? (
				isShiny ? (
					<>
						{pokemon?.sprites?.other?.showdown?.front_shiny_female ? (
							<button onClick={cryhandler} className="cry-btn">
								<img
									src={pokemon?.sprites?.other?.showdown?.front_shiny_female}
									alt={pokemon?.name}
								/>
							</button>
						) : (
							<button onClick={cryhandler} className="cry-btn">
								<img
									src={pokemon?.sprites?.other?.home?.front_shiny_female}
									alt={pokemon?.name}
								/>
							</button>
						)}
					</>
				) : (
					<>
						{pokemon?.sprites?.other?.showdown?.front_female ? (
							<button onClick={cryhandler} className="cry-btn">
								<img
									src={pokemon?.sprites?.other?.showdown?.front_female}
									alt={pokemon?.name}
								/>
							</button>
						) : (
							<button onClick={cryhandler} className="cry-btn">
								<img
									src={pokemon?.sprites?.other?.home?.front_female}
									alt={pokemon?.name}
								/>
							</button>
						)}
					</>
				)
			) : isShiny ? (
				<>
					{pokemon?.sprites?.other?.showdown?.front_shiny ? (
						<button onClick={cryhandler} className="cry-btn">
							<img
								src={pokemon?.sprites?.other?.showdown?.front_shiny}
								alt={pokemon?.name}
							/>
						</button>
					) : (
						<button onClick={cryhandler} className="cry-btn">
							<img
								src={pokemon?.sprites?.other?.home?.front_shiny}
								alt={pokemon?.name}
							/>
						</button>
					)}
				</>
			) : (
				<>
					{pokemon?.sprites?.other?.showdown?.front_default ? (
						<button onClick={cryhandler} className="cry-btn">
							<img
								src={pokemon?.sprites?.other?.showdown?.front_default}
								alt={pokemon?.name}
							/>
						</button>
					) : (
						<button onClick={cryhandler} className="cry-btn">
							<img
								src={pokemon?.sprites?.other?.home?.front_default}
								alt={pokemon?.name}
							/>
						</button>
					)}
				</>
			)}
		</div>
	);
}

export { Sprite };
