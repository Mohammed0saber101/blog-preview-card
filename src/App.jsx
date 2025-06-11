import illustration from "./assets/images/illustration-article.svg";

function App() {
  return (
    <main className="flex max-w-80 transform flex-col items-start gap-6 rounded-[20px] border border-gray-950 bg-white p-6 shadow-box duration-300 hover:scale-[1.03]">
      <img
        src={illustration}
        alt="illustration-article.svg"
        className="w-ful rounded-[10px]"
      />

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-sm bg-yellow px-3 py-1 font-display-800 text-[12px] text-gray-950">
            Learning
          </span>
        </div>
        <span className=" text-[12px] text-gray-950">
          Published 21 Dec 2023
        </span>
        <h1 className="font-display-800 text-[20px] text-gray-950">
          HTML & CSS foundations
        </h1>
        <p className="text-[14px] text-gray-500 ">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="/images/image-avatar.webp"
          alt="image-avatar"
          className="h-8 w-8"
        />
        <p className="font-display-800 text-[14px] text-gray-950 ">
          Greg Hooper
        </p>
      </div>
    </main>
  );
}

export default App;
