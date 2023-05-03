const Header = () => {
  return (
    <header className="w-100">
      <div className="bg-[#181818] border-b-[1px] border-black w-auto h-auto flex justify-center">
        <svg viewBox="0 0 512 512" className="w-[50px] p-2">
          <path
            fill="#fb9f9f"
            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM352 256c0 52.95-43.05 96-96 96S160 308.1 160 256s43.05-96 96-96S352 203.1 352 256z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
