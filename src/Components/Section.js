import ImageSlider from "./ImageSlider";
import NewsLetter from "./NewsLetter";

function Section() {
  const products = [
    {
      name: "Vonna Neva Walnut Sandalye Chair",
      img: "/chair.png",
      price: "100.2 $",
      bgColor: "#D3FBD9",
    },
    {
      name: "Wood lamp, Floor Lamp, Lambader, Decorative",
      img: "/lamp.png",
      price: "200.2 $",
      bgColor: "#FFE4BD",
    },
    {
      name: "NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple",
      img: "/sofa.png",
      price: "140.2 $",
      bgColor: "#D9ABFD",
    },
    {
      name: "Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches",
      img: "/cusion.png",
      price: "160.2 $",
      bgColor: "#FDF0AB",
    },
  ];

  const products2 = [
    {
      name: "Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair",
      img: "/lamp2.png",
      price: "100.2 $",
      bgColor: "#FBF7D3",
    },
    {
      name: "Iphone 12 128 GB (Red) Apple",
      img: "/iPhone.png",
      price: "200.2 $",
      bgColor: "#FFE4BD",
    },
    {
      name: "Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair",
      img: "/cream.png",
      price: "140.2 $",
      bgColor: "#D9ABFD",
    },
  ];

  const products3 = [
    {
      name: "Distressed Tote Leather Bag Leather Bag",
      img: "/purse.png",
      price: "100.2 $",
      // bgColor: "FBF7D3",
    },
    {
      name: "Womens Cognac Leather Elastic Straps",
      img: "/chappal.png",
      price: "200.2 $",
      // bgColor: "FFE4BD",
    },
    {
      name: "Distressed Tote Leather Bag Leather Bag",
      img: "/bag.png",
      price: "140.2 $",
      // bgColor: "D9ABFD",
    },
    {
      name: "High Top Canvas Shoes",
      img: "/shoes.png",
      price: "142.2 $",
      // bgColor: "D9ABFD",
    },
    {
      name: "Rose Gold Moissanite Vintage Wedding Ring Set",
      img: "/ring.png",
      price: "400.2 $",
      // bgColor: "D9ABFD",
    },
    {
      name: "Blue Topaz Bangle 24K Gold Plated Handmade",
      img: "/bangle.png",
      price: "200.2 $",
      // bgColor: "D9ABFD",
    },
  ];

  const getLimitedString = (getName) => {
    var trimmedFromEnd = getName.substring(0, 50);

    return trimmedFromEnd;
  };

  const independentItems = [
    {
      id: 1,
      src: "products/1.png",
      name: "Craft Kits",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "products/2.png",
      name: "Throw Pillows",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "products/3.png",
      name: "Natural Glass",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "products/4.png",
      name: "Self-care",
      alt: "Image 1",
    },
    {
      id: 5,
      src: "products/5.png",
      name: "Wall Decor",
      alt: "Image 2 ",
    },
    {
      id: 6,
      src: "products/6.png",
      name: "Wedding",
      alt: "Image 3",
    },
    {
      id: 7,
      src: "products/7.png",
      name: "Life Style",
      alt: "Image 3",
    },
  ];

  const uniqueItems = [
    {
      id: 1,
      name: "Distressed Tote Leather Bag Leather Bag",
      src: "/purse.png",
      alt: "Image 1",
    },
    {
      id: 2,
      name: "Womens Cognac Leather Elastic Straps",
      src: "/chappal.png",
      alt: "Image",
    },
    {
      id: 3,
      name: "Distressed Tote Leather Bag Leather Bag",
      src: "/bag.png",
      alt: "Image",
    },
    {
      id: 4,
      name: "High Top Canvas Shoes",
      src: "/shoes.png",
      alt: "Image",
    },
    {
      id: 5,
      name: "Rose Gold Moissanite Vintage Wedding Ring Set",
      src: "/ring.png",
      alt: "Image",
    },
    {
      id: 6,
      name: "Blue Topaz Bangle 24K Gold Plated Handmade",
      src: "/bangle.png",
      alt: "Image",
    },
  ];

  return (
    <section className="grid gap-5">
      <div className="grid grid-cols-3 gap-5">
        <img src="/cat1.png" />
        <img src="/cat2.png" />
        <img src="/cat3.png" />
      </div>

      <div className="grid grid-cols-4 text-left gap-5">
        {products.map((val) => {
          return (
            <div className={`rounded-lg p-5 bg-[${val.bgColor}] cursor-pointer`}>
              <div>
                <img src={val.img} className="m-auto" />
              </div>

              <div className="grid gap-5">
                <div>
                  <p className="mb-2">Colors</p>
                  <div className="grid grid-cols-7 gap-3 w-6/12">
                    <span className="grid w-4 h-4 bg-[#7CB93E] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#33ABC6] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#1CCD8D] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#3F65EA] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#F64A69] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#A635EC] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#F9A85D] rounded-2xl"></span>
                  </div>
                </div>

                <p>
                  {getLimitedString(val.name)}{" "}
                  {val.name.length > 50 ? "..." : ""}
                </p>
                <p>{val.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="flex text-left items-center justify-between bg-[#F5F6F8] p-5">
          <div className="grid gap-2">
            <h2 className="font-bold text-base">
              A community <br /> doing good
            </h2>
            <p className="text-xs">
              Commerce is a global online <br /> marketplace, where people.
            </p>
          </div>

          <img src="/community.png" />
        </div>

        <div className="flex text-left items-center justify-between bg-[#F5F6F8] p-5">
          <div className="grid gap-2">
            <h2 className="font-bold text-base">
              Support independent <br /> creators
            </h2>
            <p className="text-xs">
              Just millions of people selling <br /> the things they love.
            </p>
          </div>

          <img src="/creators.png" />
        </div>

        <div className="flex text-left items-center justify-between bg-[#F5F6F8] p-5">
          <div className="grid gap-2">
            <h2 className="font-bold text-base">
              Peace <br /> of mind
            </h2>
            <p className="text-xs">
              Privacy is the highest priority <br />
              of our dedicated team.
            </p>
          </div>

          <img src="/peace.png" />
        </div>
      </div>

      <div className="tag text-left">
        <h1 className="text-lg font-bold">
          Find things you'll love. Support independent sellers.
        </h1>
      </div>
      <ImageSlider images={independentItems} noOfSlides="7" />

      <div className="tag text-left">
        <h1 className="text-lg font-bold">
          Discover unique hand-picked items.
        </h1>
      </div>
      <ImageSlider images={uniqueItems} noOfSlides="6" />

      <div className="grid grid-cols-4 text-left gap-5">
        <img src="/shoe.png" />
        {products2.map((val) => {
          return (
            <div className={`rounded-lg p-5 bg-[${val.bgColor}]`}>
              <div>
                <img src={val.img} className="m-auto" />
              </div>

              <div className="grid gap-5">
                <div>
                  <p className="mb-2">Colors</p>
                  <div className="grid grid-cols-7 gap-3 w-6/12">
                    <span className="grid w-4 h-4 bg-[#7CB93E] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#33ABC6] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#1CCD8D] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#3F65EA] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#F64A69] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#A635EC] rounded-2xl"></span>
                    <span className="grid w-4 h-4 bg-[#F9A85D] rounded-2xl"></span>
                  </div>
                </div>

                <p>
                  {getLimitedString(val.name)}{" "}
                  {val.name.length > 50 ? "..." : ""}
                </p>
                <p>{val.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-6 gap-5">
        {products3.map((val) => {
          return (
            <div className="grid p-5 text-left">
              <div className="relative">
                <img src={val.img} className="m-auto" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-[0] right-[0]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>

              <div className="grid gap-3">
                <p className="text-xs">{val.name}</p>
                <p className="text-sm">{val.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      <NewsLetter />
    </section>
  );
}

export default Section;
