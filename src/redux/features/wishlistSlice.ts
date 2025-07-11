import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IAlbums, IComments, IPhotos, IPosts, ITodos, IUsers } from '../../types'

export interface WishlistState {
  users: IUsers[]
  comments: IComments[]
  posts: IPosts[]
  photos: IPhotos[]
  todos: ITodos[]
  albums: IAlbums[]
}

const initialState: WishlistState = {
  users: [],
  comments: [],
  posts: [],
  photos: [],
  todos: [],
  albums: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toogleUser: (state, action: PayloadAction<IUsers>) => {
      const isExist = state.users.some((item) => item.id === action.payload.id)
      if(isExist){
        state.users = state.users.filter((i)=> i.id !== action.payload.id)
      }else{
        state.users.push(action.payload)
      }
    },
    toogleComment: (state, action: PayloadAction<IComments>) => {
      const isExist = state.comments.some((item) => item.id === action.payload.id)
      if(isExist){
        state.comments = state.comments.filter((i)=> i.id !== action.payload.id)
      }else{
        state.comments.push(action.payload)
      }
    },
    tooglePost: (state, action: PayloadAction<IPosts>) => {
      const isExist = state.posts.some((item) => item.id === action.payload.id)
      if(isExist){
        state.posts = state.posts.filter((i)=> i.id !== action.payload.id)
      }else{
        state.posts.push(action.payload)
      }
    },
    tooglePhoto: (state, action: PayloadAction<IPhotos>) => {
      const isExist = state.photos.some((item) => item.id === action.payload.id)
      if(isExist){
        state.photos = state.photos.filter((i)=> i.id !== action.payload.id)
      }else{
        state.photos.push(action.payload)
      }
    },
    toogleTodo: (state, action: PayloadAction<ITodos>) => {
      const isExist = state.todos.some((item) => item.id === action.payload.id)
      if(isExist){
        state.todos = state.todos.filter((i)=> i.id !== action.payload.id)
      }else{
        state.todos.push(action.payload)
      }
    },
    toogleAlbum: (state, action: PayloadAction<IAlbums>) => {
      const isExist = state.albums.some((item) => item.id === action.payload.id)
      if(isExist){
        state.albums = state.albums.filter((i)=> i.id !== action.payload.id)
      }else{
        state.albums.push(action.payload)
      }
    },
  },
})

export const { toogleUser, tooglePost, toogleComment, toogleAlbum, tooglePhoto, toogleTodo } = wishlistSlice.actions

export default wishlistSlice.reducer
