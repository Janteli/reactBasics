# react router dom installation
```
not the part of react, third parties
npm install react-router-dom
```

```
instead of anchor tag Link 
anchor tag reloads the page but Link doesn't only imports the required elements
NavLink- additional features 
like whenever you have to change the className
<NavLink className={({isActive})=>{`clsses ${isActive ? "":""}`}}>

react-router-dom is on the play so no rendering App reder react-router-dom
in main.jsx
<RouterProvider router={router}/>
in takes a props called router
```

# Loader
```
loader fetches data whenevver hover overed before clicking before useEffect, also caches;
you can return promise
```