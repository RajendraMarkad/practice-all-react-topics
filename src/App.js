import './App.css';
import {ParentComponent, ParentUser, NestedProvider, ToggleParent} from './hooks/UseContextHook';
import { Counter } from './hooks/UseReducerHook';
import { BasicCounterExample } from './hooks/UseCallbackHook';
import LazyLoad from './promises/LazyLoad';

function App() {
  return <>
  <ParentComponent />
  <ParentUser />
  <NestedProvider />
  <ToggleParent />
  <Counter />
  <BasicCounterExample />
  <LazyLoad />
  </>
}

export default App;
