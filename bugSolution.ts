function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

//Add a check to handle the case where x or y is missing
function printCoordSafe(pt: { x?: number; y?: number }) {
    if (pt.x !== undefined && pt.y !== undefined) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    } else {
        console.error("Coordinate x or y is missing");
    }
}

printCoord({ x: 3, y: 7 });
printCoordSafe({ x: 3, y: 7 });
printCoordSafe({ x: 3});
 