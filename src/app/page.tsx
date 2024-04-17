import { Component } from "@/components/component/component";
import { getTask } from "@/app/action";
import { useEffect, useState } from "react";

export interface Task {
  id: number,
  todo: string,
  is_complete: boolean,
}

export default async function Home() {

  return (
    <main className="">
      <div>
        <Component />
      </div>
    </main>
  );
}
