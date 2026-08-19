import { useState } from "react";

function App() {
  const [isLogin] = useState(false);

  return (
    <div>
      {isLogin ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
    </div>
  );
}

export default App;