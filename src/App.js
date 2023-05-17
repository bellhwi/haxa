import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { db } from './firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setLastUpdatedTime } from './store'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
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
    getAllDocs()
  }, [lastUpdatedTime])

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

  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'AdwGY2-UcsMXA-b71uHBfzJ2mLuCFhpwN97uDR1vZmW-4RKLL1qBE8xjKFnsKMuM0tRqND7z57pSHQtC',
      }}
    >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
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
    </PayPalScriptProvider>
  )
}

export default App
