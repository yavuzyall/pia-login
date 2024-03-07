type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

const LoginInputs = (props: InputProps) => {
  return (
    <>
      <input 
      type={props.type} 
      placeholder={props.placeholder} 
      value={props.value}
      onChange={props.onChange}
      className="loginMail border border-indigo-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 hover:border-indigo-500 block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none" />
    </>
  );
};

export default LoginInputs;
