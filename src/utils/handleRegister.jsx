//To send the data to the endpoint
// First call to get the token acces
export const handleRegister = async (userData) => {
    const { email, name, phone, option } = userData;
    // Double verification fields
    if (!email || !name || !phone || !option) {
        alert("Por favor, llene todos los campos requeridos.");
        return;
    }

    try {
        /* Convert ot use by content type application x-www */
        const formData = new URLSearchParams();
        formData.append("client_id", "spring-client-api-rest");
        formData.append("grant_type", "password");
        formData.append("username", "sap");
        formData.append("password", "vN8VXFZaedbjd#4WSHdtpo");
        formData.append("client_secret", "X9CYPDjhYDjqb0jKpT89tzafSzFcFDck");

        const response = await fetch(
            "https://auth.spad2.com.co/realms/spring-boot-realm-dev/protocol/openid-connect/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            }
        );

        if (response.ok) {
            const data = await response.json();
            // Send the token & userInfo to the endpoint
            handleRequest(data, userData);
        } else {
            console.error("Error en la solicitud:", response.status);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
};

//Make the request to the endpoint to register the user
const handleRequest = async (token, userData) => {
    try {
        const { access_token } = token;
        const response = await fetch(
            "https://gateway.3sg.com.co/api/receive-json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify(userData),
            }
        );
        if (response.ok) {
            console.log("Datos enviados correctamente.");
        } else {
            console.error("Error al enviar los datos:", response.status);
        }
    } catch (error) {
        console.error("Error al enviar los datos:", error);
    }
};
