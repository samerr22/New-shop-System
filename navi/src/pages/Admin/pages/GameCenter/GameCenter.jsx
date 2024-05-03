import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import GameCenterCreate from "./GameCenterCreate";
import GameCenterDelete from "./GameCenterDelete";
import { API_URL, postMultipartData } from "../../../../lib/consts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GameCenterUpdate from "./GameCenterUpdate";

const GameCenter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: "65ff4f4a3f246e8f5a6efc0a",
    title: "",
    price: "",
  });

  const [updateFormData, setupdateFormData] = useState({
    userId: "65ff4f4a3f246e8f5a6efc0a",
    title: "",
    price: "",
  });

  const [gameList, setGameList] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`${API_URL}/games`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((res) => {
        setGameList(res);
      });
  };

  const handleFormSubmit = async (data) => {
    console.log("Form data:", data);

    // API will be here
    await postMultipartData(`/games`, data).then((res) => {
      if (res.status === 201) {
        toast("Game added successfully!");
        fetchData();
        return false;
      }
    });
  };

  const handleUpdateFormSubmit = async (data) => {
    console.log("Form data:", data);

    // API will be here
    await postMultipartData(`/games`, data).then((res) => {
      if (res.status === 201) {
        toast("Game added successfully!");
        fetchData();
        return false;
      }
    });
  };

  const handleOnDelete = async (id) => {
    // API will be here
    const response = await fetch(`${API_URL}/games`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then((res) => res.json());
    fetchData();

    return false;
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-2xl font-semibold text-gray-800 default:text-white">
          Games
        </h1>
        {/* <GameCenterCreate /> */}

        <GameCenterCreate
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          onSubmit={handleFormSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <ToastContainer />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {gameList.length === 0 && (
          <div className="flex items-center justify-center h-40">
            <h1 className="text-2xl font-semibold text-gray-800 default:text-white">
              No games found
            </h1>
          </div>
        )}

        {gameList.length > 0 && (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 default:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 default:bg-gray-700 default:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-6">
                  #
                </th>
                <th scope="col" className="px-6 py-6">
                  <div className="flex items-center">
                    Title
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-6">
                  Ticket Amount
                </th>
                <th scope="col" className="px-6 py-6">
                  Image
                </th>
                <th scope="col" className="px-6 py-6 text-red-500 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {gameList.map((data, index) => (
                <tr
                  key={index}
                  className="bg-white border-b default:bg-gray-800 default:border-gray-700 hover:bg-gray-50 default:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap default:text-white"
                  >
                    {data.title}
                  </th>

                  <td className="px-6 py-4">Rs. {data.price}</td>
                  <td className="px-6 py-4">
                    <img
                      src={API_URL + "/uploads/" + data.image}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/images/thumbnail.svg";
                      }}
                      alt={data.image}
                      className=" w-20 h-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-center">
                      <GameCenterUpdate
                        isOpen={isModalOpen}
                        toggleModal={toggleModal}
                        onSubmit={handleUpdateFormSubmit}
                        formData={updateFormData}
                        setFormData={setupdateFormData}
                        data={data}
                      />
                      
                      <GameCenterDelete
                        isOpen={isModalOpen}
                        toggleModal={toggleModal}
                        onDetele={() => handleOnDelete(data._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GameCenter;
