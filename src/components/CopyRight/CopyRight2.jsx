import { FaRegCopyright } from "react-icons/fa";

const CopyRight2 = () => {
  return (
    <div className="my-10">
      <h1 className="flex justify-center items-center gap-2 text-slate-500">
        <span>Copyright</span>
        <FaRegCopyright />
        <span>Rumah BUMN Samarinda</span>
      </h1>
      <div className="flex justify-center items-center mt-2">
        <span className="text-sm text-gray-500">Hak Cipta Dilindungi</span>
      </div>
    </div>
  );
};

export default CopyRight2;
