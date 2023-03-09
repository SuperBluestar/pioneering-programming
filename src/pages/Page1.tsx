import moment from 'moment'
import { useState, useEffect, useMemo } from 'react'
import './Page1.css'

type ACTION = {
  title: string,
  datetime: Date,
}

const Page1 = () => {
  const [actions, setActions] = useState<Array<ACTION>>([])
  const [darkTheme, setDarkTheme] = useState<boolean>()
  const [text, setText] = useState<string>('')
  const [count, setCount] = useState<number>(1)
  const [countBtns, setCountBtns] = useState<Array<number>>([1])
  const addAction = (title: string) => setActions((_actions) => [..._actions, { title, datetime: new Date()}])
  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      setDarkTheme(false)
      addAction('Theme was set to Light')
    } else {
      document.body.classList.add('dark')
      setDarkTheme(true)
      addAction('Theme was set to Dark')
    }
  }
  const sendMessage = () => {
    addAction(`Message sent: ${text}`)
    setText('')
  }
  const clickAddButton = (id: number) => {
    addAction(`Button ${count + 1} added`)
    setCount((_count) => _count + 1)
    setCountBtns((_countBtns) => {
      console.log([..._countBtns.slice(0, id), count + 1, ..._countBtns.slice(id)])
      return [..._countBtns.slice(0, id), count + 1, ..._countBtns.slice(id)]
    })
  }
  useEffect(() => {
    setDarkTheme(document.body.classList.contains('dark'))
  }, [])
  return (
    <div className='page-1'>
      <div className='left-group'>
        {
          darkTheme === undefined ? null : <button onClick={toggleTheme}>Set {darkTheme ? 'Light' : 'Dark'} Theme</button>
        }
        <div className='input-group'>
          <textarea name="" id="" cols={30} rows={8} value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <button disabled={text.length === 0} onClick={sendMessage}>Sent</button>
        </div>
        {
          countBtns.map((_, index) => <button key={index} onClick={() => clickAddButton(index)}>Add Button {_}</button>)
        }
      </div>
      <div className='right-group'>
        {
          actions.map((action, id) => (
            <div className='history-item' key={id}>
              <div className='timestamp'>{moment(action.datetime).format('MM/DD/YY HH:mm:SS')}</div>
              <div className='message'>{action.title}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page1
