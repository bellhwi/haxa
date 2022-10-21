import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
  },
})

export const { setUser } = user.actions

const data = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData(state, action) {
      return action.payload
    },
  },
})

export const { setData } = data.actions

const filteredItem = createSlice({
  name: 'filteredItem',
  initialState: [],
  reducers: {
    setFilteredItem(state, action) {
      return action.payload
    },
  },
})

export const { setFilteredItem } = filteredItem.actions

const filter = createSlice({
  name: 'filter',
  initialState: { breeder: [], flowerTime: [], flavor: [] },
  reducers: {
    setFilter(state, action) {
      return action.payload
    },
  },
})

export const { setFilter } = filter.actions

const lastUpdatedTime = createSlice({
  name: 'lastUpdatedTime',
  initialState: '',
  reducers: {
    setLastUpdatedTime(state, action) {
      return action.payload
    },
  },
})

export const { setLastUpdatedTime } = lastUpdatedTime.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    data: data.reducer,
    filteredItem: filteredItem.reducer,
    filter: filter.reducer,
    lastUpdatedTime: lastUpdatedTime.reducer,
  },
})
