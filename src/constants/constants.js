const ERROR_MESSAGE = {
    
    WRONG_NUMBER_TYPE: `[ERROR] 숫자 형식을 다시 확인하세요.`,

    WRONG_NUMBER_DIGIT: `[ERROR] 숫자는 3자리의 양수로 입력해야 합니다.`,

    WRONG_NUMBER_SIGN: `[ERROR] 숫자는 양수로 입력해야 합니다`
}

const INPUTVIEW_MESSAGE = {

    GET_NUMBER: `숫자를 입력해주세요 : `,

    ASK_RETRY: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
}

const OUTPUTVIEW_MESSAGE = {

    GAME_START: `숫자 야구 게임을 시작합니다.`,

    BALL: `볼`,

    STRIKE: `스트라이크`,

    NOTHING: `낫싱`,

    GAME_END: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`
}

export default {
    ERROR_MESSAGE,
    INPUTVIEW_MESSAGE,
    OUTPUTVIEW_MESSAGE
}