import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <Card>
        <h1>hello world</h1>
        <UserInfo
          name="Rafael Chinaglia"
          email="c****@g****.com"
          age={99}
          roles={[{ id: 1, title: "CEO" }]}
        />

        <UserInfo
          name="Lary"
          email="c****@g****.com"
          age={29}
          roles={[{ id: 1, title: "CTO" }]}
        />
      </Card>
    </div>
  );
};

export default App;
