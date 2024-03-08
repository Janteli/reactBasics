---
Hooks helps to controll variable updation in UI

without it in pure jsx 
point out var element .getElementById().innerHTML
---

#React FIBRE
---
github acidlite
reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.
---

# React Questions Counter

---

let [counter, setCounter] = useState(15);
const addValue = () =>{
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)
   her result is 19
    setCounter(prevCounter+1);
    setCounter(prevCounter+1);
    setCounter(prevCounter+1);
    setCounter(prevCounter+1);

  }
result is 16 not 19 because same task
---