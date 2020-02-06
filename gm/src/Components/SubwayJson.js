import React from "react";
import useSWR from "swr";
const fetcher = url => fetch(url).then(r => r.json());

export default function SubwayJson() {
  const { subway, error } = useSWR(
    "http://team14.xp65.renault-digital.com/api/graph/processed/subway.json",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!subway) return <div>loading...</div>;
  return <div>{subway}</div>;
}
