import ReactDOM from 'react-dom';

// function FedPrinter() {
//     FedPrinter.init.call(this)
// }

// FedPrinter.init = function() {
//     if (!arguments[0] || typeof arguments[0] !== 'string') {
//         throw new RangeError('请提供正确的容器节点id'); 
//     }

//     // 动态加载wps脚本

//     // 通过react渲染页面到指定节点
//     ReactDOM.render(
//         <h1>Hello, world!</h1>,
//         document.getElementById(arguments[0])
//     )
// }

// FedPrinter.prototype.method = function() {
//     console.log(123)   
// }

export default class FedPrinter {
    constructor(container) {
        if (!container || typeof container !== 'string') {
            throw new RangeError('请提供正确的容器节点id');
        }
        // 动态加载wps脚本

        // 通过react渲染页面到指定节点
        ReactDOM.render(
            <h1>Hello, world!</h1>,
            document.getElementById(arguments[0])
        )
    }

    method() {
        console.log(123)
    }
}
