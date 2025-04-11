export const Header = () => {
  return (
    <>
      <section>
        <div className="flex flex-col bg-white">
          <div className="flex flex-row space-x-3">
            <h4 className="font-bold text-gray-500 p-1">Dashboard</h4>
          </div>
          <p className="text-gray-400 p-1">{new Date().toDateString()}</p>
        </div>
      </section>
    </>
  );
};
