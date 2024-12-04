import { useContext, useEffect, useState } from "react";
import ProductContext from '../context/ProductContext';
import DropdownImage from '../assets/dropdown_icon.png'
import ProductItem from "./ProductItem";
const Collection = () => {

    const { products, Search, showSearch } = useContext(ProductContext)
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant')


    const toggleCategory = (e) =>{
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
            
        }
        else{
            setCategory(prev =>[...prev, e.target.value]);
        }
    }


    const toggleSubCategory = (e) =>{
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item!== e.target.value));
            
        }
        else{
            setSubCategory(prev =>[...prev, e.target.value]);
        }
    }
    // // to check the category of mens womens and kids
    // useEffect(()=>{
    //     console.log(category)
    // },[category])

    // useEffect(()=>{
    //     console.log(subCategory);
    // },[subCategory])


    const applyFilter = () =>{
        let productsCopy = products.slice();

        if (showSearch && Search){
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(Search.toLowerCase()));

        }
        if(category.length > 0){
            productsCopy = productsCopy.filter(item => category.includes(item.category))
            }
            if(subCategory.length > 0){
                productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        
                }
            setFilterProducts(productsCopy)
            
    }
    const sortProduct = ()=>{
        let filterCopyProduct = products.slice();
        switch(sortType){
            case 'low-high':
                setFilterProducts(filterCopyProduct.sort((a, b)=> a.price - b.price))
                break;
            case 'high-low':
                setFilterProducts(filterCopyProduct.sort((a, b)=> b.price - a.price))
                break;
            default:
                applyFilter();
                break;
        }
    }

    // for sort type if the sortype changes it will be executed
    useEffect(()=>{
        sortProduct();  
    },[sortType])
    

    // to show all products
    // useEffect(() => {
    //     setFilterProducts(products)
    // }, [])

    useEffect(()=>{
        applyFilter();
    },[category, subCategory, Search, showSearch])

    return (
        <div className="px-12 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">


            {/* Filter Options */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl font-medium flex items-center gap-2 cursor-pointer mb-10">FILTERS
                    <img src={DropdownImage} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
                </p>

                {/* Category Options */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/>Mens
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/>Womens
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
                        </p>
                    </div>
                </div>

                {/* SubCategories */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">Type</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Winterwear'}  onChange={toggleSubCategory}/>Winterwear
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="">
                <div className="flex justify-between items-center text-base sm:text-2xl mb-8">
                    {/* All Collections on the left */}
                    <div className="inline-flex gap-2 items-center">
                        <p className="text-gray-500">
                            All <span className="text-gray-700 font-medium">COLLECTIONS</span>
                        </p>
                        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                    </div>

                    {/* Sort Dropdown on the right */}
                    <select
                        className="border-2 border-gray-300 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 w-44 sm:w-60"
                        id=""
                        onChange={(e)=> setSortType(e.target.value)}
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Price (Low to High)</option>
                        <option value="high-low">Sort by: Price (High to Low)</option>
                        {/* <option value="arrivals">Sort by: New Arrivals</option>
                        <option value="sellers">Sort by: Best Sellers</option> */}
                    </select>


                </div>

                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  gap-y-6">
                    {filterProducts.length > 0 ? (
                        filterProducts.map((item, index) => (
                            <ProductItem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>

        </div>

    );
}
export default Collection;