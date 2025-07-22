import { atom } from "jotai";
import type { DayCategory } from "../types/DayCategory";
import { atomWithStorage } from "jotai/utils";
import type { ArtistStage } from "../types/ArtistStage";

export const selectedDayAtom = atom<DayCategory>('2025-08-01')
export const checkedAtom = atomWithStorage<number[]>('checked', [])
export const artistStagesAtom = atom<ArtistStage[]>([])
export const liveArtistAtom = atom('')
export const isModalOpenAtom = atom(false)
