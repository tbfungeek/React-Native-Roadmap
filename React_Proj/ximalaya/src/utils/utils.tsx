import {NavigationState} from '@react-navigation/native';

function getActiveRouteName(state: NavigationState) : string {
  let route;
  route = state.routes[state.index];
  while (route.state && route.state.index) {
    route = route.state.routes[route.state.index];
  }
  return route.name;
}

export default getActiveRouteName;
