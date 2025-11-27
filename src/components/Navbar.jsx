import { navLinks, navIcons } from "#constants/index.js";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className="font-georama text-2xl font-bold">Mouctar Portfolio</p>

            <ul>
                {navLinks.map(( {id,name} ) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(( {id,imag} ) => (
                    <li key={id}>
                        <img src={imag} className="icon-hover" alt={`icon-${id}`}/>
                    </li>
                    ))}
                </ul>

                <time className="font-roboto text-sm">{dayjs().format("ddd MMM D H:mm A")}</time>

            </div>
    </nav>
    );
};

export default Navbar;