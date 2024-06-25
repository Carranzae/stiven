// react-tienda.js

class Tienda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Pescado Fresco A",
                    price: "$20/kg",
                    image: "https://tse2.mm.bing.net/th?id=OIP.njpMHXjJ4Oy1IZI_PGxZdgHaE8&pid=Api&P=0&h=180",
                    description: "Pescado fresco A de alta calidad, ideal para tus platillos favoritos."
                },
                {
                    id: 2,
                    name: "Pescado Fresco B",
                    price: "$25/kg",
                    image: "https://tse2.mm.bing.net/th?id=OIP.AvnaPev-ERIm9UmNUnSmSQHaEV&pid=Api&P=0&h=180",
                    description: "Pescado fresco B con un sabor delicioso y nutritivo."
                },
                {
                    id: 3,
                    name: "Camarones",
                    price: "$15/kg",
                    image: "https://tse3.mm.bing.net/th?id=OIP.Ufp7XXB1tj-q0Rlyd5pfTAHaE8&pid=Api&P=0&h=180",
                    description: "Camarones frescos, perfectos para ensaladas y mariscos."
                },
                {
                    id: 4,
                    name: "Salmón",
                    price: "$30/kg",
                    image: "https://tse1.mm.bing.net/th?id=OIP.Zoj-QCXOQEXZqLKkRE-mugHaEK&pid=Api&P=0&h=180",
                    description: "Salmón de alta calidad, ideal para una cena saludable."
                },
                {
                    id: 5,
                    name: "Langosta",
                    price: "$50/kg",
                    image: "https://tse4.mm.bing.net/th?id=OIP.Y_uBZaxn_ke6vquMELUGmAHaE8&pid=Api&P=0&h=180",
                    description: "Langosta fresca, perfecta para una ocasión especial."
                },
                {
                    id: 6,
                    name: "Atún",
                    price: "$35/kg",
                    image: "https://tse3.mm.bing.net/th?id=OIP.Yd5PhkfknRXXNGllVtcNgAHaEj&pid=Api&P=0&h=180",
                    description: "Atún fresco, excelente para sushi y sashimi."
                },
                {
                    id: 7,
                    name: "Calamar",
                    price: "$25/kg",
                    image: "https://tse1.mm.bing.net/th?id=OIP.WBr8ORMUArwHqy7UXPxqdAHaE8&pid=Api&P=0&h=180",
                    description: "Calamar fresco, ideal para frituras y parrillas."
                },
                {
                    id: 8,
                    name: "Mejillones",
                    price: "$20/kg",
                    image: "https://tse3.mm.bing.net/th?id=OIP.B1A1Nmo9LoxB7-83iC594QHaD8&pid=Api&P=0&h=180",
                    description: "Mejillones frescos, perfectos para sopas y paellas."
                },
                {
                    id: 9,
                    name: "Pulpo",
                    price: "$40/kg",
                    image: "https://tse2.mm.bing.net/th?id=OIP.aTc4EbpXerojWDUK_4AbqQHaEK&pid=Api&P=0&h=180",
                    description: "Pulpo fresco, ideal para ensaladas y parrilladas."
                },
                {
                    id: 10,
                    name: "Cangrejo",
                    price: "$45/kg",
                    image: "https://tse4.mm.bing.net/th?id=OIP.VAmZ2lbPblAZHP23i9790AHaFi&pid=Api&P=0&h=180",
                    description: "Cangrejo fresco, perfecto para una cena gourmet."
                }
            ],
            cart: []
        };
    }

    addToCart = (product) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, product]
        }));
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: `${product.name} ha sido agregado al carrito.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    render() {
        return (
            <div className="product-grid row">
                {this.state.products.map(product => (
                    <div className="col-md-4 product-item animate__animated animate__fadeIn" key={product.id}>
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(<Tienda />, document.getElementById('react-tienda'));
