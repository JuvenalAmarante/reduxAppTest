import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import FilmsDetails from '~/pages/Films';

const Routes = createAppContainer(createSwitchNavigator({Main, FilmsDetails}));

export default Routes;
