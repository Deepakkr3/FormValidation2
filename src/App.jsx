import { useState } from "react";

export default function App() {
  let userObj = { name: "", email: "", password: "" };
  const [user, setUser] = useState(userObj);
  let formError = { name: "m m", email: null, password: null };
  let [error, setError] = useState(formError);
  function formVailidator(key, value) {
    if (value.length == 0) {
      setError({
        ...error,
        [key]: `${key} required`,
      });
      console.log(value);
    }
    //else {
    //   setError({
    //     ...error,
    //     [key]: null,
    //   });
    // }
  }
  function formHandler(e) {
    let target = e.target;
    let value = target.value;
    let key = target.name;
    setUser({
      ...user,
      [key]: value,
    });
    formVailidator(key, value);
  }
  const signUp = function (e) {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white  p-12 w-[250px] shadow-lg rounded-md   transition-color duration-1000 animate-pulse ">
          <h2 className="text-center p-2 font-smibold">SDE form</h2>
          <form className="flex flex-col gap-2" onSubmit={signUp}>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">First Name</label>
              <input
                className=" border border-2  border-black-900 p-1 rounded-xl"
                name="name"
                type="text"
                placeholder="Enter  Name "
                onChange={formHandler}
              ></input>
              {formError.name && (
                <small className="text-rose-600 font-semibold ">
                  {formError.name}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Enter Email</label>
              <input
                className=" border-2 border  border-black-900 p-1 rounded-xl"
                name="email"
                type="email"
                placeholder="abc@gmail.com "
                onChange={formHandler}
              ></input>
              {formError.email && (
                <small className="text-rose-600 font-semibold ">
                  {formError.email}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Enter Password</label>
              <input
                className=" border-2 border  border-black-900 p-1 rounded-xl"
                name="password"
                type="password"
                placeholder="####"
                onChange={formHandler}
              ></input>
              {formError.password && (
                <small className="text-rose-600 font-semibold ">
                  {formError.password}
                </small>
              )}
            </div>
            <button className="border-0 bg-indigo-600 rounder rounded-xl font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
