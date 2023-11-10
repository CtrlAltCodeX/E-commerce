function Footer() {
  return (
    <div className="grid">
      <div className="bg-[#F5F6F8] p-2">
        <p>Commerce, is powered by 100% renewable electricity.</p>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:px-8 gap-7 grid">
        <div className="flex gap-60 text-left">
          <div className="grid gap-12">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-[#EB6D20] text-2xl font-semibold">
                  E-Commerce
                </span>
              </a>
            </div>

            <p>
              Cricklewood,London <br /> NW2 6qg, Uk
            </p>
            <div className="flex gap-2">
              <img src="/facebook.png" className="w-8 cursor-pointer" />
              <img src="/twitter.png" className="w-8 cursor-pointer" />
              <img src="/linkedin.png" className="w-8 cursor-pointer" />
              <img src="/dribbble.png" className="w-8 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-24 ml-4">
            <div className="grid gap-8">
              <b>Shop</b>
              <div className="grid gap-2">
                <p className="hover:text-[#EB6D20] cursor-pointer">Gift Cards</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Site map</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Polka blog</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Login </p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Sign Up</p>
              </div>
            </div>
            <div className="grid gap-8">
              <b>Sell</b>
              <div className="grid gap-2">
                <p className="hover:text-[#EB6D20] cursor-pointer">Sell on Polka</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Teams</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Forums</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Affiliates</p>
              </div>
            </div>
            <div className="grid gap-8">
              <b>About Us</b>
              <div className="grid gap-2">
                <p className="hover:text-[#EB6D20] cursor-pointer">Polka Inc.</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Policies</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Investors</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Career</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Press</p>
              </div>
            </div>
            <div className="grid gap-8">
              <b>Help</b>
              <div className="grid gap-2">
                <p className="hover:text-[#EB6D20] cursor-pointer">Help Center</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Trust and safety</p>
                <p className="hover:text-[#EB6D20] cursor-pointer">Privacy settin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-60">
          <p>© 2022 Commerce, Inc.</p>

          <ul className="flex gap-9">
            <li className="hover:text-[#EB6D20] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#EB6D20] cursor-pointer">Terms of use</li>
            <li className="hover:text-[#EB6D20] cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
