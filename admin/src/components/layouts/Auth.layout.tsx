import { Outlet, useNavigate } from 'react-router-dom';

export default function AuthLayout() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-2/3 h-full p-3 border">
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                        className='w-full h-full object-cover'
                        src="/images/example-bg-01.jpg"
                    />
                </div>
            </div>

            <div className="w-1/3 h-full bg-white flex justify-center items-center">
                <button
                    className="absolute top-3 right-3 w-6 h-6 flex justify-center items-center text-dark-gray
                        duration-200 transition hover:text-black active:scale-95
                    "
                    onClick={() => navigate("/")}
                >
                    {/* <FontAwesomeIcon icon={faXmark}/> */}
                </button>
                <Outlet/>
            </div>
        </div>
    );
};