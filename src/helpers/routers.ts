import routersPath from '../constants/routers';

export function isHideSideMenuRouter(path: string): boolean {
    const {home, login, registration} = routersPath;
    return path === home ||
        path.includes(login) ||
        path.includes(registration);
}
