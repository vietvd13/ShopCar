const LANGUAGE_VIETNAMESE = 'vi';
const LANGUAGE_ENGLISH = 'en';
const LANGUAGE_KOREAN = 'kr';

const CUSTOMER_SUPPORT_STATUS_DONE = 'done';
const CUSTOMER_SUPPORT_STATUS_IN_PROGRESS = 'in_progress';

const OPTION_UPDATE_PRICE = [
    {
        value: 'PERCENTAGE',
        text: 'DASHBOARD.CAR.UPDATE_PERCENTAGE'
    },
    {
        value: 'PRICE',
        text: 'DASHBOARD.CAR.UPDATE_PRICE'
    }
]

const MAX_PRICE = 10000;
const MAX_DISTANCE = 200000;

const OPTION_CAR_DAUTOMALL = 'https://dautomall.com';
const OPTION_CAR_DJAUTO = 'https://www.djauto.co.kr';
const OPTION_CAR_MANUAL = 'manual';

const LIST_OPTION_CAR = [
    OPTION_CAR_MANUAL,
    OPTION_CAR_DAUTOMALL,
    OPTION_CAR_DJAUTO
]

export default {
    LANGUAGE_VIETNAMESE,
    LANGUAGE_ENGLISH,
    LANGUAGE_KOREAN,

    CUSTOMER_SUPPORT_STATUS_DONE,
    CUSTOMER_SUPPORT_STATUS_IN_PROGRESS,

    OPTION_UPDATE_PRICE,

    MAX_PRICE,
    MAX_DISTANCE,

    OPTION_CAR_DAUTOMALL,
    OPTION_CAR_DJAUTO,
    OPTION_CAR_MANUAL,
    LIST_OPTION_CAR,
}