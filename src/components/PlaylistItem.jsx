import { saveAs } from "file-saver";
// icons
import { MdOutlineFileDownload } from "react-icons/md";
import { RiVideoDownloadLine } from "react-icons/ri";

const PlaylistItem = ({ title, description, url, type }) => {
  const downloadFile = () => {
    saveAs(url, `${title}.png`);
  };

  return (
    <div className="mx-6 my-4 flex h-fit flex-col justify-center rounded-2xl border border-slate-300 bg-[#e2daeb] p-3 text-center shadow-md shadow-slate-300 xl:h-auto ">
      <div className="flex justify-center">
        <h3 className="my-2 w-fit rounded-xl bg-[#67568c] px-4 py-2 font-bold text-white hover:cursor-pointer hover:bg-[#ff6e6c] ">
          {title}
        </h3>
      </div>
      <p>{description}</p>

      {/* show image or video */}
      {type === "image" ? (
        <img
          className="mx-5 mt-4 h-56 rounded-2xl border-2 border-slate-500"
          src={url}
          alt={title}
        />
      ) : (
        <iframe
          className="mx-5 mt-4 h-56 rounded-2xl border-2 border-slate-500"
          src={url}
          title={title}
          allowFullScreen
        />
      )}

      {/* download image or video */}
      {type === "image" ? (
        <div
          onClick={downloadFile}
          className="group  mt-2 flex items-center justify-center gap-1 hover:cursor-pointer hover:underline"
        >
          <MdOutlineFileDownload size={20} />
          Unduh Gambar
        </div>
      ) : (
        <div
          onClick={downloadFile}
          className="group mt-2 flex items-center justify-center gap-1 hover:cursor-pointer hover:underline"
        >
          <RiVideoDownloadLine size={20} />
          Unduh Video
        </div>
      )}
    </div>
  );
};

export default PlaylistItem;
