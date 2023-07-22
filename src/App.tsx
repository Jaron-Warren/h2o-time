import { useRef } from "react";
import "./App.css";

function App() {
  let dialog = useRef<HTMLDialogElement>(null);

  function addZone() {
    // const dialog = document.getElementById("zoneModal") as HTMLDialogElement;
    dialog.current?.showModal();
  }

  function closeModal() {
    // const dialog = document.getElementById("zoneModal") as HTMLDialogElement;
    dialog.current?.close();
  }

  function checkBounds(e: any) {
    const dialogDimensions = dialog.current?.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.current?.close();
    }
  }

  return (
    <>
      <div className="mx-1 flex max-h-screen min-h-screen flex-col gap-2 px-2">
        <header className="mt-3">
          <div className="mx-12 rounded-md bg-slate-500 p-2">
            <h1 className="text-center text-lg font-extrabold text-sky-400 underline decoration-wavy">
              H2O Time
            </h1>
          </div>
        </header>
        <div id="schedule">
          <span className="whiteShadow font-bold">Schedule:</span>
        </div>
        <div className="grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"></div>
        </div>
        <dialog
          id="zoneModal"
          ref={dialog}
          onClick={(event) => checkBounds(event)}
        >
          <button
            onClick={closeModal}
            className="rounded-md border-2 border-slate-900 bg-red-500 px-1.5 pb-1 font-bold leading-3"
          >
            Close
          </button>
          <span>this is a dialog</span>
        </dialog>
        <div id="zones">
          <div className="flex flex-row">
            <span className="whiteShadow mr-4 font-bold">Zones:</span>
            <button
              onClick={addZone}
              className="rounded-md border-2 border-slate-900 bg-green-600 px-1.5 pb-1 font-bold leading-3"
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-3 grow rounded-md border border-slate-600 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="m-2 flex flex-col gap-y-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
