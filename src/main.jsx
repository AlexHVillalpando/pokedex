import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter.jsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<HashRouter
		future={{
			v7_startTransition: true,
			v7_relativeSplatPath: true,
		}}
	>
		<AppRouter />
	</HashRouter>,
);
