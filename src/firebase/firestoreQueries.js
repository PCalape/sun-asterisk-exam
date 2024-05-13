import { collection, query, orderBy, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from './firestore.js';

export async function addArticle(title, content) {
    try {
        const docRef = await addDoc(collection(db, "articles"), {
            title,
            content,
            createdDate: new Date()
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function fetchAllArticles() {
    try {
        const q = query(collection(db, "articles"), orderBy("createdDate", "desc"));
        const querySnapshot = await getDocs(q);
        const articles = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });
        return articles.map(article => {
            const { seconds, nanoseconds } = article.createdDate;
            const milliseconds = seconds * 1000 + nanoseconds / 1000000;
            const date = new Date(milliseconds);
            const dateString = date.toLocaleString();
            return { id: article.id, title: article.title, content: article.content, createdDate: dateString }
        });
    } catch (e) {
        console.error("Error fetching documents: ", e);
    }
}

export async function deleteArticle(articleId) {
    try {
        await deleteDoc(doc(db, "articles", articleId));
        console.log("Article deleted successfully");
    } catch (error) {
        console.error("Error deleting article: ", error);
    }
}

export async function editArticle(articleId, updatedData) {
    try {
        await updateDoc(doc(db, "articles", articleId), { title: updatedData.title, content: updatedData.content });
        console.log("Article updated successfully");
    } catch (error) {
        console.error("Error updating article: ", error);
    }
}