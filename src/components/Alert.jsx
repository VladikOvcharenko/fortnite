import { useEffect } from 'react'

function Alert(props) {
  const { name = '', closeAlert } = props
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000)
    return () => {
      clearTimeout(timerId)
    }
    //eslint-disable-next-line
  }, [name])

  return (
    <div id="toast-container">
      <div className="toast"> {name} add to Basket</div>
    </div>
  )
}

export { Alert }
