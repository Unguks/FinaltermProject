import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function NavbarChannel() {

    return ( 
        <div className="flex flex-row justify-between bg-[#28282F] items-center px-5 py-3 sticky top-0 z-50">
            <h2 className="text-md font-bold">Play</h2>
            <Link to="/search">
                <Icon icon="zondicons:search" width={20}/>
            </Link>
        </div>
     );
}

export default NavbarChannel;