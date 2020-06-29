const { BrowserRouter, Route } = window.ReactRouterDOM;
import './style.css';
import Home from './page/Home';
import GetSet from './page/GetSet';

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/get-set', name: 'GetSet', Component: GetSet },
]

function App() {
    return (
        <BrowserRouter>
            <main role="main">
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path} component={Component} />
                ))}
            </main>
        </BrowserRouter>
    );
}

export default App;