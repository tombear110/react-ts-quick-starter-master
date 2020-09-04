// import React, { useState, useEffect } from 'react'
// import { Spin } from 'antd'

// let timer = {}

// const Loading = () => {
//   const [isShow, setIsShow] = useState(false)

//   console.log('isShow :>>0000', isShow)

//   useEffect(() => {
//     console.log('componentDidMount: 组件加载后')

//     setIsShow(true)
//     timer = setTimeout(setIsShow(true), 500)

//     return () => {
//       console.log('componentWillUnmount: 组件卸载， 做一些清理工作')
//       clearTimeout(timer)
//     }
//   })

//   return isShow ? <Spin /> : null
// }

// // class Loading extends Component {
// //   state = {
// //     isShow: false,
// //   }

// //   componentDidMount() {
// //     // 延迟显示
// //     timer = setTimeout(this.show, 500)
// //   }

// //   componentWillUnmount() {
// //     // 在loading结束时卸载定时器
// //     clearTimeout(timer)
// //   }

// //   show = () => {
// //     this.setState({ isShow: true })
// //   }

// //   render() {
// //     return this.state.isShow && <Spin />
// //   }
// // }

// export default Loading
