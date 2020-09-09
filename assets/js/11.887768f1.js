(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{356:function(t,e,n){"use strict";n.r(e);var s=n(40),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"react-hooks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks"}},[t._v("#")]),t._v(" react hooks")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"usestate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),n("ol",[n("li",[t._v("基本使用")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import { useState } from "react";\nfunction App() {\n  // 数组里的第一项是sate里的变量，第二项是修改state的函数\n  // useState里的值就是count的初始值\n  const [count, setCount] = useState(0);\n  const add = () => {\n    setCount(count + 1);\n  };\n  return (\n    <div>\n      <div>{count}</div>\n      <div>\n        <button onClick={add}>+1</button>\n      </div>\n    </div>\n  );\n}\nReactDOM.render(<App />, document.querySelector("#root"));\n')])])]),n("p",[t._v("等价于")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class App extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      count: 0\n    };\n  }\n  setCount = () => {\n    this.setState({\n      count: this.state.count + 1\n    });\n  };\n  render() {\n    return (\n      <div>\n        <div>{this.state.count}</div>\n        <button onClick={this.setCount}>+1</button>\n      </div>\n    );\n  }\n}\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("复杂的state")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import React,{useState} from \'react\';\n\nfunction Home(){\n    const [user, setUser] = useState({\n        name: "lifa",\n        age: 18,\n        habits: ["123", "明星"]\n    });\n\n    const addHabit = () => {\n        // user 不能直接写，必须要结构出来，重新引用\n        setUser({\n            ...user,\n            name:\'121\',\n            age:12321,\n            habits:[...user.habits,\'歌手\']\n        })\n    }\n\n    return(\n        <div>\n            <p>姓名:{user.name}</p>\n            <p>年龄:{user.age}</p>\n            <div className="">\n                爱好:\n                    {\n                        user.habits && user.habits.map((item,index)=>{\n                            return(\n                                <span key={index} className="mar-15">{item}</span>\n                            )\n                        })\n                    }\n            </div>\n            <button onClick={addHabit}>添加爱好</button>\n        </div>\n    )\n}\nexport default Home;\n')])])]),n("p",[t._v("3.使用状态")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const [n,setN] = React.useState(0)\nconst [user, setUser] = React.useState({name: 'F'})\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("注意事项\n1). 如果state是一个对象，我们不能对对象里的部分属性setState，需要我们每次都把之前的属性全部重新结构一遍，然后下面再写你要修改的属性")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 错误代码\nconst [user,setUser] = useState({name:'lifa', age: 18})\nconst onClick = ()=>{\n    setUser({\n      name: 'Jack'\n    })\n  }\n\n//正确代码\nsetUser({\n   ...user,\n   name: 'Jack'\n })\n")])])]),n("p",[t._v("2). 地址要变\nsetState(obj)如果obj地址不变，那么React就认为数据没有变化")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 错误代码\nconst [user,setUser] = useState({name:'lifa', age: 18})\nconst onClick = () => {\n  // 在原来的引用地址上修改name属性，不会起作用\n  user.name = 'jack'\n  setUser(user)\n}\n\n// 正确代码\nconst [user,setUser] = useState({name:'lifa', age: 18})\nconst onClick = () => {\n  // 重新生成一个引用地址\n  setUser({\n    ...user,\n    name: 'jack'\n  })\n}\n")])])]),n("p",[t._v("3). useState只能放在函数组件内部，不能单独拿出来\n4. useState可以接受函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const [state, setState] = useState(()=>{\n  return initialState\n})\n")])])]),n("p",[t._v("该函数返回初始state, 且只执行一次")]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("setState可以接受函数\n我们如果要多次对useState进行操作的话推荐使用函数\n以两次修改useState对其进行加一操作为例")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const [n,setN] = useState(1)\nconst onClick = () => {\n  setN(n+1)\n  setN(n+1)\n}\n")])])]),n("p",[t._v("上面我们在点击事件里执行了两次修改n，每次让他加一，可实际上他只会变一次，因为n本身是不会变的，而是每次生成一个新的n，所以上面结果是2而不是3，如果想要它加2的话就要用函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("setN(i=>i+1)\nsetN(i=>i+1)\n")])])]),n("p",[t._v("上面的i是一个占位符，随便什么都可以，就是我们传一个值给setN，每次返回当前的值+1，所以最后会加2，得到的结果是3")])])}),[],!1,null,null,null);e.default=a.exports}}]);