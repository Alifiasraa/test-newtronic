import PlaylistItem from "./PlaylistItem";

const PlaylistList = ({ playlist }) => {
  return (
    <div>
      <div className="mx-6 md:grid md:grid-cols-2 xl:grid-cols-3 ">
        {playlist.map((item) => (
          <PlaylistItem
            key={item.id}
            title={item.title}
            description={item.description}
            url={item.url}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
