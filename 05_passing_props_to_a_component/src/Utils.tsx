// Define una función llamada getImageUrl
export function getImageUrl(person: { imageId: string }, size = 's'): string {
    // Retorna una URL de imagen compuesta
    return (
        // URL base de Imgur
        'https://i.imgur.com/' +
        // Concatena el imageId proporcionado
        person.imageId +
        // Concatena el tamaño de imagen especificado
        size +
        // Agrega la extensión de archivo de la imagen
        '.jpg'
    );
}
