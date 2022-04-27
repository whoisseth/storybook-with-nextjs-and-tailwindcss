export const Button = ({
  type = "login",
  state = "default",
  label,
  login_type,
}) => {
  return (
    <>
      {type === "normal" && (
        <button
          className={` px-5 py-2 rounded
      ${state === "default" && "border-2"}
       ${state === "primary" && "bg-blue-400"}
       ${state === "secondary" && "bg-green-200"} `}
        >
          {label}
        </button>
      )}
      {type === "login" && (
        <button
          className={`  font-semibold flex justify-center items-center text-[15px]   rounded-md  hover:transition-all gap-2 w-96 h-12  hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
          ${login_type === "google" && "bg-white ring-blue-400 ring-2   "}

          ${login_type === "github" && "bg-black text-white   "}

          ${login_type === "guest" && " bg-[#000] text-white   "}
          
          `}
        >
          <span>
            Continue {login_type === "google" && " with Google"}
            {login_type === "github" && " with Github"}
            {login_type === "guest" && " as a Guest"}
          </span>
        </button>
      )}
      {/* {} */}
    </>
  );
};
