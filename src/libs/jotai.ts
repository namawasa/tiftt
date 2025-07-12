import { atom } from "jotai";
import type { DayCategory } from "../types/DayCategory";

export const selectedDayAtom = atom<DayCategory>('2025-08-01')
