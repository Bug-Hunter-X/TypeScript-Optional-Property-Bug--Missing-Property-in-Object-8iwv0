# TypeScript Optional Property Bug

This repository demonstrates a common, yet subtle, bug in TypeScript related to optional properties in object types. The bug arises when a function expects an object with certain properties, but the provided object might be missing those properties, causing a runtime error.

## Bug Description

The `bug.ts` file contains a function `printCoord` that expects an object with `x` and `y` properties.  However, if you were to call `printCoord` with an object missing either `x` or `y`, TypeScript won't issue a compiler error; instead, the error will only occur during runtime. This is because TypeScript's type checking doesn't fully guarantee the presence of those properties unless explicitly marked as required.

## Solution

The `bugSolution.ts` file shows how to resolve this issue by making the properties required using the `required` keyword in the function signature or adding a runtime check. 

This example highlights the importance of being mindful of optional properties in TypeScript and utilizing appropriate runtime validation or making properties required to ensure error-free execution.