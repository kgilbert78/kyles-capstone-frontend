export const RecursiveMap = (fn, [head, ...tail]) => {
    if (head === undefined) {
        // console.log("Head:", head, "&", "Tail:", tail)
        return [];
    } else {
        // console.log("Head:", head, "&", "Tail:", tail)
        return [fn(head), ...RecursiveMap(fn, tail)];
    }
}