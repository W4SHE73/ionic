import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, 
        collection,
        collectionData,
        doc, 
        docData, 
        addDoc, 
        deleteDoc, 
        updateDoc 
      } from '@angular/fire/firestore';

export interface Note {
  id?: string;
  CVE: string;
  descripcion: string;
  plataforma: string;
  tipo: string;
  vulnerabilidad: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColectionService {

  constructor( private firestore: Firestore) { }

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, {idField: 'id'}) as Observable<Note[]>;
  }

  getNoteById(id): Observable<Note> { 
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as Observable<Note>;
  }
  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }
  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { 
      CVE: note.CVE, descripcion: note.descripcion , plataforma: note.plataforma, tipo: note.tipo,vulnerabilidad: note.vulnerabilidad, 
    });
  }
}
