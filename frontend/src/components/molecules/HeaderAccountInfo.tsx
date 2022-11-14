import * as React from 'react';
import { HeaderLoggedOut } from '../../components';

export class HeaderAccountInfo extends React.Component {
  render () {
    return (
        <div>
        {
          // Auth.currentUser ? <HeaderLoggedIn/> : <HeaderLoggedOut/>
        }
        <HeaderLoggedOut/>
        </div>
    //     <div className="flex h-48 mx-10">
    //       <div className="my-auto h-full w-1/3 bg-blue-400 rounded-lg mr-2">h-full</div>
    //       <div className="my-auto h-full w-1/3 bg-blue-400 rounded-lg mr-2">h-full</div>
    //       <div className="m-auto h-full w-1/3 bg-blue-400 rounded-lg">h-full</div>
    //     </div>
    //     // https://tailwindcss.com/
    //     // <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
    //     //   <div className="pt-full bg-white rounded-xl shadow-lg flex items-center justify-center">1</div>
    //     //   <div className="col-start-3">2</div>
    //     //   <div>3</div>
    //     //   <div>4</div>
    //     //   <div className="row-start-1 col-start-2 col-span-2">5</div>
    //     // </div>

    // // return (
    // //   <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 bg-gray-200">
    // //     <ul className="flex px-4 text-white">
    // //       <li>aaaaaa</li>
    // //       <li>aaaaaa</li>
    // //       <li>aaaaaa</li>
    // //     </ul>
    // //   </div>
    );
  }
}
