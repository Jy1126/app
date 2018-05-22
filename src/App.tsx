const { Header, Footer, Content } = Layout;
import { Layout } from 'antd';
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Layout>
          <Header>Header</Header>
         <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
