import { Link, useLocation } from "react-router"

const Testing = () => {
    const { pathname } = useLocation();
  return (
    <>
    <div className="text-white">Location: {pathname}</div>
    <Link className="text-white underline hover:bg-amber-600 active:bg-blue-400" to="/">Home</Link>
    </>

  )
}
export default Testing