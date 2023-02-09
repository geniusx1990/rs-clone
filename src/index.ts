import "./index.scss";
import { listenSlider } from "./pages/listeners/slider";
import { listenLangs } from "./pages/listeners/langs";

import App from './pages/app/app';

const app = new App();
app.start();
listenSlider();
listenLangs();
