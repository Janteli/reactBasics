# Password Generator

---
useCallback
useCallback is a React Hook that lets you cache a function definition between re-renders.
memorizes the function whole or parts as possible
whenever you call it,  it works on that needed part;
llike in our project password generator should be called when Number is checked or caracters is checked
---

# Usage
---
Usage
Skipping re-rendering of components
Updating state from a memoized callback
Preventing an Effect from firing too often
Optimizing a custom Hook

 const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
---

# syntax for useCallback
---
useCallback(fn, dependencies)
---

# useEffect

---
useEffect is a React Hook that lets you synchronize a component with an external system.

useEffect(setup, dependencies?)
---