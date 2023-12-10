import Input from "./Input";
const Nav = () => {
  return (
    <div className="flex flex-col gap-[38px] hidden md:flex">
      <Input />
      <p className="text-primary font-roboto text-[14px]">Weather Details...</p>
    </div>
  );
};

export default Nav;
