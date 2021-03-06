import Layout from "../comps/BaseLayout";

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is a blog post content</p>
  </div>
);

export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
