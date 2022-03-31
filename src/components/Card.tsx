import { useEffect, useState } from "react";
import dividerDesktop from "../assets/img/divider-desktop.svg";
import dividerMobile from "../assets/img/divider-mobile.svg";
import { fetchAdvise } from "../helpers/fetchAdvice";
import { advice } from "../types/adviceTypes";
import { Loading } from "./Loading/Loading";

const initState = {
  id: 0,
  advice: "",
};

export const Card = () => {
  const [advice, setAdvice] = useState<advice>(initState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAdvice = async () => {
      const resp = await fetchAdvise();
      setAdvice(resp);
      setLoading(false);
    };
    getAdvice();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const adviceFetch = await fetchAdvise();
    setAdvice(adviceFetch);
    setLoading(false);
  };

  return (
    <div className="bg-dark-grayish-blue mx-4 justify-center sm:mx-auto text-center p-6 rounded-xl w-[37rem]">
      <h3 className="mt-4 text-neon-green text-base uppercase tracking-widest">
        Advice # {advice.id}
      </h3>

      {loading ? (
        <Loading />
      ) : (
        <p className="my-8 text-center text-light-cyan text-[28px] font-extrabold">
          {advice.advice}
        </p>
      )}

      <div className="min-w-full">
        {window.screen.width > 768 ? (
          <img src={dividerDesktop} className="mx-auto" alt="divider-desktop" />
        ) : (
          <img src={dividerMobile} className="mx-auto" alt="divider-mobile" />
        )}
      </div>

      <button
        className={`btn-neon-green relative top-10 p-4 rounded-full focus-visible:ring focus:outline-none
          ${loading ? "rotate-90" : ""}`}
        onClick={() => handleClick()}
        disabled={loading ? true : false}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};
