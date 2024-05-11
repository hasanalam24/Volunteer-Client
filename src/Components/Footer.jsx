import { IoMdMailUnread } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img className="w-[110px] h-[80px]" src="https://i.ibb.co/KNyrbGC/Human-Logo.png" alt="" />

                    <p className="ml-5 -mt-6">Human Plannet.<br />Providing reliable tech since 2024</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <div className="flex gap-3 items-center justify-center">
                        <IoMdMailUnread className="text-lg"></IoMdMailUnread>
                        <p>hasanalam365@gmail.com</p>
                    </div>
                    <Link to="https://www.facebook.com/mdalam.islam.351/" className="flex gap-3 items-center justify-center">
                        <FaFacebookSquare className="text-lg"></FaFacebookSquare>
                        <FaXTwitter className="text-lg"></FaXTwitter>


                    </Link>


                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Human Plannet Org.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;