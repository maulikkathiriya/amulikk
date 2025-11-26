// import { useState } from 'react';

// function Home(props) {
//     const [clicked, setClicked] = useState(false);

//     const handleClick = () => {
//         alert("Button Clicked");
//         setClicked(true);
//     };

//     return (
//         <div className="border border-gray-300 rounded-lg p-4 w-full max-w-xs m-3 bg-white flex flex-col ">
//             <img
//                 src={props.img}
//                 alt={props.name}
//                 className="w-75 h-90 mb-4 rounded-lg"
//             />

//             <h1 className="text-xl font-semibold mb-2 ">{props.name}</h1>
//             <p className="text-red-700 text-lg mb-4 ">{props.price}</p>
//             <button
//                 onClick={handleClick}
//                 className={`px-4 py-2 rounded-md text-white font-medium w-full ${clicked ? 'bg-green-500' : 'bg-blue-500'
//                     } hover:opacity-90 transition-colors duration-300 items-center`}
//             >
//                 {clicked ? "Clicked!" : props.btn}
//             </button>
//         </div>
//     );
// }

// export default Home;
