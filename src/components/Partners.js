const Partners = () => {
    const brands = [
        "/partners/stiiizy.png",
        "/partners/galaxy-treats.png",
        "/partners/canna-river.png"
    ]

    return (
        <div className="partners">
            <div className="partners-inner">
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
                {brands.map((brand) => {
                    return (
                        <div className="brand" key={brand}>
                            <img src={brand} alt="Brand" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Partners