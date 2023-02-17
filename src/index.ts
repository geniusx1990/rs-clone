import "./index.scss";
import { listenSlider } from "./pages/listeners/slider";
import { listenLangs } from "./pages/listeners/langs";

import { viewTask } from "./pages/listeners/viewTask";

import { closeModal } from './pages/listeners/closeReg';

import App from './pages/app/app';

const app = new App();
app.start();
listenSlider();
listenLangs();
viewTask()
closeModal();
