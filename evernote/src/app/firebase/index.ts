import * as firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDFZIyHtw7RLfY_jYSm2ge6AG0Ncpx182c",
    authDomain: "angularevernote.firebaseapp.com",
    databaseURL: "https://angularevernote.firebaseio.com",
    projectId: "angularevernote",
    storageBucket: "angularevernote.appspot.com",
    messagingSenderId: "586453247537",
    appId: "1:586453247537:web:489dd5cf0ee5f579061710"
});

export class Note {
    constructor(public id: string, public content: string, public timestamp: Date) { }
}

// export const retrieveNotes = (from = 0, size = 2) => {
//     const query = app.firestore().collection('notes')
//         .where(firebase.firestore.FieldPath.documentId(), '>', from.toString())
//         .limit(size);

//     return query.get().then(response => {
//         const newNotes = response.docs.map(doc => {
//             const note = doc.data();
//             return new Note(doc.id, note.content, note.date.toDate());
//         });
        
//         return newNotes;
//     });
// };


const lorem = 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.';
const timeout = 2000;

export const retrieveNotes = (from = 0, size = 5) => {
    return new Promise((resolve) => {
        const notes = [];
        for(let i = from; i < from + size; i++) {
            let date = new Date(2008, 1, 1);
            date.setDate(date.getDate() + i);
            notes.push(new Note((i + 1).toString(), lorem, date));
        }

        setTimeout(() => resolve(notes), timeout);
    });
};

export default { retrieveNotes, Note };