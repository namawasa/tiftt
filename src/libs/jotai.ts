import { atom } from "jotai";
import type { DayCategory } from "../types/DayCategory";
import { atomWithStorage } from "jotai/utils";

export const selectedDayAtom = atom<DayCategory>('2025-08-01')
export const checkedAtom = atomWithStorage<number[]>('checked', [])
