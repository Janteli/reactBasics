<!-- # creating react app

--- npx
node package executer
npx create-react-app 01basicreact


web-vitals - checking performance
scripts
starts - how you start your production npm run start/build
eject- aftercompleting task in js and moving to next language

vite bundler
npm create vite@latest
project name
framework

nodemodules is absent 
inside packagejson
npm install
npm run dev


Removing file
setup.js, reportwebvitals - tracking , logo.svg, apptest, App.css

version check node -v

ReactDOM creates a virtual DOM compares with original DOM and inserts those elements which are different from original one

creating root in root id which is present in html root

rendering APP which is JSX power given by react.

give function write html JSX which react renders

without  <React.StrictMode> also react can render App but optimization comes in the way

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,)
--- -->

--- 
<!-- package.json - react scr is injects index.js 
page-page-source there you can see script defer src'/static/js/bundle.js'

in vite no script inside package.json
in react html is inside public but in vite html file is outside.
and script is directly injected in html file. -->
---