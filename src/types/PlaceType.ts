export const PLACE_TYPE = {
    'HOT_STAGE': 4,
    'HEAT_GARAGE': 5,
    'SMILE_GARDEN': 6,
    'DOLL_FACTORY': 7,
    'SKY_STAGE': 8,
    'TOROCCO_PARK': 9,
    'UKISIMA_STAGE': 10,
    'INFO_CENTRE': 11
} as const

export type PlaceType = typeof PLACE_TYPE[keyof typeof PLACE_TYPE]

export type PlaceCategory = 'HOT STAGE' | 'HEAT GARAGE' | 'SMILE GARDEN' | 'DOLL FACTORY' | 'SKY STAGE' | 'TOROCCO PARK' | '浮島STAGE' | 'INFO CENTRE'

export const getPlaceName = (id_stage: PlaceType) => {
    switch (id_stage) {
        case PLACE_TYPE.HOT_STAGE:
            return 'HOT_STAGE'
        case PLACE_TYPE.HEAT_GARAGE:
            return 'HEAT_GARAGE'
        case PLACE_TYPE.SMILE_GARDEN:
            return 'SMILE_GARDEN'
        case PLACE_TYPE.DOLL_FACTORY:
            return 'DOLL_FACTORY'
        case PLACE_TYPE.SKY_STAGE:
            return 'SKY_STAGE'
        case PLACE_TYPE.TOROCCO_PARK:
            return 'TOROCCO_PARK'
        case PLACE_TYPE.UKISIMA_STAGE:
            return '浮島STAGE'
        case PLACE_TYPE.INFO_CENTRE:
            return 'INFO_CENTRE'
    }
}