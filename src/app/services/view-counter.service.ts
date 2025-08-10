import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, updateDoc, increment, setDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ViewCounterService {
  constructor(private firestore: Firestore) {}

  async incrementGlobalView() {
    const ref = doc(this.firestore, 'views/global');
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, { count: 1 });
    } else {
      await updateDoc(ref, { count: increment(1) });
    }
  }

  async getGlobalView(): Promise<number> {
    const snap = await getDoc(doc(this.firestore, 'views/global'));
    return snap.exists() ? snap.data()['count'] : 0;
  }

  async incrementPageView(pageId: string) {
    const ref = doc(this.firestore, 'pageViews', pageId);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, { count: 1 });
    } else {
      await updateDoc(ref, { count: increment(1) });
    }
  }

  async getPageView(pageId: string): Promise<number> {
    const snap = await getDoc(doc(this.firestore, 'pageViews', pageId));
    return snap.exists() ? snap.data()['count'] : 0;
  }
}
