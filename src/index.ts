import "./index.scss";
import { listenSlider } from "./pages/listeners/slider";
import { listenLangs } from "./pages/listeners/langs";
import { addTask } from "./pages/listeners/addtask";
import { viewTask } from "./pages/listeners/viewTask";

import App from './pages/app/app';

const app = new App();
app.start();
listenSlider();
addTask()
listenLangs();
viewTask()
