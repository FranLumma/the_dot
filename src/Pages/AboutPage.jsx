const About = () => {
  const copyContent = async (e) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText("camilinzye@gmail.com");
    }
  };

  return (
    <>
      <div className="h-screen ">
        <div className="flex justify-center h-full max-h-[445px] w-full">
          <div className="border-[1px] rounded-[4px] border-black mt-2 w-[790px] h-fit flex bg-[#181818] justify-center self-center">
            <div className="self-center text-start h-1/3 m-10 flex">
              <div className="text-[#b3b2b3] text-[26px]">
                <h2>
                  Hi i'm <span>k</span>
                  cami
                </h2>
                <p style={{ fontFamily: "circulation" }}>
                  many fall in the face of chaos, but not this one. not today.
                </p>
              </div>
              <div className="text-[#b3b2b3]">
                <h3>Contacts</h3>
                <div className="flex">
                  <p>
                    <span>Email: </span>
                    <span
                      onClick={() => {
                        copyContent();
                      }}
                    >
                      camilinzye@gmail.com
                    </span>
                  </p>
                </div>
                <div className="flex">
                  <p>
                    <span>Twitter: </span>
                    <a
                      href="http://twitter.com/FranKamiLumma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fb9f9f]"
                    >
                      @FranKamiLumma
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
