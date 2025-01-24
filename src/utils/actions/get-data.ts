export async function getDataHome() {
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67937bc603a8330f06b9d858?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)
        
        if(!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        return response.json();

    } catch (error) {
        throw new Error("Failed to fetch data.");
    }
}