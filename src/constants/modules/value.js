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

const LIST_OPTION_PRICE = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1200,
    1500,
    1800,
    2000,
    2500,
    3000,
    3500,
    4000,
    4500,
    5000,
    5500,
    6000,
    7000,
    8000,
    9000,
    10000,
];

const MIX_DISTANCE = 0;
const MAX_DISTANCE = 200000;
const STEP_DISTANCE = 10000;

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

    LIST_OPTION_PRICE,

    MIX_DISTANCE,
    MAX_DISTANCE,
    STEP_DISTANCE,

    OPTION_CAR_DAUTOMALL,
    OPTION_CAR_DJAUTO,
    OPTION_CAR_MANUAL,
    LIST_OPTION_CAR,
}