import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="bg-[#412234] w-full h-screen flex flex-col justify-center items-center">
        <h1 className="mt-16 mb-4 p-4 text-9xl  text-white font-extrabold">
          404
        </h1>
        <p className="font-bold  text-white mb-8">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </p>
        <div className="flex gap-5">
          <Link
            to="/"
            className="block text-lg text-[#412234] bg-white rounded-3xl px-8 py-4"
          >
            Go Home
          </Link>
          <button
            className="block text-lg text-[#412234] bg-white rounded-3xl px-8 py-4"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </main>
    </>
  );
};
