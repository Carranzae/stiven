// scripts.js

$(document).ready(function() {
    const products = [
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
    ];

    const cart = [];

    const renderProducts = (productList) => {
        $('#product-grid').empty();
        productList.forEach(product => {
            $('#product-grid').append(`
                <div class="col-md-4 product-item animate__animated animate__fadeIn">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <h4>${product.name}</h4>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                </div>
            `);
        });
    };

    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        cart.push(product);
        renderCart();
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: `${product.name} ha sido agregado al carrito.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const renderCart = () => {
        $('.cart-items').empty();
        cart.forEach((item, index) => {
            $('.cart-items').append(`
                <div class="cart-item">
                    <p>${item.name} - ${item.price}</p>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            `);
        });
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        renderCart();
    };

    $('#searchBarProducts').on('input', function() {
        const query = $(this).val().toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts);
    });

    $('#chatbotBtn').click(function() {
        $('#chatbox').toggle();
    });

    const chatbotResponses = {
        "hola": "Hola, ¿en qué te puedo ayudar?",
        "¿cuáles son sus productos?": "Ofrecemos una variedad de pescados frescos como Salmón, Atún, Camarones, Langosta y más.",
        "¿cuál es el horario de atención?": "Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM.",
        "¿dónde están ubicados?": "Estamos ubicados en Lima, Perú."
    };

    $('#chatInput').keypress(function(e) {
        if (e.which === 13) {
            const userMessage = $(this).val().toLowerCase();
            $('#messages').append(`<div class="user-message message"><i class="fas fa-user"></i> ${userMessage}</div>`);
            $(this).val('');
            showBotTyping();
            setTimeout(() => {
                const botResponse = chatbotResponses[userMessage] || `
                    No puedo responder a eso. Por favor, contacta con nosotros por:
                    <a href="https://wa.me/51994466800" target="_blank" class="btn btn-success btn-sm">WhatsApp</a> o 
                    <a href="mailto:pedrocarranzaescobedo001@gmail.com" class="btn btn-primary btn-sm">Correo Electrónico</a>.
                `;
                hideBotTyping();
                $('#messages').append(`<div class="bot-message message"><i class="fas fa-robot"></i> ${botResponse}</div>`);
            }, 1000);
        }
    });

    function showBotTyping() {
        $('#messages').append(`
            <div class="bot-message bot-typing message">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        `);
    }

    function hideBotTyping() {
        $('.bot-typing').remove();
    }

    $('#clearCartBtn').click(function() {
        cart.length = 0;
        renderCart();
    });

    $('#checkoutBtn').click(function() {
        Swal.fire({
            title: 'Pedido realizado con éxito',
            text: "Tu pedido ha sido registrado. Próximamente nos pondremos en contacto contigo.",
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            window.location.href = "checkout.html"; // Redirigir a la página de pago
        });
    });

    renderProducts(products);
});
