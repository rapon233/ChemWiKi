import './lib/tex.js.js';

import {registerTeX} from './register.js';
import {Loader} from '../../../../js/components/loader.js';

Loader.preLoad(
    'input/tex-base',
    '[tex]/ams',
    '[tex]/newcommand',
    '[tex]/noundefined',
    '[tex]/require',
    '[tex]/autoload',
    '[tex]/configMacros'
);

registerTeX([
    'base',
    'ams',
    'newcommand',
    'noundefined',
    'require',
    'autoload',
    'configMacros'
]);
