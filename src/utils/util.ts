import data from '../timetable.json'
import type { ArtistStage } from '../types/ArtistStage';
import type { DayCategory } from '../types/DayCategory';
import type { PlaceCategory } from '../types/PlaceType';
import type { StageInfo } from '../types/StageInfo';

export const createNumberArray = (
    length: number,
    startValue: number = 0,
    increment: number = 1
): number[] => {
    return Array.from({ length }, (_, i) => startValue + i * increment);
}

export const getArtistStages = (aid: number) => {
    const list = [] as ArtistStage[]
    const dayList = ['2025-08-01', '2025-08-02', '2025-08-03'] as DayCategory[]
    const stageList = ['HOT STAGE','HEAT GARAGE','SMILE GARDEN','DOLL FACTORY','SKY STAGE','TOROCCO PARK','浮島STAGE' ,'INFO CENTRE'] as PlaceCategory[]

    dayList.map(day => {
        const stageInfos = [] as StageInfo[]
        stageList.map(stage => {
            const infoList = data[day][stage]
            infoList.map(info => {
                if (info.aid === aid) {
                    stageInfos.push(info)
                }
            })
        })
        if (stageInfos.length > 0) {
            list.push({ day, stageInfos })
        }
    })
    return list
}