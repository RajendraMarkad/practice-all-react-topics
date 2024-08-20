import './App.css';
import {ParentComponent, ParentUser, NestedProvider, ToggleParent} from './hooks/UseContextHook';
import { Counter } from './hooks/useReducer';

function App() {
  return <>
  <ParentComponent />
  <ParentUser />
  <NestedProvider />
  <ToggleParent />
  <Counter />
  </>
}

export default App;
