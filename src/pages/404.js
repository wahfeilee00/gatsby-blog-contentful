import React from "react";
import { Layout } from "../components/Layout";

export default function Error() {
  return (
    <>
      <Layout>
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h1>Page Not Found</h1>
          </section>
        </main>
      </Layout>
    </>
  );
}
