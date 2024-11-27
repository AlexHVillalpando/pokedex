import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter.jsx';
import { HashRouter } from 'react-router-dom';
import { NameProvider } from './contexts/nameContext.jsx';
import About from './components/home/About.jsx';

createRoot(document.getElementById('root')).render(
	<NameProvider>
		<HashRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<About />
			<AppRouter />
		</HashRouter>
	</NameProvider>,
);
