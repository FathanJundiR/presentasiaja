import logo from "../assets/T T (1).png";

export default function LoginNavBar() {
  return (
    <>
      <div className="w-full h-[11vh] bg-opacity-100 bg-black flex fixed z-10">
        <div className="w-[30%] h-full bg-transparent">
          <img className="h-full w-[35%] object-cover ml-4" src={logo} />
        </div>
        <div className="w-[40%] h-full flex items-center justify-center gap-10">
          <div className="text-[20px] text-slate-200">Home</div>
          <div className="text-[20px] text-slate-200">Services</div>
          <div className="text-[20px] text-slate-200">About Us</div>
        </div>
      </div>
    </>
  );
}
