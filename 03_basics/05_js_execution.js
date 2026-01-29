/*
The working of JS works on three phases: 
1. Global Execution Context
2. Memory Creation Phase
3. Execution Phase

Phase 1: Global Execution Context
The value of this keyword is set to Global Execution Context
(which is an empty object in Node environment and window object in browser environment)

Phase 2: Memory Creation Phase
During this phase, JS engine scans the code and assigns the initial values for the variables, function, etc.
For variables, they are undefined and for functions they are set to their function definitions

Phase 3: Execution Phase
After the creation phase is completed, the execution phase begins where actual values of the variables are set.
When functions are called, they create a new 'function execution context' which consists of two phases
(Memory phase and Execution phase) 

The return value of the function execution context is passed to the Global execution context.

*/
