import { Client, Databases, Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
.setEndpoint(ENDPOINT)
.setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    // 1. Use Appwrite SDK do check if he search term xists in the database
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("searchTerm", searchTerm)
        ]);
        
        // 2. If it exists, update the count
        if(result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            });
        } else {
            // 3. If it doesn't exist, create a new record with count = 1
            await database.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
                searchTerm: searchTerm,
                count: 1,
                movieId: movie ? movie.id : null,
                // posterUrl: movie ? movie.poster_path : null
                posterUrl: movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null
            });

        }
    } catch (error) {
        console.error("Error updating search count:", error);
    }

}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.orderDesc("count"),
            Query.limit(5)
        ]);
        return result.documents;
    } catch (error) {
        console.log(error)
    }
}