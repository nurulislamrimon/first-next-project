import { useRouter } from "next/router";
import React from "react";

const DynamicRoute = () => {
  const { query } = useRouter();
  return <div>This is Dynamic Route: {query.id}</div>;
};

export default DynamicRoute;
