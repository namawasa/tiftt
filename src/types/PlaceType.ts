export const PLACE_TYPE = {
    'HOT_STAGE': 1,
    'HEAT_GARAGE': 2,
    'SMILE_GARDEN': 3,
    'DOLL_FACTORY': 4,
    'SKY_STAGE': 5,
    'TOROCCO_PARK': 6,
    'UKISIMA_STAGE': 7,
    'INFO_CENTRE': 8
} as const

export type PlaceType = typeof PLACE_TYPE[keyof typeof PLACE_TYPE]
