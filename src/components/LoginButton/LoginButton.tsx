
type ButtonProps = {
  value: string;
}

const LoginButton = (props: ButtonProps) => {
  return (
    <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-1/2 m-auto' type="submit">{props.value}</button>
  )
}

export default LoginButton