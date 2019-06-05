import './index.css';
import * as serviceWorker from './serviceWorker';
import { registerApps } from './apps-registration';
import { start } from 'single-spa';

registerApps();
start();
serviceWorker.unregister();
