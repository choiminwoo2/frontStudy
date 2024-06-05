import useStore from "../store/index.js";

const Counter = () => {
    const { count, increment } = useStore()
    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>one up</button>
        </div>
    )
}

export default Counter;