const OurMenu = () => {
    const coffeeHome = [
        { name: 'Liberica', price: '$19.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/funny-3d-illustration-cartoon-teenage-girl_183364-80399.jpg?w=826&t=st=1727501522~exp=1727502122~hmac=faeaec3e8114aaa61cf831c6bd35c88ab929c85a1d673bba7c54d01615c9dec7', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Arabica', price: '$24.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/fun-3d-illustration-medieval-man-with-vr-helmet_183364-81201.jpg?w=740&t=st=1727500864~exp=1727501464~hmac=6e79d3f20374fe36c978c7bb594964da1f26ac292515884d00f8cada5eefbf8c', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Robusta', price: '$29.50', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/3d-cartoon-character-funny-teenager_183364-80296.jpg?w=826&t=st=1727500989~exp=1727501589~hmac=00d8ff2d0c379133dbb2cb78ea6ba9f8a852b7ee251e6999f0e3decdb5e656c9', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Excelsa', price: '$34.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81191.jpg?t=st=1727501245~exp=1727504845~hmac=1f00ec4efb9fa9635edb94b66a5c09a53f308c28f7f5fa9f5f5051f9d6482f87&w=826', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Excelsa', price: '$34.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81191.jpg?t=st=1727501245~exp=1727504845~hmac=1f00ec4efb9fa9635edb94b66a5c09a53f308c28f7f5fa9f5f5051f9d6482f87&w=826', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Excelsa', price: '$34.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81191.jpg?t=st=1727501245~exp=1727504845~hmac=1f00ec4efb9fa9635edb94b66a5c09a53f308c28f7f5fa9f5f5051f9d6482f87&w=826', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Liberica', price: '$19.90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/funny-3d-illustration-cartoon-teenage-girl_183364-80399.jpg?w=826&t=st=1727501522~exp=1727502122~hmac=faeaec3e8114aaa61cf831c6bd35c88ab929c85a1d673bba7c54d01615c9dec7', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Arabica', price: '$24.20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/fun-3d-illustration-medieval-man-with-vr-helmet_183364-81201.jpg?w=740&t=st=1727500864~exp=1727501464~hmac=6e79d3f20374fe36c978c7bb594964da1f26ac292515884d00f8cada5eefbf8c', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
        { name: 'Robusta', price: '$29.50', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: 'https://img.freepik.com/free-photo/3d-cartoon-character-funny-teenager_183364-80296.jpg?w=826&t=st=1727500989~exp=1727501589~hmac=00d8ff2d0c379133dbb2cb78ea6ba9f8a852b7ee251e6999f0e3decdb5e656c9', color: 'bg-gradient-to-r from-purple-200 via-white to-white' },
    ];
    return (
        <div className="DrinkSection py-4">
        <div className="flex flex-col items-center">
            <h1 className="lg:text-[4rem] font-bold md:text-[3.5rem] text-[2.3rem] text-black">Our Products</h1>
            <div className="h-[0.8px] w-[60px] bg-black mb-3"></div>
            <p className="text-center text-[0.9rem] mb-16 lg:w-[600px] text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className="w-full overflow-x-auto no-scrollbar">
                <div className="cards flex gap-4 py-2">
                    {coffeeHome.map((drink, index) => (
                        <div key={index} className={`${drink.color} relative group p-4 rounded-2xl shadow-lg flex flex-col items-center min-w-[250px] overflow-hidden cursor-pointer`}>

                            <img src={drink.img} alt={drink.name} className="w-60 mb-1 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:object-cover group-hover:absolute" />
                            
                            <div className="text-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-50%]">
                                <p className="text-[1.3333333333333rem] font-semibold text-black">{drink.price}</p>
                                <h2 className="text-[2rem] font-bold text-black">{drink.name}</h2>
                                <p className="text-center text-[0.9rem] text-black">{drink.description}</p>
                            </div>
    
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <h2 className="text-white text-2xl font-bold opacity-100 transition-all duration-300 group-hover:opacity-100">{drink.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default OurMenu