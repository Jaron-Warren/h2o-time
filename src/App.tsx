import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="mx-1 my-3 flex min-h-screen flex-col gap-2 px-2">
        <header>
          <div className="rounded-md bg-slate-900 p-2">
            <h1 className="text-center text-lg font-extrabold text-sky-700 underline decoration-wavy">
              H2O Time
            </h1>
          </div>
        </header>
        <div id="schedule">
          <h2 className="font-bold">Schedule:</h2>
        </div>
        <div className="grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-row">
            <h4>Monday June 10th</h4>
            <ul>
              <li>zone 1</li>
            </ul>
          </div>
        </div>
        <div id="zones">
          <div className="flex flex-row">
            <h2 className="mr-4 font-bold">Zones:</h2>
            <button className="rounded-md border-2 border-slate-900 px-1.5 pb-1 font-bold leading-3">
              +
            </button>
          </div>
        </div>
        <div className="grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-row">
            <img src="" alt="Warning" />
            <h4>Zone 1</h4>
            <span>every 3 days</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
