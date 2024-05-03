
import React from "react";
import Button from "../../../../components/Button/Button";
import {
  ArchiveBoxArrowDownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const GameBookingCancel = ({ isOpen, toggleModal, onDetele }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = (e) => {
    const output = onDetele();
    setShowModal(output);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-red-500 ms-5 p-2 rounded"
      >
        <ArchiveBoxArrowDownIcon className="w-4 h-4" />
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto w-auto md:w-4/12">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    Are you sure to cancel this booking?
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 pt-8 pb-10 flex-auto">
                  <div className="flex justify-evenly">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex items-center justify-center w-32 px-4 py-2 text-white bg-green-500 rounded"
                    >
                      No
                    </button>

                    <button
                      onClick={handleSubmit}
                      className="flex items-center justify-center w-32 px-4 py-2 text-white bg-red-500 rounded"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default GameBookingCancel;
