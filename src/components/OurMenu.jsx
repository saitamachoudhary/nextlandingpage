const OurMenu = () => {
    const coffeeHome = [
        { name: 'Liberica', price: '$19.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-07-free-img.png', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Arabica', price: '$24.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-06-free-img.png', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Robusta', price: '$29.50', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-05-free-img.png', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Excelsa', price: '$34.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'src/image/product-04-free-img.png', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
    ];
    return (
        <div className="DrinkSection">
            <div className="flex flex-col items-center">
                <h1 className="lg:text-[4rem] font-bold md:text-[3.5rem] text-[2.3rem] mt-20 text-black">Our Products</h1>
                <div className="h-[0.8px] w-[60px] bg-black mb-3"></div>
                <p className="text-center text-[0.9rem] mb-16 lg:w-[600px] text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {coffeeHome.map((drink, index) => (
                        <div key={index} className={`${drink.color} p-4 rounded-2xl shadow-lg flex flex-col items-center w-auto`}>
                            <img src={drink.img} alt={drink.name} className="w-60 mb-1" />
                            <p className="text-[1.3333333333333rem] font-semibold text-black">{drink.price}</p>
                            <h2 className="text-[2rem] font-bold text-black">{drink.name}</h2>
                            <p className="text-center text-[0.9rem] text-black">{drink.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurMenu