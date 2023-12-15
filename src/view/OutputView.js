import {
    Console,
} from '@woowacourse/mission-utils';

import { 
    OUTPUTVIEW_MESSAGE,
} from '../constants/constants.js';

const OutputView = {

    printGameStart() {
        Console.print(OUTPUTVIEW_MESSAGE.GAME_START);
    }
}

export default OutputView;