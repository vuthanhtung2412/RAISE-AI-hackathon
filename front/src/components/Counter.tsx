import { useCounter } from '@/hooks/useCounter';


export default function Counter() {
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
      <br />
      <button onClick={increase}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
}
