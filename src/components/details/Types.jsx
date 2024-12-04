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
