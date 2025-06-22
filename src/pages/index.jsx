import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShoesDetail from "@/components/shoes-detail";
import Nav from "@/components/nav";
import About from "@/components/about";
import MiniCaroussel from "@/components/mini-caroussel";
import PreLoader from "@/pre-loader/pre-loader";
import shoesData from "@/data/data";
import SearchCartFilter from "@/components/search-cart-filter";
import { useFilterStore, useMenuStore } from "@/store/zustand";
import Contact from "@/components/contact";
import Reel from "@/components/reel";
import ShoesPhotosDetail from "@/components/shoes-photos-detail";
import Cart from "@/components/cart";
import Menu from "@/components/menu";

const Home = () => {
  const [selectedShoes, setSelectedShoes] = useState(0);
  const [cartModal, setCartModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [cart, setCart] = useState([]);
  const { selectedFilter } = useFilterStore();
  const { selectedMenu } = useMenuStore();
  const filteredData = shoesData.filter(
    (item) =>
      item.category === selectedFilter.category &&
      item.subcategory === selectedFilter.subcategory
  );

  useEffect(() => {
    setSelectedShoes(0);
  }, [selectedFilter]);

  return (
    <>
      <PreLoader />
      <main className="h-screen">
        <motion.div
          initial={{ scale: 0.1 }}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
              delay: 1.75,
            },
          }}
          className="fixed bottom-[10px] left-[15px] w-[220px] h-[220px] rounded-full bg-[#1a1a1a] blur-[100px]"
        />

        <div className="absolute top-0 left-0 w-full py-5 bg-s border-b border-bb flex items-center justify-between z-50 max-lg:z-60 max-lg:fixed">
          {/* NAV */}
          <div className="size-full flex-[1.5] px-10 max-ds:px-5">
            <Nav setMenuModal={setMenuModal} />
          </div>
          <div className="flex-[1]"></div>
          {/* SEARCH / CART */}
          <div className="size-full flex-[1.5] px-10 max-ds:px-5">
            <SearchCartFilter
              setCartModal={setCartModal}
              cart={cart}
              selectedShoes={selectedShoes}
              filteredData={filteredData}
            />
          </div>
        </div>

        <div
          className="relative flex items-start justify-between 
        max-lg:grid-cols-2 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center"
        >
          {/* SIDE CONTENT (About, Contact, etc) */}
          <div className="w-full h-screen pt-[60px]  flex-[1.5] max-lg:order-2">
            {selectedMenu === "about" && <About />}
            {selectedMenu === "agency" && <Agency />}
            {selectedMenu === "reel" && <Reel menuModal={menuModal} />}
            {selectedMenu === "contact" && <Contact />}
          </div>

          {/* SHOES PHOTOS DETAIL */}
          <div className="w-full h-screen flex-[1] overflow-x-scroll z-50 max-lg:order-1 ">
            <ShoesPhotosDetail
              filteredData={filteredData}
              selectedShoes={selectedShoes}
              selectedFilter={selectedFilter}
            />
          </div>

          <div className="w-full h-screen pt-[60px] flex-[1.5] flex flex-col items-start justify-between">
            {/* MINI CAROUSSEL */}

            <MiniCaroussel
              selectedShoes={selectedShoes}
              setSelectedShoes={setSelectedShoes}
              filteredData={filteredData}
              selectedFilter={selectedFilter}
            />

            {/* SHOES DETAIL */}

            <ShoesDetail
              selectedShoes={selectedShoes}
              cart={cart}
              setCart={setCart}
              filteredData={filteredData}
              selectedFilter={selectedFilter}
            />
          </div>
        </div>

        {/* CART MODAL */}
        <AnimatePresence>
          {cartModal && (
            <Cart
              setCartModal={setCartModal}
              cart={cart}
              selectedShoes={selectedShoes}
              cartModal={cartModal}
              setCart={setCart}
            />
          )}
        </AnimatePresence>

        {/* MENU MODAL */}
        <AnimatePresence>
          {menuModal && (
            <Menu setMenuModal={setMenuModal} menuModal={menuModal} />
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Home;
