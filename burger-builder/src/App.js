import React from 'react';
import Layout from "./component/layout/layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder.component"

function App() {
  return (
    <div >
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
