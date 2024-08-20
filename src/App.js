import './App.css';
import {ParentComponent, ParentUser, NestedProvider, ToggleParent} from './hooks/UseContextHook'

function App() {
  return <>
  <ParentComponent />
  <ParentUser />
  <NestedProvider />
  <ToggleParent />
  </>
}

export default App;
