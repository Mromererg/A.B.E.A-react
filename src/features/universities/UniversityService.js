// src/features/universities/universityService.js
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "../../app/firebase";

export function fetchUniversities(callback) {
    const uniRef = ref(database, 'universiteler'); // Firebase'de üniversiteler verisinin olduğu node
    onValue(uniRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const universitiesArray = Object.entries(data).map(([key, value]) => ({
                id: key,
                name: value.name,
            }));
            callback(universitiesArray);
        } else {
            callback([]);
        }
    });
}
