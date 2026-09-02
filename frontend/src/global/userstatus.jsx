import { create } from 'zustand';

const updateuser = create((set) => ({
  newuser: true,
  setNewUser: ( ) => set({ newuser: false }),
}));

export default updateuser;