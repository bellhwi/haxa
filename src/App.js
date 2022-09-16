import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { db } from './firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setLastUpdatedTime } from './store'
import Home from './pages/Home'
import Clones from './pages/Clones'
import Premiums from './pages/Premiums'
import Seeds from './pages/Seeds'
import Coming from './pages/Coming'
import Detail from './pages/Detail'
import Inventory from './pages/Inventory'
import Admin from './pages/Admin'
import Edit from './pages/Edit'
import Add from './pages/Add'

function App() {
  const dispatch = useDispatch()
  const lastUpdatedTime = useSelector((state) => state.lastUpdatedTime)

  async function getAllDocs() {
    const fetchDocs = new Promise((res, rej) => {
      res(getDocs(collection(db, 'products')))
    })
    const allDocs = await fetchDocs
    let dataArr = []

    allDocs.forEach((doc) => {
      dataArr.push(doc.data())
    })

    dataArr.sort((a, b) => {
      return parseInt(b.pid) - parseInt(a.pid)
    })
    dispatch(setData(dataArr))
  }

  useEffect(() => {
    Date.prototype.timeNow = function () {
      const time =
        (this.getHours() < 10 ? '0' : '') +
        (this.getHours() > 12 ? this.getHours() - 12 : this.getHours()) +
        ':' +
        (this.getMinutes() < 10 ? '0' : '') +
        this.getMinutes() +
        (this.getHours() >= 12 ? ' pm' : ' am')

      return time
    }

    getDoc(doc(db, 'last-updated', 'updated')).then((docSnap) => {
      dispatch(setLastUpdatedTime(docSnap.data().time))
    })
  }, [])

  useEffect(() => {
    getAllDocs()
  }, [lastUpdatedTime])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/clones' element={<Clones />} />
      <Route path='/premiums' element={<Premiums />} />
      <Route path='/seeds' element={<Seeds />} />
      <Route path='/coming' element={<Coming />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/product/:name' element={<Detail />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/:name' element={<Edit />} />
      <Route path='/admin/add' element={<Add />} />
    </Routes>
  )
}

export default App
