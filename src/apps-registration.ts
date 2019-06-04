import {registerApplication } from 'single-spa';
import * as Activity from './activityFns';

export const registerApps = () => {
    registerApplication('navbar',() => import('./apps/navbarApp/navbarApp-lifecycle'), Activity.navbar)
    registerApplication('app1',  () => import('./apps/app1/app1-lifecycle'), Activity.app1)
    registerApplication('app2',  () => import('./apps/app2/app2-lifecycle'), Activity.app2)
}