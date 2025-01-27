export async function getDataHome() {
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67937bc603a8330f06b9d858?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, { next: { revalidate: 120 } })
        
        if(!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        return response.json();

    } catch (error) {
        throw new Error("Failed to fetch data.");
    }
}


export async function getDataSubmenu() {
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`, { next: { revalidate: 120 } })
        
        if(!response.ok) {
            throw new Error("Failed to fetch menu data.");
        }

        return response.json();

    } catch (error) {
        throw new Error("Failed to fetch menu data.");
    }
}


export async function getItemBySlug(itemSlug: string) {

    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props: 'slug,title,metadata',
        read_key: process.env.READ_KEY as string
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {

        const response = await fetch(url, { next: { revalidate: 120 } });

        if(!response.ok) {
            throw new Error("Failed to fetch item data.");
        }

        return response.json();
        
    } catch (error) {
        throw new Error("Failed to fetch item data.");
    }
}