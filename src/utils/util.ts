export const createNumberArray = (
    length: number,
    startValue: number = 0,
    increment: number = 1
): number[] => {
    return Array.from({ length }, (_, i) => startValue + i * increment);
}
