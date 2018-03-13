import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about?nar=duy">
      <button>Go to About Page</button>
    </Link>

    <p>Hello Duy</p>
  </div>
);

export default Index;
