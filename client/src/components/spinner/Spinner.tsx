import { Circles } from 'react-loader-spinner';
import "./spinner.scss"

function Spinner() {
  return (
    <Circles
        height="80"
        width="80"
        color="#000000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
  )
}

export default Spinner