import { Form } from "./components/form";
function App() {
  return (
    <div className="flex flex-col h-screen lg:flex-row">

      <div className="w-full my-10 flex items-center justify-center lg:hidden ">
        <img className="w-20 h-20" src="/logoBlack.png" alt="" />
      </div>
      <div className="hidden lg:flex w-2/6 items-center justify-end bg-primary_blue text-black">
        <img className="absolute top-5 left-4 w-10" src="/logo.png" alt="Logo seguro" />
        <img className="w-4/5 -mr-16" src="/ilustration.png" alt="Ilustración mujer" />
      </div>

      <div className="w-full flex items-center justify-center ">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-green-50 bg-opacity-50 filter blur-md z-[-1] ">
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
