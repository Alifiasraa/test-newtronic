// import gambar from "../images/gambar.jpeg";

const PlaylistItem = ({ title, description, url, type }) => {
  return (
    <div className="flex flex-col text-center justify-center my-4 h-fit mx-6 rounded-2xl shadow-md shadow-slate-300 bg-[#e2daeb] p-2 xl:h-auto ">
      <div className="flex justify-center">
        <h3 className="font-bold w-fit px-4 my-2 bg-[#67568c] text-white py-2 rounded-xl ">
          {title}
        </h3>
      </div>
      <p>{description}</p>
      {type === "image" ? (
        <img className="rounded-2xl h-56 mt-4" src={url} alt={title} />
      ) : (
        <iframe
          className="rounded-2xl h-56 mt-4"
          src={url}
          title={title}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default PlaylistItem;
