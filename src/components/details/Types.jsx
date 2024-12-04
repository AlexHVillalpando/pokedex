import {
	Bicho,
	Siniestro,
	Dragón,
	Eléctrico,
	Hada,
	Lucha,
	Fuego,
	Volador,
	Fantasma,
	Planta,
	Tierra,
	Hielo,
	Normal,
	Veneno,
	Psíquico,
	Roca,
	Acero,
	Agua,
} from '../../assets/img/icons';

const icoTipos = {
	Bicho: Bicho,
	Siniestro: Siniestro,
	Dragón: Dragón,
	Eléctrico: Eléctrico,
	Hada: Hada,
	Lucha: Lucha,
	Fuego: Fuego,
	Volador: Volador,
	Fantasma: Fantasma,
	Planta: Planta,
	Tierra: Tierra,
	Hielo: Hielo,
	Normal: Normal,
	Veneno: Veneno,
	Psíquico: Psíquico,
	Roca: Roca,
	Acero: Acero,
	Agua: Agua,
};

function Types({ types, tipos }) {
	return (
		<>
			{types?.map((type) => (
				<span className="details__card--header-types" key={type}>
					<img
						src={icoTipos[tipos[type]]}
						alt={tipos[type]}
						title={tipos[type]}
						width={18}
					/>
				</span>
			))}
		</>
	);
}

export { Types };
