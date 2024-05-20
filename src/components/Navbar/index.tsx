import Avatar from "@mui/joy/Avatar";

const Navbar = () => {
  return (
    <div className="md:w-[calc(100%)-230px] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
      <div className="flex items-center gap-3 cursor-pointer">
        <Avatar color="danger" variant="outlined" />
        <span className="text-red-400 font-semibold md:text-lg text-sm whitespace-nowrap">
          Mace Board
        </span>
      </div>
    </div>
  );
};

export default Navbar;
