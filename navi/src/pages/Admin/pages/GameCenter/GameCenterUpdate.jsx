import React, { useEffect } from "react";
import Button from "../../../../components/Button/Button";
import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const GameCenterUpdate = ({ isOpen, onSubmit, formData, setFormData, data }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  useEffect(() => {
    console.log("second", data)
    // setFormData(data);
    // // setFormData({
    // //   title: "",
    // //   price: "",
    // //   image: null,
    // // });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const output = await onSubmit(formData);
    setShowModal(output);
    setFormData({
      title: "",
      price: "",
      image: null,
    });
  };

  const handleImageChange = (event) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const imageFile = fileInput.files[0];
      // const imageUrl = URL.createObjectURL(imageFile);
      setFormData({
        ...formData,
        image: imageFile,
      });
    } else {
      // No file selected, reset the image and imageFile
      setFormData({
        ...formData,
        image: null,
      });
    }
  };

  return (
    <>
      {/* <button
        onClick={() => setShowModal(true)}
        className="flex items-center justify-center px-4 py-2 text-white bg-green-500 rounded"
      >
        <PlusCircleIcon className="w-5 h-5" />
        <span className="ms-2">Add New Game</span>
      </button> */}

      <button onClick={() => setShowModal(true)} className="text-white  bg-green-500 p-2 rounded">
        <PencilSquareIcon className="w-4 h-4" />
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
                    Update games
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
                <div className="relative px-6 pt-8 pb-14 flex-auto">
                  <div className="">
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      action="#"
                    >
                      <div>
                      {formData.title}
                        <label
                          htmlFor="title"
                          className="block mb-2 text-sm font-medium text-gray-900 default:text-white"
                        >
                          Game Title
                        </label>
                        <input
                          type="title"
                          name="title"
                          id="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="bg-white border text-sm rounded-lg block w-full p-2.5 "
                          placeholder=""
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="amount"
                          className="block mb-2 text-sm font-medium text-gray-900 default:text-white"
                        >
                          Ticket amount
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="bg-white border text-sm rounded-lg block w-full p-2.5 default:bg-gray-600 default:border-gray-500 default:placeholder-gray-400 default:text-red"
                          placeholder=""
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="amount"
                          className="block mb-2 text-sm font-medium text-gray-900 default:text-white"
                        >
                          Upload Image
                        </label>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          onChange={handleImageChange}
                          accept="image/*"
                          className="bg-white border text-sm rounded-lg block w-full  "
                          placeholder=""
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                      >
                        Create
                      </Button>
                    </form>
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

export default GameCenterUpdate;
