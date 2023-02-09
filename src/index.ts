import "./index.scss";
import { listenSlider } from "./pages/listeners/slider";
import { addTask } from "./pages/listeners/addtask";

import App from './pages/app/app';

const app = new App();
app.start();
listenSlider();
addTask()
