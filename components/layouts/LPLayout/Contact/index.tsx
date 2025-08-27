export const Contact = () => {
  return (
    <form id="info-newsletter" className="items-center rounded">
      <div className="flex h-14 lg:h-12">
        <input
          placeholder="(00) 00000-0000"
          className="h-full text-sm w-full px-3 rounded-l-md border border-transparent bg-white focus:outline-none text-grayscale-400 placeholder:text-purplescale-100"
        />
        <button
          type="submit"
          className="text-sm bg-purplescale-200 h-full w-[123px] rounded-r-md md:w-40 text-white px-2"
        >
          Solicitar
        </button>
      </div>
    </form>
  );
};
