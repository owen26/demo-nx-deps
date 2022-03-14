// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Lib1 } from '@demo-nx-deps/lib1';
import { Lib2 } from '@demo-nx-deps/lib2';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="demoapp" />
      <Lib1 />
      <Lib2 />
    </>
  );
}

export default App;
