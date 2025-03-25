const API_URL = 'http://localhost:5000/api';

export const getProduits = async () => {
    const response = await fetch(`${API_URL}/produits`);
    return response.json();
};
